import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import './app.css';
import { darkTheme,lightTheme } from "./assets/Theme";
import { ThemeProvider } from "styled-components";
import Intro from "./components/intro/Intro";
import Menu from "./components/Menu/Menu";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = ()=>{

    const [mobile, setMobile] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [activeNav, setActiveNav] = useState(false);

    useEffect(()=>{
        if (window.matchMedia("(max-width: 600px)").matches) {
            // The viewport is less than 425px pixels wide
            setMobile((prevState) => !prevState);
          }
    },[])
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <div className="app" id="app2">
                <Navbar activeNav={activeNav} setActiveNav={setActiveNav} mobile={mobile} setMobile={setMobile} darkMode={darkMode} setDarkMode={setDarkMode} />
                <Menu darkMode={darkMode} setDarkMode={setDarkMode} activeNav={activeNav}/>
                <Intro mobile={mobile}/>
                <Projects/>
                <About darkMode={darkMode}/>
                <Contact/>
                <Footer/>
            </div>

        </ThemeProvider>
    )
}

export default App;