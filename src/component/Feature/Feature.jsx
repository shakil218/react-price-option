import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
  return (
    <div>
      <p className="flex items-center gap-2"><IoIosCheckmarkCircle className="text-green-500"></IoIosCheckmarkCircle>{feature}</p>
    </div>
  );
};
Feature.propTypes = {
  feature: PropTypes.string,
};
export default Feature;