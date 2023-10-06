
import Link from "next/link"

const Footer = () => {
  return (
      <>

<section className="features pt50 pb30 bt1">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-xl-3">
            <div className="icon_boxes d-flex">
              <div className="icon"> <span className="flaticon-fast-delivery"></span> </div>
              <div className="details">
                <h5 className="title">Free Shipping</h5>
                <p className="para">Free Shipping for orders over $200</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="icon_boxes d-flex">
              <div className="icon"> <span className="flaticon-shield"></span> </div>
              <div className="details">
                <h5 className="title">Money Guarantee</h5>
                <p className="para">Within 30 days for an exchange.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="icon_boxes d-flex">
              <div className="icon"> <span className="flaticon-headphones"></span> </div>
              <div className="details">
                <h5 className="title">Online Support</h5>
                <p className="para">24 hours a day, 7 days a week</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-xl-3">
            <div className="icon_boxes d-flex">
              <div className="icon"> <span className="flaticon-credit-card"></span> </div>
              <div className="details">
                <h5 className="title">Flexible Payment</h5>
                <p className="para">Pay with Multiple Credit Cards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="footer_one home2 parallax" data-stellar-background-ratio="1.1">
      <div className="container pb60">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="mailchimp_widget home2_style mb30-md text-center">
              <div className="icon float-start"><span className="flaticon-email-1"></span></div>
              <div className="details">
                <h3 className="title">Subscribe and get 20% discount.</h3>
              </div>
            </div>
            <div className="footer_social_widget">
              <form className="footer_mailchimp_form home2_style">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <input type="email" className="form-control" placeholder="Your email address" />
                    <button className="ms-sm-2 btn-thm" type="submit">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt60">
          <div className="col-sm-6 col-md-5 col-lg-3 col-xl-3">
            <div className="footer_contact_widget home2_style">
              <h4>Contact Us</h4>
              <div className="footer_contact_iconbox home2_style d-flex mb-4">
                <div className="icon"><span className="flaticon-phone-call"></span></div>
                <div className="details ms-4">
                  <h5 className="title">Monday-Friday: 08am-9pm</h5>
                  <Link href="index.html">+(1) 123 456 7890</Link> </div>
              </div>
              <div className="footer_contact_iconbox home2_style d-flex">
                <div className="icon"><span className="flaticon-email"></span></div>
                <div className="details ms-4">
                  <h5 className="title">Need help with your order?</h5>
                  <Link href="index.html">support@305 Aero.com</Link> </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="footer_qlink_widget home2_style">
              <h4>About Zenmart</h4>
              <ul className="list-unstyled">
                <li><Link href="index.html">Track Your Order</Link></li>
                <li><Link href="index.html">Product Guides</Link></li>
                <li><Link href="index.html">Wishlists</Link></li>
                <li><Link href="index.html">Privacy Policy</Link></li>
                <li><Link href="index.html">Store Locator</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="footer_qlink_widget home2_style">
              <h4>Customer Support</h4>
              <ul className="list-unstyled">
                <li><Link href="index.html">Contact Us</Link></li>
                <li><Link href="index.html">Help Centre</Link></li>
                <li><Link href="index.html">Returns  Exchanges</Link></li>
                <li><Link href="index.html">Best Buy Financing</Link></li>
                <li><Link href="index.html">Best Buy Gift Card</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-lg-2 col-xl-2">
            <div className="footer_qlink_widget home2_style">
              <h4>Services</h4>
              <ul className="list-unstyled">
                <li><Link href="index.html">Geek Squad</Link></li>
                <li><Link href="index.html">In-Home Advisor</Link></li>
                <li><Link href="index.html">Trade-In Program</Link></li>
                <li><Link href="index.html">Electronics Recycling</Link></li>
                <li><Link href="index.html">Best Buy Health</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8 col-md-5 col-lg-3 col-xl-3">
            <div className="footer_social_widget home2_style">
              <h4 className="title">Follow us</h4>
              <div className="social_icon_list home2_style mt30">
                <ul className="mb20">
                  <li className="list-inline-item"><Link href="index.html"><i className="fab fa-facebook"></i></Link></li>
                  <li className="list-inline-item"><Link href="index.html"><i className="fab fa-twitter"></i></Link></li>
                  <li className="list-inline-item"><Link href="index.html"><i className="fab fa-instagram"></i></Link></li>
                  <li className="list-inline-item"><Link href="index.html"><i className="fab fa-linkedin-in"></i></Link></li>
                </ul>
              </div>
            </div>
            <div className="footer_mobile_app_widget mb25 home2_style">
              <h4 className="title mb10">Mobile Apps</h4>
              <div className="mobile_app_list">
                <ul className="mb0">
                  <li><Link href="index.html"><span className="flaticon-apple"></span> iOS App</Link></li>
                  <li><Link href="index.html"><span className="flaticon-android"></span> Android App</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer_acceped_card_widget home2_style">
              <h4 className="title mb20">We accept</h4>
              <div className="acceped_card_list">
                <ul className="d-flex mb-0">
                  <li className="me-2"><Link href="index.html"><img src="../images/resource/visa-card.png" alt="visa-card" /></Link></li>
                  <li className="me-2"><Link href="index.html"><img src="images/resource/master-card.png" alt="master-card" /></Link></li>
                  <li className="me-2"><Link href="index.html"><img src="images/resource/apple-pay.png" alt="apple-pay" /></Link></li>
                  <li className="me-2"><Link href="index.html"><img src="images/resource/discover-card.png" alt="discover-card" /></Link></li>
                  <li className="me-2"><Link href="index.html"><img src="images/resource/paypal.png" alt="paypal" /></Link></li>
                  <li><Link href="index.html"><img src="images/resource/amex-card.png" alt="amex-card" /></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container menu_bdrt1 pt20 pb20">
        <div className="row">
          <div className="col-lg-6">
            <div className="copyright-widget home2_style text-center text-lg-start d-block d-lg-flex mb15-md">
              <p className="me-4">© 2023 305 Aero. All Rights Reserved</p>
              <p><Link href="index.html">Privacy</Link> · <Link href="index.html">Terms</Link> · <Link href="index.html">Sitemap</Link></p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_bottom_right_widgets home2_style text-center text-lg-end">
              <ul className="mb0">
                <li className="list-inline-item mb20-340">
                  <select className="selectpicker show-tick">
                    <option>Currency : USD</option>
                    <option>Euro</option>
                    <option>Pound</option>
                  </select>
                </li>
                <li className="list-inline-item">
                  <select className="selectpicker show-tick">
                    <option>Language: English</option>
                    <option>Frenc</option>
                    <option>Italian</option>
                    <option>Spanish</option>
                    <option>Turkey</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
};

export default Footer