import "./Portfolio.css";
import React from "react";
import ProjectCarousel from "../ProjectCarousel";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    title: "Flickr App",
                    image: "/FlickrScreen.jpg",
                    liveLink: "https://liamcavens-flickr-app.netlify.app/",
                    githubLink: "https://github.com/LiamCavens/Flickr-app",
                    description: "Small app which uses Flickr API & infinite scroll"
                },
                {
                    title: "iTunes App",
                    image: "/iTunesScreen.jpg",
                    liveLink: "https://liamcavens-flickr-app.netlify.app/",
                    githubLink: "https://github.com/LiamCavens/Flickr-app",
                    description: "App which uses Itunes API & allows listening to sample"
                }
            ]

        }
    }

    render() {
        return (
            <div className="portfolio">
                <h1 className="title">Portfolio</h1>
                <p className="portfolio-statement">
                    Below are some projects I have completed,
                    currently, the Flickr app and iTunes app have live examples, the others will only link you to the github repo,
                you can visit my full github <a className="github-link" href="https://github.com/LiamCavens">here.</a>
                </p>
                <ProjectCarousel projects={this.state.projects} />
            </div>
        );
    }
}

export default Portfolio;
