import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ priceOption }) => {
  const { name, price, features } = priceOption;
  return (
    <div className="bg-teal-100 p-5 rounded-lg flex flex-col">
      <h2 className="text-center">
        <span className="text-7xl font-bold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl font-semibold text-center my-6">{name}</h4>
      <div className="ml-6 flex-grow">
        {features.map((feature, index) => (
          <Feature key={index} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-emerald-300 hover:bg-emerald-500 w-full p-3 mt-12 font-bold rounded-lg">Bye Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  priceOption: PropTypes.object,
};
export default PriceOption;
