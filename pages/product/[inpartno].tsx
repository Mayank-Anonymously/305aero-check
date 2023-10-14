import { GetServerSideProps } from "next";

import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import { ingramserver, server } from "../../utils/server";
import { ProductDetailType } from "../../types";
import { loadState } from "../../utils/localstorage";
import { useGetWithRequestBody } from "../api/productDetail";
import YourComponent from "../api/price";
import Specification from "../../components/product-single/specification/specification";
import AdditionalInfo from "../../components/product-single/Additional_Info/additional_Info";

// types
const token = loadState("token");

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { inpartno } = query;

  return {
    props: {
      id: inpartno,
    },
  };
};
const Product = (props: any) => {
  const { id } = props;
  const [showBlock, setShowBlock] = useState("description");
  const [response, setResponse] = useState();
  const apiEndpoint = `${ingramserver}/resellers/v6/catalog/details/${"6YE881"}`; // Replace with your API endpoint
  const headers = {
    accept: "application/json",
    "IM-CustomerNumber": "70-040712",
    "IM-CountryCode": "US",
    "IM-SenderID": "305AeroSupplies",
    "IM-CorrelationID": "fbac82ba-cf0a-4bcf-fc03-0c5084",
    Authorization: `Bearer ${token}`,
  };

  const { data, isLoading, isError } = useGetWithRequestBody(
    apiEndpoint,
    headers
  );
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("accept", "application/json");
    myHeaders.append("IM-CustomerNumber", "70-040712");
    myHeaders.append("IM-CountryCode", "US");
    myHeaders.append("IM-CorrelationID", "fbac82ba-cf0a-4bcf-fc03-0c5084");
    myHeaders.append("IM-SenderID", "305AeroSupplies");
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    const raw = JSON.stringify({
      products: [
        {
          ingramPartNumber: "06VF66",
        },
      ],
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://api.ingrammicro.com:443/resellers/v6/catalog/priceandavailability?includeAvailability=true&includePricing=true&includeProductAttributes=false",
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => setResponse(response))
      .then((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Please while we fetch details for you</div>;
  }
  if (isError) {
    return (
      <div className="text-center">
        something went wrong or data fetching is in process.
      </div>
    );
  }
  if (data) {
    const products = data;
    const description = (data as any)?.productDetailDescription || [];
    const specification = (data as any)?.indicators || [];
    const information = (data as any)?.additionalInformation || [];

    const price = response ? (response as any)[0]?.pricing || [] : [];
    console.log("data:", data);

    return (
      <Layout>
        <Breadcrumb />
        <section className="product-single">
          <div className="container">
            <div className="product-single__content">
              <Gallery images={"/images/placeholder/product_placeholder.png"} />
              <Content product={products} price={price} priceData={response} />
            </div>

            <div className="product-single__info">
              <div className="product-single__info-btns">
                <button
                  type="button"
                  onClick={() => setShowBlock("description")}
                  className={`btn btn--rounded ${
                    showBlock === "description" ? "btn--active" : ""
                  }`}
                >
                  Description
                </button>
                <button
                  type="button"
                  onClick={() => setShowBlock("specification")}
                  className={`btn btn--rounded ${
                    showBlock === "specification" ? "btn--active" : ""
                  }`}
                >
                  Specification
                </button>
                <button
                  type="button"
                  onClick={() => setShowBlock("information")}
                  className={`btn btn--rounded ${
                    showBlock === "information" ? "btn--active" : ""
                  }`}
                >
                  Information
                </button>
                <button
                  type="button"
                  onClick={() => setShowBlock("reviews")}
                  className={`btn btn--rounded ${
                    showBlock === "reviews" ? "btn--active" : ""
                  }`}
                >
                  Reviews (2)
                </button>
              </div>

              <Description
                show={showBlock === "description"}
                description={description}
              />
              <Specification
                show={showBlock === "specification"}
                specification={specification}
              />
              {/* <AdditionalInfo
                show={showBlock === "information"}
                information={information}
              /> */}
              {/* <Reviews product={product} show={showBlock === "reviews"} /> */}
            </div>
          </div>
        </section>

        <div className="product-single-page">
          <ProductsFeatured />
        </div>
        <Footer />
      </Layout>
    );
  }
};

export default Product;
