import React from 'react';
import './aboutMeSection.css'


export function AboutMeSection({title,text,img}) {
  return (
    <article className='about-me' id='AboutMe'>
      <h3 className='about-me-h3'>{title}</h3>
      <section className='about-me-content'>
        <p className='about-me-p'>{text}</p>
        <section className='about-me-imgContainer'>
          <img src={`./img/${img}`} className='about-me-img'/>
        </section>
      </section>
     
    </article>
    
  )
}