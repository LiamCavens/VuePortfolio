import "./NavBar.css";
import React from "react";

function navbarJsx() {
    return (
        <nav id="nav-bar">
            <ul>
                <li className="home-button">Home</li>
                {/* <button class="blue-button" onclick="swapStyleSheet('style.css')"></button>
                <button class="green-button" onclick="swapStyleSheet('green.css')"></button>
                <button class="yellow-button" onclick="swapStyleSheet('yellow.css')"></button>
                <button class="red-button" onclick="swapStyleSheet('red.css')"></button>
                <button class="party-button" onclick="swapStyleSheet('party.css')"></button> */}
                <li>Contact</li>
                <li>Portfolio</li>
                <li>Liam</li>
            </ul>
        </nav>
    );
};

export default navbarJsx;
