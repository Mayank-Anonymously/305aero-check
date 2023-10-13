import ProductsCarousel from "./carousel";
import { useGetWithRequestBody } from "../../pages/api/priceandavailabilty";
import Link from "next/link";
import { loadState } from "../../utils/localstorage";

const ProductsFeatured = () => {
  const token = loadState("token");
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
    Authorization: `Bearer ${token}`,
  };

  const { data, isLoading, isError } = useGetWithRequestBody(
    apiEndpoint,
    headers
  );

  const catalogData = (data as any)?.catalog || [];
  const next = (data as any)?.nextPage || [];
  const previous = (data as any)?.previousPage || [];

  if (isLoading) {
    return <div>Wait While Products Being Fetched.</div>;
  }

  if (isError) {
    return (
      <div>
        Something Went Wrong While Fetching Data. Please refresh your page.
      </div>
    );
  }

  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Selected just for you</h3>
          <Link href="/products" className="btn btn--rounded btn--border">
            Show All
          </Link>
        </header>

        <ProductsCarousel products={catalogData} />
      </div>
    </section>
  );
};

export default ProductsFeatured;
