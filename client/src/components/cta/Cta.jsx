import PropTypes from "prop-types";
import React from "react";
import "./style.css";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export const Cta = ({ property1, style }) => {
  return (
    <div className={`CTA ${property1}`} style={style}>
    <div className="frame">
    <div className="let-s-find-out">Let's find out <DoubleArrowIcon/></div>
    </div>
    </div>
    );
  };
  
  Cta.propTypes = {
    property1: PropTypes.oneOf(["in-page-botton", "home-page-botton", "default"]),
  };
  