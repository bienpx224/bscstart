/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import logo1 from "../../assets/images/logo.png"

function SimmmpleLogo({ size }) {
  return (
    <div width="24px" height="24px" viewBox="0 0 22 22" fill="none">
      <img alt="bscstart" src={logo1} />
    </div>
  );
}
// Setting default values for the props of SimmmpleLogo
SimmmpleLogo.defaultProps = {
  color: "dark",
  size: "16px",
};

// Typechecking props for the SimmmpleLogo
SimmmpleLogo.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
    "white",
  ]),
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default SimmmpleLogo;
