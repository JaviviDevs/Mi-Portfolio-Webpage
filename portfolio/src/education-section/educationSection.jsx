import React from 'react';
import { LeftCircleCard } from '../left-circle-card/leftCircleCard';
import './educationSection.css'


export function EducationSection({title,subtitle,FormationCards}) {
  
  return (
    <article className='education' id='Education'>
        <span className='orangeborder-education'></span>
        <h3 className='education-h3'>{title}</h3>
        <section className='education-content'>
          <h4 className='education-h4'>{subtitle}</h4>
          <section className='education-colum-flexbox'>
            {FormationCards.map((card, indx) => (
                    <LeftCircleCard key={indx} company={card[0]} work={card[1]}/>
            ))}
          </section>
        </section>
        
    </article>
    
  )
}