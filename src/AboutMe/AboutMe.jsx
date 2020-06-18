import "./AboutMe.css";
import React from "react";
import liamImage from "../images/LiamCavens.jpg";

function template() {
    return (
        <div className="about-me about-me-container">
            <img className="liam-image" src={liamImage} alt="" />
            <span className="statement">
                I am a self-motivated and driven software developer, seeking a
                fulfilling career change into a full stack software development
                role following my graduation from CodeClan in July 2018. The
                course has predominantly given me exposure to JavaScript, Java
                and Ruby and sparked a keen passion for every day learning and
                challenges. Software development has focused my passion for problem
                solving and overcoming user/customer problems as well as writing clean,
                robust and maintainable code.
            </span>
        </div>
    );
}

export default template;
