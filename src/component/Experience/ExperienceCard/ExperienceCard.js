import React from 'react'
import "./ExperienceCard.css"

function ExperienceCard({ companyName, designation, statements }) {
  return (
    <div className='ex_card_container'>
        <p className='ex_card_title'>{companyName}</p>
        <p className='ex_card_subtitle'><span>Designation:</span> {designation}</p>
        {statements.map((value, key) => (
            <p className='ex_card_sentence'>{value}</p>
        ))}
        
    </div>
  )
}

export default ExperienceCard