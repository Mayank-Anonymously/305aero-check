import useSWR from "swr";

interface RequestOptions {
  method: string;
  headers: HeadersInit;
  body?: BodyInit | null;
}
const apiEndpoint =
  "https://api.ingrammicro.com:443/resellers/v6/catalog?pageNumber=1&pageSize=25&hasDiscounts=false&category=Accessories&skipAuthorisation=true"; // Replace with your API endpoint
const headers = {
  "Content-Type": "application/json",
  accept: "application/json",
  "IM-CustomerNumber": "70-040712",
  "IM-SenderID": "305AeroSupplies",
  "IM-CorrelationID": "fbac82ba-cf0a-4bcf-fc03-0c5084",
  "IM-CountryCode": "US",
  "Accept-Language": "en",
  Authorization: "Bearer 0qGZTXLA9LbIjW3dPWjoWylmSltE", // Replace with your authentication headers
};

const fetcher = async (url: string, options: RequestOptions) => {
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
