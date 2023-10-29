import React from 'react';
import { Header } from './header-simple/header.jsx';
import { PortfolioIntro } from './portfolio-intro/portfolio-intro.jsx'
import { ProjectSection } from './project-section/project-section.jsx';
import './App.css'


export function App() {
  const name='JAVIVIDEVS';
  const img='perfil.png';
  const subtitle='Soy Javier Expósito';
  const title='Software Developer';
  const msgB='Contacto';
  const linkB='#ContactMe';
  const titleProjectSection='Proyectos';
  const projectCards=[
    [['TFG'],['BlackTheme.png'],['OpenCV and Python application for automotive spotlight image processing'],['python.png','openCV.png','qt.png','arduino.png']],
    [['cARds'],['cARds.png'],['cARds'],['python.png','openCV.png']],
    
   
  ];

  return (
    <>
      <Header name={name} />
      <PortfolioIntro img={img} subtitle={subtitle} title={title} msgButton={msgB} linkButton={linkB}/>
      <ProjectSection title={titleProjectSection} projectCards={projectCards}/>
    </>
    
  )
}