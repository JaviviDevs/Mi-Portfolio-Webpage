import React from 'react';
import './skillsSection.css'


export function SkillsSection({title,subtitleSkills,subtitlePLanguages,technologies,habilidades}) {
  return (
    <article className='skills' id='Skills'>
      <h3 className='skills-h3'>{title}</h3>
      <h4 className='skills-h4'>{subtitleSkills}</h4>
      <section className='skills-wrapBox'>
        {habilidades.map((habilidad, indx) => (
                <section className='skills-habilidades-borderWhite' key={indx}>
                  <p key={indx} className='skills-habilidades-p'>{habilidad}</p>
                </section>
          ))}  
      </section>

      <h4 className='skills-h4'>{subtitlePLanguages}</h4>
      <section className='skills-wrapBox'>
        {technologies.map((tech, indx) => (
                <section className='skills-tecnologies-imgContainer' key={indx}>
                  <img key={indx}  src={`./img/${tech}`} className='skills-technologies-img'/>
                </section>
          ))}  
      </section>

      <h4 className='skills-h4'>Idiomas</h4>
      <section className='skills-wrapBox'>
        <section className='skills-habilidades-borderWhite'>
          <p className='skills-habilidades-p-orange'>Ingl&eacute;s: </p>
          <p className='skills-habilidades-p'>B1 Cambridge</p>
        </section>
        <section className='skills-habilidades-borderWhite'>
          <p className='skills-habilidades-p-orange'>Espa&ntilde;ol:</p>
          <p className='skills-habilidades-p'> Nativo</p>
        </section>
      </section>
    </article>
    
  )
}