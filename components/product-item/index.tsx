import Link from "next/link";
import { some } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../store";
import { ItemList } from "../../types";
import { toggleFavProduct } from "../../store/reducers/user";

const ProductItem = ({
  discount,
  images,
  id,
  name,
  price,
  currentPrice,
}: any) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { favProducts } = useSelector((state: RootState) => state.user);

  const isFavourite = some(favProducts, (productId) => productId === id);

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id,
      })
    );
  };
  const navigateToDetails = (id: string) => {
    router.push(`/product/${id}`);
  };
 
  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          onClick={toggleFav}
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <a onClick={() => navigateToDetails(id)}>
          {/* <Link href="javascript:"> */}
          <img src={images ? images[0] : ""} alt="product" />
          {discount && <span className="product__discount">{discount}%</span>}
          {/* </Link> */}
        </a>
      </div>

      <div className="product__description">
        <h3>{name}</h3>
        <div
          className={
            "product__price " + (discount ? "product__price--discount" : "")
          }
        >
          <h4>${currentPrice}</h4>

          {discount && <span>${price}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
