import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import homimg from "../../images/homimg.png";


function Homepage() {
    return (
        <div className="homepage_container">
            <div className="homepage_left">
                <p className="homepage_left_h1"><span className="dark_color">Hi,</span> I am </p>
                <p className="homepage_left_h2">Animesh </p>
                <p className="homepage_left_h_2">Srivastava</p>
                <p className="homepage_left_h3">Learning <span className="dark_color">React.js</span></p>
                <p className="homepage_left_description">I enjoy approaching problems from many angles, making bold judgments, and maintaining a laser-like focus on the broader picture.</p>
                <div>
                    <a href="https://github.com/animesh018" target="_blank">
                        <img src={githubIcon} alt="githubimage" />
                    </a>
                    <a href="https://www.linkedin.com/in/animeshsri/" target="_blank">
                        <img src={linkedinIcon} alt="linkedinimage" />
                    </a>
                </div>
                <a href="mailto:animeshsrivastava9789@gmail.com">
                    <button className="homepage_left_button">Get in Touch</button>
                </a>
            </div>
            <div className="homepage_right">
                <img src={homimg} alt="homeimg"/>
            </div>
        </div>
    )
}

export default Homepage
