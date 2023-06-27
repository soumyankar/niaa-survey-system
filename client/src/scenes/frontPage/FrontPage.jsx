// React libraries
import React from "react";
import { Box, Typography, Button } from '@mui/material';

//  Necessary colors, scss, palettes
import "./FrontPage.scss";
import { useTheme } from "@mui/material";

// ASSETS
import img_face from "../../assets/frontPage/img_face.png"
import img_diamonds from "../../assets/frontPage/img_diamonds.png"
// Components I make use of in this scene

// Front page data
import frontpageData from "../../assets/frontPage/data.json"
// CTA Button
import { Cta } from "../../components/cta/Cta";

export const FrontPage = () => 
{
  const theme = useTheme(); // this grabs the theme provided from the material mmui.
  return (
    <div className="greet-main" id="greeting">
    <div className="greeting-main">
    <div className="greeting-text-div">
    <div>
    <h1 className="greeting-text">
    Face
    <span className="span">
    ing
    <br />
    </span>
    Binarism
    </h1>
    <p className="greeting-text-p subTitle">
    {frontpageData.subTitle}
    </p>
    <div className="button-greeting-div">
    <Cta
    property1="default"
    />;
    </div>
    </div>
    </div>
    <div className="greeting-image-div">
    <img className="img-face" alt="hero face" src={img_face}/>
    <img className="img-diamonds" alt="Img diamonds" src={img_diamonds} />
    <div className="yellow-rectangle" />
    
    </div>
    </div>
    {/* <ExtraInfo/> */}
    </div>
    );
  }; 
  