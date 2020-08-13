import { useRef, useEffect, useCallback, useReducer } from 'react';

export enum FetchStatus {
  error = 'error',
  loaded = 'loaded',
  loading = 'loading',
  notLoaded = 'notLoaded',
}

type Data<D> = D | null;
type Action<D> =
  | { type: FetchStatus.loading }
  | { type: FetchStatus.loaded; payload: Data<D> }
  | { type: FetchStatus.error; payload: string | null };

interface Cache<D> {
  [key: string]: {
    data: Data<D>;
    time: number;
  };
}

interface State<D> {
  data: Data<D>;
  error: string | null;
  status: keyof typeof FetchStatus;
}

function getInitialState<D>(): State<D> {
  return {
    data: null,
    error: null,
    status: FetchStatus.notLoaded,
  };
}

function reducer<D>(state: State<D>, action: Action<D>) {
  switch (action.type) {
    case FetchStatus.loading:
      return { ...getInitialState<D>(), status: FetchStatus.loading };

    case FetchStatus.loaded:
      return {
        ...getInitialState<D>(),
        status: FetchStatus.loaded,
        data: action.payload,
      };

    case FetchStatus.error:
      return {
        ...getInitialState<D>(),
        status: FetchStatus.error,
        error: action.payload,
      };

    default:
      return state;
  }
}

function getCacheName(url: string, requestParams?: RequestInit): string {
  return requestParams ? `${url}_${JSON.stringify(requestParams)}` : url;
}

function useFetch<D>(
  url: string,
  requestParams?: RequestInit,
  cacheTime = 1000
): State<D> & { fetchData: () => Promise<void> } {
  const cache = useRef<Cache<D>>({});
  const cancelRequest = useRef<boolean>(false);

  const [fullState, dispatch] = useReducer(
    (state: State<D>, action: Action<D>) => reducer<D>(state, action),
    getInitialState<D>()
  );

  const asyncFetchData = useCallback(
    async function fetchData() {
      if (!url) return;

      cancelRequest.current = false;

      dispatch({ type: FetchStatus.loading });

      const cacheName = getCacheName(url, requestParams);

      if (cache.current[cacheName]?.time + cacheTime > Date.now()) {
        dispatch({
          type: FetchStatus.loaded,
          payload: cache.current[cacheName].data,
        });

        return;
      }

      try {
        const response = await fetch(url, requestParams);

        const data = await response.json();

        if (cancelRequest.current) return;

        cache.current[cacheName] = {
          data,
          time: Date.now(),
        };

        dispatch({ type: FetchStatus.loaded, payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: FetchStatus.error, payload: error.message });
      }
    },
    [url, cacheTime, requestParams]
  );

  useEffect(() => {
    if (!url) return undefined;

    asyncFetchData();

    return function cleanup() {
      cancelRequest.current = true;
    };
  }, [url, asyncFetchData]);

  return { ...fullState, fetchData: asyncFetchData };
}

export { useFetch };
