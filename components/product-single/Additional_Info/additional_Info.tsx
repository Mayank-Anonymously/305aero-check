type ProductInfoType = {
  show: boolean;
  information: object;
};

const AdditionalInfo = ({ show, information }: ProductInfoType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  const infoObj = {
    ...information,
    productWeight: "",
  };
  return (
    <section style={style} className="product-single__description">
      {Object.keys(infoObj).map((key: any) => (
        <div key={key} className="product-description-block">
          <p>
            <strong>{key}</strong> :{infoObj[key]}
          </p>
          {/* {information[key].productWeight.map((item: any) => {
            {
              Object.keys(item).map((key: any, items: any) => {
                <p>
                  <strong> {key === "productWeight" ? null : key} </strong>:{" "}
                  {items}
                </p>;
              });
            }
          })} */}
        </div>
      ))}
    </section>
  );
};

export default AdditionalInfo;
