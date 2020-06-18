import "./Portfolio.css";
import React from "react";

function template() {
    return (
        <div className="portfolio" class="portfolio">
            <h1 class="title">Portfolio</h1>
            <p class="portfolio-statement">
                Below are some projects I have completed,
                currently, the Flickr app and iTunes app have live examples, the others will only link you to the github repo,
                you can visit my full github <a class="github-link" href="https://github.com/LiamCavens">here.</a>
            </p>
        </div>
    );
};

export default template;
