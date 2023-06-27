// MUI Components
import {Box, IconButton, Button, useTheme, Avatar} from "@mui/material";

// React and personal settings
import { useContext } from "react";
// import { ColorModeContext, tokens } from "../../theme";

import { TopBarMenuItem } from "../topBarMenuItem/TopBarMenuItem";

import logo_large from "../../assets/global/logo_large.png"
import "./style.scss"

// import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
// so i google'd 'mui material icons' and found an icon and we can import it from there. this was pretty simple
// so i suppose what we've done above is import the lightmodeoutline icon from the material mmui

export const TopBar = () => {
    // const theme = useTheme(); // this grabs the theme provided from the material mmui.
    // const colors = tokens(theme.palette.mode); // this is taking the tokens object from our theme.js file and placing it into the paletter of the mui theme
    // const colorMode = useContext(ColorModeContext); // this is also being taken from thhe theme.js file 
    
    return (
        <Box display="flex" className="header" justifyContent="space-between" p={2}>
        
        {/* SEARCH BOX */}
        <Box 
        display="flex" 
        // backgroundColor={colors.primary[400]} 
        borderRadius="3px"
        >
        {/* Redirect to Index */}
        <Button variant="text" href="/" color="primary">
        <Avatar src={logo_large}/>
        </Button>
        </Box>
        {/* end of left side search box */}
        
        {/* Start of right side icons */}
        <Box className="menu" display="flex">  
        
        {/* Start of links to other pages  */}

        <TopBarMenuItem href="/" text="HelloWorld"></TopBarMenuItem>
        
        <TopBarMenuItem href="1414" text="Unselected"></TopBarMenuItem>
        </Box>
        
        </Box>);
    }
    