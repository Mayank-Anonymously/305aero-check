import ProductItem from "./../../product-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { ItemList } from "../../../utils/ItemTypes/searchProducts";

let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (process.browser) {
  if (window.innerWidth > 768) {
    slidesPerView = 3;
    spaceBetween = 35;
    centeredSlides = false;
  }
  if (window.innerWidth > 1024) {
    slidesPerView = 4;
    spaceBetween = 65;
    centeredSlides = false;
  }
}

const ProductsCarousel = (props: { products: ItemList[] }) => {
  const { products } = props;
  if (!products) return <div>Loading</div>;

  return (
    <div className="products-carousel">
      <Swiper
        spaceBetween={spaceBetween}
        loop={true}
        centeredSlides={centeredSlides}
        watchOverflow={true}
        slidesPerView={slidesPerView}
        className="swiper-wrapper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <ProductItem
              id={item.ingramPartNumber}
              name={item.description}
              // price={item.price}
              // color={item.color}
              // discount={item.discount}
              // currentPrice={item.currentPrice}
              key={index}

              // images={item.images}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductsCarousel;
