import React from 'react';
import { Header } from './components/header-simple/header.jsx';
import { PortfolioIntro } from './pages/portfolio-intro/portfolio-intro.jsx'
import './App.css'


export function App() {
  const name='JV';

  const img='perfil.png';
  const subtitle='Soy Javier Expósito';
  const title='Software Developer';
  
  const contactButton = [
    { url: '/Contact', text: 'CONTACTO'},
  ]

  const banners = [
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/' ,text: 'NUEVA HEMBRA'},
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/' ,text: 'NUEVO CACHORRO'},
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/' ,text: 'NUEVA CAMADA DISPONIBLE'},
  ];

  /*const titleAboutMe='Sobre Mi';
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
    [['TFG'],['Valeo.png'],['Application for automotive spotlight image processing'],['python.png','openCV.png','Qt.png','arduino.png']],
    [['cARds'],['cARds.png'],['cARds Game'],['python.png','openCV.png']],
    [['./'],['comingsoon.png'],['Proximamente'],['question.png']],
    [['./'],['comingsoon.png'],['Proximamente'],['question.png']],
    [['./'],['comingsoon.png'],['Proximamente'],['question.png']],
    [['./'],['comingsoon.png'],['Proximamente'],['question.png']]
  ];

  const technologies=['python.png','c++.png','java.png','openCV.png','Qt.png','html.png','css.png','javaScript.png','php.png','sql.png','react.png','git.png','github.png'];
  const habilidades=['OOP','AR','Desarrollador de aplicaciones','Desarrollador front-end'];
  const titleSkills='Skills';
  const subtitleSkills='Habilidades';
  const subtitlePLanguages='Lenguajes de programación, librerias y otras tecnologías';

  const footerLinks=[
    ['mailto:javierexmar@gmail.com?subject=consulta','email.png','javierexmar@gmail.com'],
    ['https://github.com/JaviviDevs','github.png','JaviviDevs'],
    ['https://www.linkedin.com/in/javier-exp%C3%B3sito-mart%C3%ADnez/','linkedin.png','']
  ];*/

  return (
    <>
      <Header name={name} />
      <PortfolioIntro img={img} subtitle={subtitle} title={title} buttonContact={contactButton} banners={banners}/>
    </>
  )
}

/** <section className='margin-flexbox'>
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
      <section className='flexbox-blue'>
        <section className='margin-flexbox'>
          <FooterSection links={footerLinks}/>
        </section>
      </section>*/