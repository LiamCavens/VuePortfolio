import React from "react";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio"

function App() {
    return (
        <div className="App">
            <Header />
            <NavBar />
            <AboutMe />
            <Portfolio />
        </div>
    );
}

export default App;
