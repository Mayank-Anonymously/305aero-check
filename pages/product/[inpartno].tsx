import { GetServerSideProps } from "next";

import { useState } from "react";
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

// types
const token = loadState("token");

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { inpartno } = query;
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("IM-CustomerNumber", "70-040712");
  myHeaders.append("IM-CountryCode", "US");
  myHeaders.append("IM-CorrelationID", "fbac82ba-cf0a-4bcf-fc03-0c5084");
  myHeaders.append("IM-SenderID", "305AeroSupplies");
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${"cV2Rik1SZDkVs1AvrsMYN8UmEYIP"}`);

  var raw = JSON.stringify({
    products: [
      {
        ingramPartNumber: "06VF66",
      },
    ],
  });

  var requestOptions: RequestInit = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const apifetch = await fetch(
    "https://api.ingrammicro.com:443/resellers/v6/catalog/priceandavailability?includeAvailability=true&includePricing=true&includeProductAttributes=false",
    requestOptions
  );
  const response = await apifetch.json();
  return {
    props: {
      id: inpartno,
      response: response,
    },
  };
};
console.log(token);

const Product = (props: any) => {
  const { id, response } = props;
  const [showBlock, setShowBlock] = useState("description");
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

  if (isLoading) {
    return <div>Please while we fetch details for you</div>;
  }
  if (isError) {
    window.location.reload();
    return (
      <div className="text-center">
        something went wrong or data fetching is in process.
      </div>
    );
  }
  if (data) {
    const products = data;
    const description = (data as any)?.productDetailDescription || [];
    const price = (response as any)[0]?.pricing || [];

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
