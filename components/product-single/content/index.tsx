import { useState } from "react";
import productsColors from "./../../../utils/data/products-colors";
import productsSizes from "./../../../utils/data/products-sizes";
import CheckboxColor from "./../../products-filter/form-builder/checkbox-color";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import { addProduct } from "../../../store/reducers/cart";
import { RootState } from "../../../store";
import {
  ItemList,
  ProductDetailType,
  ProductStoreType,
  ProductType,
} from "../../../types";
import { toggleFavProduct } from "../../../store/reducers/user";

type ProductContent = {
  product: ProductDetailType;
};

const Content = ({ product, price, priceData }: any) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product.ingramPartNumber
  );

  const toggleFav = () => {
    dispatch(
      toggleFavProduct({
        id: product.ingramPartNumber,
      })
    );
  };

  const addToCart = () => {
    const productToSave: ProductStoreType = {
      id: product.ingramPartNumber,
      name: product.description,
      thumb: "",
      price: 0,
      count: count,
      color: color,
      size: itemSize,
    };

    const productStore = {
      count,
      product: productToSave,
    };

    dispatch(addProduct(productStore));
  };

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Product ID:<br></br>
          {product.ingramPartNumber}
        </h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.description}</h2>

        <div className="product__prices">
          <h4>${price.customerPrice}</h4>
          {price.retailPrice && <span>${price.retailPrice}</span>}
        </div>
      </div>

      <div className="product-content__filters">
        <div className="checkbox-color-wrapper">
          <div className="select-wrapper">
            {priceData == undefined ? null : (
              <select onChange={onSelectChange}>
                {priceData.map((item: any, index: string) => {
                  return (
                    <>
                      <option>Select Location</option>
                      {item.availability.availabilityByWarehouse.map((type) => (
                        <>
                          <option>
                            {type.location} qty :{type.quantityAvailable}
                          </option>
                        </>
                      ))}
                    </>
                  );
                })}
              </select>
            )}
          </div>
        </div>

        {/* <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map((type) => (
              <CheckboxColor
                key={type.id}
                type={"radio"}
                name="product-color"
                color={type.color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>
            Size: <strong>See size table</strong>
          </h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map((type) => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
              </div>
              </div>
            </div> */}
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
