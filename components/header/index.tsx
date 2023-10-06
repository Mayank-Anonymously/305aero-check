import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import useOnClickOutside from 'use-onclickoutside';
import Logo from '../../assets/icons/logo';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RootState } from 'store';


type HeaderType = {
  isErrorPage?: Boolean;
}

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const { cartItems } = useSelector((state: RootState)  => state.cart);
  const arrayPaths = ['/'];  

  const [onTop, setOnTop] = useState(( !arrayPaths.includes(router.pathname) || isErrorPage ) ? false : true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if(window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  }

  useEffect(() => {
    if(!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    window.onscroll = function() {
      headerClass();
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  }

  const closeSearch = () => {
    setSearchOpen(false);
  }

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);


  const totalPrice = cartItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price;
  }, 0);
  

  return(
    <>
    <div className=" {`site-header header_middle home2_style pt20 pb20 dn-992  ${!onTop ? 'site-header--fixed header_middle home2_style pt20 pb20 dn-992 ' : ''}`}">
    <div className="container-fluid maxw1800">
      <div className="row">
        <div className="col-lg-2 col-xl-2 col-xxl-1">
          <div className="header_top_logo_home1">
            {/* <div className="logo">305 Aero<span className="text-thm">.</span></div> */}
            <Link href="/">
           <h1 className="site-logo"><Logo /></h1>
         </Link>
          </div>
        </div>
        <div className="col-lg-5 col-xl-5 col-xxl-6">
          <div className="header_middle_advnc_search home2_style">
            <div className="search_form_wrapper">
              <div className="row">
                <div className="col-auto pe-0">
                  <div className="top-search home2_style">
                    <form action="#" method="get" className="form-search" accept-charset="utf-8">
                      <div className="box-search pre_line">
                        <input className="form_control" type="text" name="search" placeholder="Search products…" />
                      </div>
                      
                    </form>
                    
                  </div>
                  
                </div>
                <div className="col-auto bgc-white">
                  <div className="actegory home2_style">
                    <select className="selectpicker" id="selectbox_alCategory">
                      <option value="AllCategory">All Category</option>
                      <option value="Today’sHotDeals">Today’s Hot Deals</option>
                      <option value="Babies&Moms">Babies & Moms</option>
                      <option value="Clothing&Accessories">Clothing & Accessories</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Grocery&Market">Grocery & Market</option>
                      <option value="Health&Beauty">Health & Beauty</option>
                      <option value="Home&Kitchen">Home & Kitchen</option>
                      <option value="Home&Furniture">Home & Furniture</option>
                      <option value="Health&Beauty">Health & Beauty</option>
                      <option value="Sport&Outdoor">Sport & Outdoor</option>
                      <option value="Toy&VideoGames">Toy & Video Games</option>
                    </select>
                  </div>
                </div>
                <div className="col-auto p0">
                  <div className="advscrh_frm_btn">
                    <button type="submit" className="btn search-btn"><span className="flaticon-search"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-xl-5 col-xxl-4 offset-xxl-1">
          <div className="hm_log_fav_cart_widget text-center text-lg-end">
            <div className="wrapper ovh">
              {/* <div className="preloader"></div> */}
              <ul className="mb0">
                <li className="list-inline-item">
                <Link className="header_top_iconbox home2_style text-start" href="page-account-wishlist.html">
                  <div className="d-block d-md-flex">
                    <div className="icon"><span className="flaticon-heart"></span></div>
                    <div className="details">
                      <p className="subtitle">Wishlist</p>
                      <h5 className="title">My Items</h5>
                    </div>
                  </div>
                  </Link>
                   </li>
                <li className="list-inline-item">
                  <Link className="header_top_iconbox home2_style text-start signin-filter-btn" href="/login">
                  <div className="d-block d-md-flex">
                    <div className="icon"><span className="flaticon-profile"></span></div>
                    <div className="details">
                      <p className="subtitle">Sign In</p>
                      <h5 className="title">Account</h5>
                    </div>
                  </div>
                  </Link> 
                  </li>
                <li className="list-inline-item">
                    <Link className="header_top_iconbox home2_style text-start cart-filter-btn" href="/cart">
                   
            
          
                  
                  
                  <div className="d-block d-md-flex">
                    <div className="icon"><span><img src="images/icons/flaticon-shopping-cart-white.svg" alt="" /></span><span className="badge"> {cartItems.length > 0 && 
                 <span className="btn-cart__count">{cartItems.length > 0 && 
                  <span className="btn-cart__count">{cartItems.length}
                  
                      {console.log("new", cartItems)}
                  </span>
                }</span>
               }</span></div>
                    <div className="details">
                      <p className="subtitle">

                      <span className="btn-cart__count">
                  
                     {totalPrice.toFixed(2)}
                  </span> 


                      </p>
                      <h5 className="title">Total</h5>
                    </div>
                  </div>
                  </Link> </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<header className="header-nav menu_style_home_one home2_style main-menu"> 
    
    <nav className="posr">
      <div className="container-fluid posr maxw1800"> 
        {/* <!-- Menu Toggle btn--> */}
        <div className="menu-toggle">
          <button type="button" id="menu-btn"> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span> </button>
        </div>
        <div className="posr logo1">
          <div id="mega-menu"> <Link className="menu-filter-btn btn-mega home2_style" href="index.html"> <img className="me-2" src="images/desktop-nav-menu-white.svg" alt="Desktop Menu Icon" /> <span className="fw500 fz16 color-white vam">Browse Categories</span> </Link>
            <ul className="menu">
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-diamond"></span> <span className="menu-title">Today’s Hot Deals</span> </Link>
                <div className="drop-menu">
                  Co``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````ming Soon
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-cooking"></span> <span className="menu-title">Home & Kitchen</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-armchair"></span> <span className="menu-title">Home & Furniture</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-smartphone-1"></span> <span className="menu-title">Electronics</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-bride-dress"></span> <span className="menu-title">Clothing & Accessories</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-heart-beat"></span> <span className="menu-title">Health & Beauty</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-volleyball"></span> <span className="menu-title">Sport & Outdoor</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-groceries"></span> <span className="menu-title">Grocery & Market</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-remote-control"></span> <span className="menu-title">Toy & Video Games</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li> <Link className="dropdown" href="index.html"> <span className="menu-icn flaticon-feeding-bottle"></span> <span className="menu-title">Babies & Moms</span> </Link>
                <div className="drop-menu">
                  <div className="one-third">
                    <div className="cat-title">Electronics</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All</Link></li>
                    </ul>
                    <div className="cat-title">TV & Video</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop all TVs</Link></li>
                      <li><Link href="index.html">TVs by Size</Link></li>
                      <li><Link href="index.html">Smart TVs</Link></li>
                      <li><Link href="index.html">Roku TVs</Link></li>
                      <li><Link href="index.html">Streaming</Link></li>
                      <li><Link href="index.html">TV Mounts & Accessories</Link></li>
                      <li><Link href="index.html">DVD & Blu-Ray Players</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Computers</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Computers</Link></li>
                      <li><Link href="index.html">Laptops</Link></li>
                      <li><Link href="index.html">Chromebook</Link></li>
                      <li><Link href="index.html">PC Gaming</Link></li>
                      <li><Link href="index.html">Desktops</Link></li>
                      <li><Link href="index.html">Monitors</Link></li>
                      <li><Link href="index.html">Networking</Link></li>
                      <li><Link href="index.html">Computer Accessories</Link></li>
                      <li><Link href="index.html">Computer Components</Link></li>
                      <li><Link href="index.html">Tax Software</Link></li>
                      <li><Link href="index.html">Computer Software</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Cell Phones</div>
                    <ul className="mb0">
                      <li><Link href="index.html">Shop All Cell Phones</Link></li>
                      <li><Link href="index.html">Wireless Deals</Link></li>
                      <li><Link href="index.html">5G Phones</Link></li>
                      <li><Link href="index.html">iPhone</Link></li>
                      <li><Link href="index.html">Galaxy Phones</Link></li>
                      <li><Link href="index.html">Phone Chargers & Power Banks</Link></li>
                      <li><Link href="index.html">Grips & Phone Stands</Link></li>
                      <li><Link href="index.html">Phone Cables</Link></li>
                      <li><Link href="index.html">Car Mounts</Link></li>
                      <li><Link href="index.html">iPhone Accessories</Link></li>
                      <li><Link href="index.html">Cell Phone Accessory Deals</Link></li>
                    </ul>
                  </div>
                  <div className="one-third">
                    <div className="cat-title">Smart Home</div>
                    <ul className="mb20">
                      <li><Link href="index.html">Shop All Smart Home</Link></li>
                      <li><Link href="index.html">Smart Assistants & Hubs</Link></li>
                      <li><Link href="index.html">Smart Security</Link></li>
                      <li><Link href="index.html">Smart Energy & Lighting</Link></li>
                    </ul>
                    <div className="cat-title">Photo Services</div>
                    <ul className="mb0">
                      <li><Link href="index.html">All Photo Services</Link></li>
                      <li><Link href="index.html">Same Day Services</Link></li>
                      <li><Link href="index.html">Photo Cards</Link></li>
                      <li><Link href="index.html">Photo Gifts</Link></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <ul id="respMenu" className="ace-responsive-menu menu_list_custom_code wa pl200" data-menu-style="horizontal">
          <li className="visible_list"> <Link href="index.html"><span className="title">Home</span></Link> 
            
          
          </li>
          <li className="megamenu_style"> <Link href="/products"><span className="title">Products</span></Link>
            
          </li>
          <li className="visible_list"> <Link href="index.html"><span className="title">Pages</span></Link>
            
          </li>
          <li className="visible_list"> <Link href="index.html"><span className="title">Blog</span></Link>
            
          </li>
        </ul>
        <ul id="respMenu2" className="ace-responsive-menu widget_menu_home2 wa" data-menu-style="horizontal">
          <li className="list-inline-item list_c"><Link href="index.html">Deal of the Day</Link></li>
          <li className="list-inline-item list_c"><Link href="index.html">Hot Deals</Link></li>
          <li className="list-inline-item list_c"><Link href="index.html">Best Sellers</Link></li>
          <li className="list-inline-item list_c"><Link href="index.html">New Arrivals</Link></li>
        </ul>
      </div>
    </nav>
  </header>
  

  
     </>
  )
};


export default Header;
