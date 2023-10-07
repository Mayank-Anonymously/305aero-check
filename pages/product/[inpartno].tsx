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

// types

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { inpartno } = query;

  return {
    props: {
      inpartno,
    },
  };
};

const Product = ({ inpartno }: any) => {
  const [showBlock, setShowBlock] = useState("description");
  const token = loadState("token");
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
    return (
      <Layout>
        <Breadcrumb />

        <section className="product-single">
          <div className="container">
            <div className="product-single__content">
              <Gallery images={"/images/placeholder/product_placeholder.png"} />
              <Content product={products} />
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
                description={products.productDetailDescription}
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
