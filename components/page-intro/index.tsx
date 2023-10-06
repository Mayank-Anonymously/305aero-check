import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {EffectFade, Navigation} from 'swiper';
import Link from "next/link"

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <>
    <section className="page-intro">  


<div className="home-two p0">
      <div className="container-fluid maxw1800">
        <div className="row">
          <div className="col-lg-8 col-xl-9">
            <div className="banner_one_large home2_banner_style bdrs6 px-4 px-lg-0 mb-4 mb-lg-0" style={{"backgroundImage":" url(images/home/2.jpg)", "height": "550px"}}>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 col-xl-8">
                  <div className="apple_widget_home1 mb-4 mb-lg-0 mt70 mt0-520"> <span className="tag">Limited Edition</span>
                    <h3 className="title"><span className="fw400">Game Consoles and </span><br/>
                      Accessories Super Deals</h3>
                    <Link href="page-shop-cart.html" className="btn banner-btn btn-thm">Shop Now</Link> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="home2_right_slider">
              <div className="bestseller_sidebar_slider dots_none home8_style">
                

      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
        <div className="item">
                  <div className="banner_one home1_style home2_home_style color1 before_none">
                    <div className="details">
                      <p className="para color-light-blue">Starting from <span className="fw500">$899.</span></p>
                      <h3 className="title">Health Care Monitor</h3>
                      <Link href="page-shop-list-v1.html" className="shop_btn">Shop Now</Link> </div>
                    <div className="thumb text-center"><img src="images/shop-items/home2-banner-item2.png" alt="Home 2 banner Side Item" /></div>
                  </div>
                </div>
        </SwiperSlide>

        <SwiperSlide>
         
            <div className="container">
              <div className="item">
                  <div className="banner_one home1_style home2_home_style color1 before_none">
                    <div className="details">
                      <p className="para color-light-blue">Starting from <span className="fw500">$899.</span></p>
                      <h3 className="title">Health Care Monitor</h3>
                      <Link href="page-shop-list-v1.html" className="shop_btn">Shop Now</Link> </div>
                    <div className="thumb text-center"><img src="images/shop-items/home2-banner-item1.png" alt="Home 2 banner Side Item" /></div>
                  </div>
                </div>
            </div>
          
        </SwiperSlide>
      </Swiper>
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

export default PageIntro