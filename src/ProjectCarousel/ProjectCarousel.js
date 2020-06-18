import "./ProjectCarousel.css";
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class ProjectCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.state, this.props);
    }

    render() {
        return (
            <div className="carousel">
                <Carousel className="carousel-item">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}

export default ProjectCarousel;
