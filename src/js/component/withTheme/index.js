import React from "react";
import PropTypes from "prop-types";
import theme from "../../theme/theme";

// Provide the theme object as a property to the input component.
const withTheme = () => Component => {
  class WithTheme extends React.Component {
    render() {
      const { ...other } = this.props;
      return <Component theme={theme} {...other} />;
    }
  }
  return WithTheme;
};

export default withTheme;
