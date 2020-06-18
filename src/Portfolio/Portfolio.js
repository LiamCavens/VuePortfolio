import React from "react";
import template from "./Portfolio.jsx";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            image: "",
            liveLink: "",
            githubLink: "",
            description: ""
        }
    }

    componentDidMount() {
    }

    render() {
        return template.call(this);
    }
}

export default Portfolio;
