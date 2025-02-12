import PropTypes from "prop-types";

const Link = ({ route }) => {
  return (
    
    <li className=" mr-6 hover:bg-emerald-300 p-1 px-5">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};
Link.propTypes = {
  route: PropTypes.object,
};
export default Link;
