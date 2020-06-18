import "./Header.css";
import React from "react";

function headerJsx() {
    return (
        <div id="top" className="header-container">
            <header>
                <h1 className="header-title">Liam Cavens</h1>
                <span className="soft-and-dev">Software Developer</span>
            </header>
        </div>
    );
}

export default headerJsx;
