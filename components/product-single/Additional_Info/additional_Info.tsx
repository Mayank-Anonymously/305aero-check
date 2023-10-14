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
  };
  console.log(infoObj);
  return (
    <section style={style} className="product-single__description">
      {Object.keys(information).map((key: any) => (
        <div key={key} className="product-description-block">
          {Object.keys(key.productWeight).map(key)}
          <p>
            <strong> {key === "productWeight" ? null : key} </strong>:{" "}
            {information[key] === "productWeight" ? null : information[key]}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AdditionalInfo;
