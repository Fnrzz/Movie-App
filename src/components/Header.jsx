import PropTypes from "prop-types";
const Header = ({ title }) => {
  return <h3 className="fw-bold">{title}</h3>;
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
