import useSWR from "swr";

interface RequestOptions {
  method: string;
  headers: HeadersInit;
  body?: BodyInit | null;
}

const fetcher = async <T,>(
  url: string,
  options: RequestOptions
): Promise<T> => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
};

export function useGetWithRequestBody<T>(
  apiEndpoint: string,
  headers: HeadersInit
) {
  const { data, error } = useSWR<T>(apiEndpoint, (url) =>
    fetcher(url, {
      method: "GET",
      headers: {
        ...headers,
      },
    })
  );

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}
