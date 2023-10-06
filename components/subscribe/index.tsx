import Link from "next/link";

const Subscribe = () => {
  return (
    <>
       <section className="features pt0 pb0">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <div className="main-title">
              <h3 className="hot_deal_title text-start">Sale Products</h3>
            </div>
            <div className="sale_product_item mb-4 mb-lg-0">
              <div className="shop_item home2_style line_clip_less large_font">
                <div className="thumb pb70 pt40"> <img src="images/shop-items/sale-product1.png" alt="Sale Product" />
                  <div className="thumb_info">
                    <ul className="mb0">
                      <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                      <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                      <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                    </ul>
                  </div>
                  <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                </div>
                <div className="details">
                  <div className="sub_title">SONY</div>
                  <div className="title"><Link href="page-shop-single-v1.html">MOBI DualScan Prime Ear and Forehead Digital Thermometer with Memory</Link></div>
                  <div className="review d-flex">
                    <ul className="mb0 me-2">
                      <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                      <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                      <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                      <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                      <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                    </ul> 
                    <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                  </div>
                  <div className="si_footer bb1 pb20">
                    <div className="price">$32.50 <small><del>$45</del></small></div>
                  </div>
                </div>
              </div>
              <div className="event_counter_plugin_container">
                <div className="event_counter_plugin_content">
                  <ul>
                    <li className="text-center"><span id="days"></span>days</li>
                    <li className="text-center"><span id="hours"></span>Hours</li>
                    <li className="text-center"><span id="minutes"></span>Minutes</li>
                    <li className="text-center"><span id="seconds"></span>Seconds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="d-block d-md-flex justify-content-between">
              <div className="main-title">
                <h3 className="hot_deal_title text-start">Best Seller</h3>
              </div>
              <div className="popular_listing_sliders ui_kit_tab style2">
                <div className="nav nav-tabs mb30" role="tablist">
                  <button className="nav-link active" id="nav-enarive-tab" data-bs-toggle="tab" data-bs-target="#nav-enarive" role="tab" aria-controls="nav-enarive" aria-selected="true">New Arrivals</button>
                  <button className="nav-link" id="nav-ebseller-tab" data-bs-toggle="tab" data-bs-target="#nav-ebseller" role="tab" aria-controls="nav-ebseller" aria-selected="false">Featured</button>
                  <button className="nav-link" id="nav-ebrated-tab" data-bs-toggle="tab" data-bs-target="#nav-ebrated" role="tab" aria-controls="nav-ebrated" aria-selected="false">Sale</button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="popular_listing_sliders row ui_kit_tab style2"> 
                
                  <div className="tab-content col-lg-12" id="nav-tabContent2">
                    <div className="tab-pane fade show active" id="nav-enarive" role="tabpanel" aria-labelledby="nav-enarive-tab">
                      <div className="row">
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-cap1.png" alt="Cap"/>
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Local Crowns Texas Heather Leather State Patch Curved</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-sunglass1.png" alt="Sunglass" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Ray Ban RB3025 Aviator Sunglasses 58 mm</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-clock1.png" alt="Clock" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Fossil Outlet Men's Flynn Chronograph, Smoke-Tone</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-gamesticks1.png" alt="Gamesticks" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Xbox Wireless Controller (2020) with USB-C Cable</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-printer1.png" alt="Printer" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">HP DeskJet 2755e Wireless All-In-One Inkjet Printer</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-headphone1.png" alt="Headphone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Shure SRH440 Professional Studio Headphones</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-iphone1.png" alt="iPhone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">TELUS Apple iPhone 13 Pro Max 128GB - Sierra Blue</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-wallet1.png" alt="Wallet" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">RFID Carbon Fiber Wallets for Men - Minimalist</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-ebseller" role="tabpanel" aria-labelledby="nav-ebseller-tab">
                      <div className="row">
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-cap1.png" alt="Cap" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Local Crowns Texas Heather Leather State Patch Curved</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-sunglass1.png" alt="Sunglass " />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Ray Ban RB3025 Aviator Sunglasses 58 mm</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-clock1.png" alt="Clock" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Fossil Outlet Men's Flynn Chronograph, Smoke-Tone</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-gamesticks1.png" alt="Gamesticks" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Xbox Wireless Controller (2020) with USB-C Cable</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-printer1.png" alt="Printer" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">HP DeskJet 2755e Wireless All-In-One Inkjet Printer</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-headphone1.png" alt="Headphone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Shure SRH440 Professional Studio Headphones</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-iphone1.png" alt="iPhone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">TELUS Apple iPhone 13 Pro Max 128GB - Sierra Blue</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-wallet1.png" alt="Wallet" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">RFID Carbon Fiber Wallets for Men - Minimalist</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="nav-ebrated" role="tabpanel" aria-labelledby="nav-ebrated-tab">
                      <div className="row">
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-cap1.png" alt="Cap" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Local Crowns Texas Heather Leather State Patch Curved</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-sunglass1.png" alt="Sunglass" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Ray Ban RB3025 Aviator Sunglasses 58 mm</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-clock1.png" alt="Clock" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Fossil Outlet Men's Flynn Chronograph, Smoke-Tone</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-gamesticks1.png" alt="Gamesticks" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Xbox Wireless Controller (2020) with USB-C Cable</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-printer1.png" alt="Printer" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">HP DeskJet 2755e Wireless All-In-One Inkjet Printer</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-headphone1.png" alt="Headphone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">Shure SRH440 Professional Studio Headphones</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-6 col-xl-3 px-2 px-sm-0">
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-iphone1.png" alt="iPhone" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">TELUS Apple iPhone 13 Pro Max 128GB - Sierra Blue</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
                              </div>
                            </div>
                          </div>
                          <div className="shop_item home2_style line_clip_less small_font">
                            <div className="thumb pb20"> <img src="images/shop-items/si-wallet1.png" alt="Wallet" />
                              <div className="thumb_info">
                                <ul className="mb0">
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-heart"></span></Link></li>
                                  <li><Link href="page-dashboard-wish-list.html"><span className="flaticon-show"></span></Link></li>
                                  <li><Link href="page-shop-list-v6.html"><span className="flaticon-graph"></span></Link></li>
                                </ul>
                              </div>
                              <div className="shop_item_cart_btn d-grid"> <Link href="page-shop-cart.html" className="btn btn-thm bdrs0">Add to Cart</Link> </div>
                            </div>
                            <div className="details">
                              <div className="sub_title">SONY</div>
                              <div className="title"><Link href="page-shop-single-v1.html">RFID Carbon Fiber Wallets for Men - Minimalist</Link></div>
                              <div className="review d-flex">
                                <ul className="mb0 me-2">
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                  <li className="list-inline-item"><Link href="index.html"><i className="fas fa-star"></i></Link></li>
                                </ul>
                                <div className="review_count"><Link href="index.html">3,014 reviews</Link></div>
                              </div>
                              <div className="si_footer">
                                <div className="price">$32.50 <small><del>$45</del></small></div>
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
          </div>
        </div>
      </div>
    </section>

    </>
  )
};


export default Subscribe