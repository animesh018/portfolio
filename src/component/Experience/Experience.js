import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard/ExperienceCard";


function Experience() {
  const statements = [
    "• Responsible for coordinating with clients and the company to ensure a smooth flow of work across the organisation.",

    "• Overlooked On-time completion of projects and Dealing with Clients National as well International.",

    "• Developed plan for brand growth and business development in collaboration with stakeholders.",
      ];

  const stat = [
    "• Responsible for collaborating with students and instructors to ensure that the company's cyber security training executes efficiently.",
    
    "• Interacting with schools, colleges, and organizations in order to organize cyber security workshop.",
    
    "• Collaborated with the Lucknow Police Cyber Cell to raise awareness about cyber security.",

  ];

  const statt = [

    "• Responsible for overlooking all the Event Requirements and cordinating with all the other departments.",
    "• Managing team of 8+ memeber and distributing the task among the team so that everyone get the task for which they were much capable.",
    "• Planning and managing all the pre & post activities of the Event. ",


  ]


  return (
    <div className="experience_container">
      <p className="experience_title">Experience</p>
      <div className="experience_cards_container">
        <ExperienceCard
          companyName="LYB Technology"
          designation="Co-Founder"
          statements={statements}
         

        />
        <ExperienceCard
          companyName="Lazyhackers LLP"
          designation="Co-Founder"
          statements={stat}

        />
        <ExperienceCard
          companyName="SPADE LPU"
          designation="Head of Inventory Management"
          statements={statt}

        />
      </div>
    </div>
  );
}

export default Experience;
