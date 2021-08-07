import React from "react";
import aboutimage from '../images/about.png';



function About() {
    return (
        <div id="about">
            <div className="about-text">
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti beatae perspiciatis pariatur consequatur aspernatur debitis! Fugiat vero, enim laboriosam accusamus voluptas voluptate laborum possimus quod debitis dolorum id minima dolor!</p>
                <button>Read More</button>
            </div>
            <div className="about-image">
                <img src={aboutimage} alt=''/>
            </div>

        </div>
    )
}

export default About;