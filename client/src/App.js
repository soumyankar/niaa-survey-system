// **********
// REACT LIBRARIES
// **********
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState, useEffect } from "react";

// **********
// GLOBAL COMPONENTS
// **********
import { TopBar } from "./components/topBar/TopBar";
import { FrontPage } from "./scenes/frontPage/FrontPage";
// **********
// SCENES
// **********

// **********
// ASSETS
// **********
import './App.css';

function App()
{
  // The theme that I will be using for this project
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}> 
    <CssBaseline/>
    <Router>
    <div className="app">
    <main className="content">
    {/* TOPBAR Implement */}
    <TopBar  />
    {/* TOPBAR Implement */}
    <Routes>
    <Route path="/" element={<FrontPage/>}/>
    </Routes>
    </main>
    </div>
    </Router>
    </ThemeProvider>
    </ColorModeContext.Provider>
    );
  }
  export default App;
  