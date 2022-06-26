import React from "react";
import "./TechStack.css";
import cpp from "../../images/techStack/cpp.png";
import firebase from "../../images/techStack/firebase.png";
import github from "../../images/techStack/github.png";
import html from "../../images/techStack/html.png";
import js from "../../images/techStack/js.png";
import react from "../../images/techStack/react.png";

function TechStack() {
  const techstackData = [
    {
      iconName: "React",
      iconImage: react,
      iconAltPropery: "reactImage",
    },
    {
      iconName: "Javascript",
      iconImage: js,
      iconAltPropery: "jsImage",
    },
    {
      iconName: "HTML",
      iconImage: html,
      iconAltPropery: "htmlImage",
    },
  ];

  const techstackData2 = [
    {
      iconName: "Github",
      iconImage: github,
      iconAltPropery: "githubImage",
    },
    {
      iconName: "CPP",
      iconImage: cpp,
      iconAltPropery: "cppImage",
    },
    {
      iconName: "Firebase",
      iconImage: firebase,
      iconAltPropery: "firebaseImage",
    },
  ];

  return (
    <div className="techstack_container">
      <p className="techstack_title">Tech Stack</p>

      <div className="techstack_icon_container">

        {techstackData.map((value, key) => (
          <div className="techstack_icons">
            <img src={value.iconImage} alt={value.iconAltPropery} />
            <p>{value.iconName}</p>
          </div>
        ))}

      </div>
      <div className="techstack_icon_container">

        {techstackData2.map((value, key) => (
          <div className="techstack_icons">
            <img src={value.iconImage} alt={value.iconAltPropery} />
            <p>{value.iconName}</p>
          </div>
        ))}




      </div>
    </div>
  );
}

export default TechStack;
