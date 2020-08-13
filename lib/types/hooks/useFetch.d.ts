export declare enum FetchStatus {
    error = "error",
    loaded = "loaded",
    loading = "loading",
    notLoaded = "notLoaded"
}
declare type Data<D> = D | null;
interface State<D> {
    data: Data<D>;
    error: string | null;
    status: keyof typeof FetchStatus;
}
declare function useFetch<D>(url: string, requestParams?: RequestInit, cacheTime?: number): State<D> & {
    fetchData: () => Promise<void>;
};
export { useFetch };
