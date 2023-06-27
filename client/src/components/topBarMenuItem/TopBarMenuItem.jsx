import PropTypes from "prop-types";
import React from "react";
import { useLocation } from 'react-router-dom';
import { Button } from "@mui/material";
import "./style.css";

export const TopBarMenuItem = ({ href, text }) => {
    const location = useLocation();
    const isActive = location.pathname === href;
    return (
        <Button className={`menu-item ${isActive ? 'selected' : 'unselected'}`}>
            { text }
        </Button>
    );
};

TopBarMenuItem.propTypes = {
    property1: PropTypes.oneOf([
        "mouse-over-05",
        "mouse-hover-03",
        "unselected-02",
        "selected-01",
        "mouse-over-04",
        "unselected-01",
    ]),
};
