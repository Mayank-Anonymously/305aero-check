type ProductSpecificationType = {
  show: boolean;
  specification: string;
};

const Specification = ({ show, specification }: ProductSpecificationType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      {Object.keys(specification).map((key) => (
        <div key={key} className="product-description-block">
          <p>
            <strong> {key} </strong>: {specification[key]}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Specification;
