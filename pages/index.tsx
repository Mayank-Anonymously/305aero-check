import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { saveState } from "../utils/localstorage";
import { useEffect } from "react";

const IndexPage = () => {
  const callApi = async () => {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(
      "https://api.ingrammicro.com:443/oauth/oauth30/token?grant_type=client_credentials&client_id=SfGb7LenN6SazVajNzLKde429jDjCmRd&client_secret=f8dJJjW2M6Zuajom",
      options
    );
    const token = await res.json();
    saveState("token", token.access_token);
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 23);
    targetTime.setMinutes(targetTime.getMinutes() + 59);
    const currentTime = new Date();
    const timeDifference = targetTime.getTime() - currentTime.getTime();

    // Schedule the API call with setTimeout
    const timerId = setTimeout(callApi, timeDifference);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timerId);
  };

  useEffect(() => {
    callApi();
  }, []);
  return (
    <Layout>
      <PageIntro />

      <section className="top-category pb30 pt70">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-sm-start">
                <h2>Explore popular brands</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="main-title text-center text-sm-end mb-5">
                <Link
                  className="title_more_btn mt10"
                  href="page-shop-list-v2.html"
                >
                  See All
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shop_item_8grid_slider nav_none dots_none">
                <div className="item">
                  <Link href="page-shop-list-v6.html">
                    <div className="iconbox home2_style">
                      <div className="icon">
                        <img
                          src="images/shop-items/epb1.png"
                          alt="Explore Popular Brand"
                        />
                      </div>
                      <div className="details">
                        <h5 className="title">Apple</h5>
                        <p className="subtitle">29 items</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="page-shop-list-v6.html">
                    <div className="iconbox home2_style">
                      <div className="icon">
                        <img
                          src="images/shop-items/epb2.png"
                          alt="Category Image"
                        />
                      </div>
                      <div className="details">
                        <h5 className="title">Samsung</h5>
                        <p className="subtitle">29 items</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="page-shop-list-v6.html">
                    <div className="iconbox">
                      <div className="icon">
                        <img
                          src="images/shop-items/epb3.png"
                          alt="Category Image"
                        />
                      </div>
                      <div className="details home2_style">
                        <h5 className="title">Sony</h5>
                        <p className="subtitle">29 items</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="page-shop-list-v6.html">
                    <div className="iconbox home2_style">
                      <div className="icon">
                        <img
                          src="images/shop-items/epb4.png"
                          alt="Category Image"
                        />
                      </div>
                      <div className="details">
                        <h5 className="title">Nike</h5>
                        <p className="subtitle">29 items</p>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="item">
                  <Link href="page-shop-list-v6.html">
                    <div className="iconbox home2_style">
                      <div className="icon">
                        <img
                          src="images/shop-items/epb5.png"
                          alt="Category Image"
                        />
                      </div>
                      <div className="details">
                        <h5 className="title">Adidas</h5>
                        <p className="subtitle">29 items</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-product pb80 pt0">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="main-title text-center text-lg-start">
                <h2>Top Selling Products</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="popular_listing_sliders ui_kit_tab style2">
                <div
                  className="nav nav-tabs mb30 justify-content-center justify-content-lg-end"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Top 20
                  </button>
                  <button
                    className="nav-link"
                    id="nav-shopping-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-shopping"
                    role="tab"
                    aria-controls="nav-shopping"
                    aria-selected="false"
                  >
                    Baby
                  </button>
                  <button
                    className="nav-link"
                    id="nav-hotels-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-hotels"
                    role="tab"
                    aria-controls="nav-hotels"
                    aria-selected="false"
                  >
                    Furniture
                  </button>
                  <button
                    className="nav-link"
                    id="nav-destination-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-destination"
                    role="tab"
                    aria-controls="nav-destination"
                    aria-selected="false"
                  >
                    Electronic
                  </button>
                  <button
                    className="nav-link me-0"
                    id="nav-bread-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-bread"
                    role="tab"
                    aria-controls="nav-bread"
                    aria-selected="false"
                  >
                    All
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-12">
              <div className="popular_listing_sliders row ui_kit_tab style2">
                <div className="tab-content col-lg-12" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    <div className="shop_item_5grid_slider dots_none owl-theme owl-carousel d-flex">
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm1.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SAMSUNG</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Great Value Ultra Strong Paper Towels, Split
                                Sheets, 6 Double
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm2.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SONY</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Dell Inspiron 3000 15.6" Touchscreen Laptop -
                                Black (Intel Core i5-1035G1/256GB SSD/8GB
                                RAM/Windows 11 S)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm3.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">Eastsport</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                LG Gram 17" Laptop -Obsidian Black (Intel Evo
                                Core i7-1165G7/1TB SSD/16GB RAM) -En -Only at
                                Best Buy
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $399.00
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm4.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm5.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $18.124
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-shopping"
                    role="tabpanel"
                    aria-labelledby="nav-shopping-tab"
                  >
                    <div className="shop_item_5grid_slider dots_none owl-theme owl-carousel">
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm1.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SAMSUNG</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Great Value Ultra Strong Paper Towels, Split
                                Sheets, 6 Double
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm2.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SONY</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Dell Inspiron 3000 15.6" Touchscreen Laptop -
                                Black (Intel Core i5-1035G1/256GB SSD/8GB
                                RAM/Windows 11 S)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm3.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">Eastsport</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                LG Gram 17" Laptop -Obsidian Black (Intel Evo
                                Core i7-1165G7/1TB SSD/16GB RAM) -En -Only at
                                Best Buy
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $399.00
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm4.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm5.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $18.124
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-hotels"
                    role="tabpanel"
                    aria-labelledby="nav-hotels-tab"
                  >
                    <div className="shop_item_5grid_slider dots_none owl-theme owl-carousel">
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm1.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SAMSUNG</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Great Value Ultra Strong Paper Towels, Split
                                Sheets, 6 Double
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm2.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SONY</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Dell Inspiron 3000 15.6" Touchscreen Laptop -
                                Black (Intel Core i5-1035G1/256GB SSD/8GB
                                RAM/Windows 11 S)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm3.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">Eastsport</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                LG Gram 17" Laptop -Obsidian Black (Intel Evo
                                Core i7-1165G7/1TB SSD/16GB RAM) -En -Only at
                                Best Buy
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $399.00
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm4.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm5.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $18.124
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-destination"
                    role="tabpanel"
                    aria-labelledby="nav-destination-tab"
                  >
                    <div className="shop_item_5grid_slider dots_none owl-theme owl-carousel">
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm1.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SAMSUNG</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Great Value Ultra Strong Paper Towels, Split
                                Sheets, 6 Double
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm2.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SONY</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Dell Inspiron 3000 15.6" Touchscreen Laptop -
                                Black (Intel Core i5-1035G1/256GB SSD/8GB
                                RAM/Windows 11 S)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm3.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">Eastsport</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                LG Gram 17" Laptop -Obsidian Black (Intel Evo
                                Core i7-1165G7/1TB SSD/16GB RAM) -En -Only at
                                Best Buy
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $399.00
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm4.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm5.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $18.124
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-bread"
                    role="tabpanel"
                    aria-labelledby="nav-bread-tab"
                  >
                    <div className="shop_item_5grid_slider dots_none owl-theme owl-carousel">
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm1.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SAMSUNG</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Great Value Ultra Strong Paper Towels, Split
                                Sheets, 6 Double
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm2.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">SONY</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                Dell Inspiron 3000 15.6" Touchscreen Laptop -
                                Black (Intel Core i5-1035G1/256GB SSD/8GB
                                RAM/Windows 11 S)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm3.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">Eastsport</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                LG Gram 17" Laptop -Obsidian Black (Intel Evo
                                Core i7-1165G7/1TB SSD/16GB RAM) -En -Only at
                                Best Buy
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $399.00
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm4.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $32.50
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="shop_item small_style hvr_bdr1 home2_style">
                          <div className="thumb pb30">
                            <img
                              src="images/shop-items/bslm5.png"
                              alt="Best Seller Item"
                            />
                            <div className="thumb_info">
                              <ul className="mb0">
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-heart"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-dashboard-wish-list.html">
                                    <span className="flaticon-show"></span>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="page-shop-list-v6.html">
                                    <span className="flaticon-graph"></span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="shop_item_cart_btn d-grid">
                              <Link
                                href="page-shop-cart.html"
                                className="btn btn-thm"
                              >
                                Add to Cart
                              </Link>
                            </div>
                          </div>
                          <div className="details">
                            <div className="sub_title">rolex</div>
                            <div className="title">
                              <Link href="page-shop-single-v1.html">
                                HP 15.6" Touchscreen Laptop - Natural Silver
                                (AMD Ryzen 5 5625U/1TB SSD/12GB RAM/Windows 11)
                              </Link>
                            </div>
                            <div className="review d-flex">
                              <ul className="mb0 me-2">
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li className="list-inline-item">
                                  <Link href="index.html">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                              <div className="review_count">
                                <Link href="index.html">3,014 reviews</Link>
                              </div>
                            </div>
                            <div className="si_footer">
                              <div className="price">
                                $18.124
                                <small>
                                  <del>$45</del>
                                </small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <ProductsFeatured />
      {/* <Subscribe /> */}
      <Footer />
    </Layout>
  );
};

export default IndexPage;
