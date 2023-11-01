import React from 'react';
import { Header } from './header-simple/header.jsx';
import { PortfolioIntro } from './portfolio-intro/portfolio-intro.jsx'
import { AboutMeSection } from './aboutMe-section/aboutMeSection';
import { ProjectSection } from './project-section/project-section.jsx';
import { EducationSection } from './education-section/educationSection.jsx';
import { SkillsSection } from './skills-section/skillsSection';
import './App.css'


export function App() {
  const name='JAVIVIDEVS';
  const img='perfil.png';
  const subtitle='Soy Javier Expósito';
  const title='Software Developer';
  const msgB='Contacto';
  const linkB='#ContactMe';
  const titleAboutMe='Sobre Mi';
  const textAboutMe='Recientemente he finalizado la carrera de ingeniería informática y en este momento, me encuentro dedicando mi tiempo a aprender las tecnologías más recientes utilizadas en el desarrollo de aplicaciones y sitios web, centrándome en el ámbito del front-end.';
  const imgAboutMe='perfil.png'
  const titleProjectSection='Proyectos';

  const titleEducationSection='Formación';
  const subtitleEducationSection='Especializado en el desarrollo de páginas web y aplicaciones'
  const FormationCards=[
    ['UGR','Ingeniero informático 09/2018-07/2023'],
    ['GranaSat','TFG, software developer 10/2022-07/2023']
  ];

  const projectCards=[
    [['TFG'],['BlackTheme.png'],['OpenCV and Python application for automotive spotlight image processing'],['python.png','openCV.png','qt.png','arduino.png']],
    [['cARds'],['cARds.png'],['cARds'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds2'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds3'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds4'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds5'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds6'],['python.png','openCV.png']],
    [['cARds'],['cARds.png'],['cARds7'],['python.png','openCV.png']]
    
   
  ];

  const technologies=['python.png','c++.png','java.png','openCV.png','Qt.png','html.png','css.png','javaScript.png','php.png','sql.png','react.png','git.png','github.png'];
  const habilidades=['OOP','AR','Desarrollador de aplicaciones','Desarrollador front-end'];
  const titleSkills='Skills';
  const subtitleSkills='Habilidades';
  const subtitlePLanguages='Lenguajes de programación, librerias y otras tecnologías';

  return (
    <>
      <section className='margin-flexbox'>
        <Header name={name} />
        <PortfolioIntro img={img} subtitle={subtitle} title={title} msgButton={msgB} linkButton={linkB}/>
        <AboutMeSection title={titleAboutMe} text={textAboutMe} img={imgAboutMe}/>
      </section>
      <section className='flexbox-blue'>
        <section className='margin-flexbox'>
          <ProjectSection title={titleProjectSection} projectCards={projectCards}/>
        </section>
      </section>
      <section className='margin-flexbox'>
        <EducationSection title={titleEducationSection} subtitle={subtitleEducationSection} FormationCards={FormationCards}/>
        <SkillsSection technologies={technologies} habilidades={habilidades} title={titleSkills} subtitleSkills={subtitleSkills} subtitlePLanguages={subtitlePLanguages}/>
      </section>
    </>
  )
}