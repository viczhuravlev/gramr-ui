import { useRef, useEffect, useReducer } from 'react';

enum Status {
  error = 'error',
  loaded = 'loaded',
  loading = 'loading',
  notLoaded = 'notLoaded',
}

type Data<D> = D | null;
type Action<D> =
  | { type: Status.loading }
  | { type: Status.loaded; payload: Data<D> }
  | { type: Status.error; payload: string | null };

interface Cache<D> {
  [key: string]: {
    data: Data<D> | undefined;
    time: number;
  };
}

interface State<D> {
  data: Data<D>;
  error: string | null;
  status: keyof typeof Status;
}

function getInitialState<D>(): State<D> {
  return {
    data: null,
    error: null,
    status: Status.notLoaded,
  };
}

function reducer<D>(state: State<D>, action: Action<D>) {
  switch (action.type) {
    case Status.loading:
      return { ...getInitialState<D>(), status: Status.loading };

    case Status.loaded:
      return {
        ...getInitialState<D>(),
        status: Status.loaded,
        data: action.payload,
      };

    case Status.error:
      return {
        ...getInitialState<D>(),
        status: Status.error,
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
) {
  const cache = useRef<Cache<D>>({});

  const [state, dispatch] = useReducer(reducer, getInitialState<D>());

  useEffect(() => {
    let cancelRequest = false;

    if (!url) return undefined;

    async function fetchData() {
      dispatch({ type: Status.loading });

      const cacheName = getCacheName(url, requestParams);

      if (cache.current[cacheName]?.time + cacheTime < Date.now()) {
        dispatch({
          type: Status.loaded,
          payload: cache.current[cacheName].data,
        });

        return;
      }

      try {
        const response = await fetch(url, requestParams);

        const data = await response.json();

        if (cancelRequest) return;

        cache.current[cacheName] = {
          data,
          time: Date.now(),
        };

        dispatch({ type: Status.loaded, payload: data });
      } catch (error) {
        if (cancelRequest) return;

        dispatch({ type: Status.error, payload: error.message });
      }
    }

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url, requestParams, cacheTime]);

  return state;
}

export default useFetch;
