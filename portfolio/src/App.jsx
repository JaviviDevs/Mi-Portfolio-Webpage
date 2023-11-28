import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Header } from './components/header-simple/header.jsx';
import { PortfolioIntro } from './pages/portfolio-intro/portfolio-intro.jsx'
import { ProjectSection } from './pages/project-section/project-section.jsx';
import './App.css'

export function App() {
  const [isScrolling, setScrolling] = useState(false);
  useEffect(() => {
    // Agregar un listener de evento para el scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
        // Eliminar el listener de evento al desmontar el componente
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
      if (window.scrollY > 0) { // Cambia 50 a la cantidad de desplazamiento que desees
          setScrolling(true);
      } else {
          setScrolling(false);
      }
  };


  let CabeceraClass = 'header';
  if(isScrolling){
    CabeceraClass='hidden-header';
  }else{
    CabeceraClass='header';
  }
  

 
  
  const name='JV';

  const img='perfil.png';
  const subtitle='Web Designer & Developer';
  const title="I'm Javier";
  const pretitle='Hello';
  
  const ProjectsButton = [
    { url: '/Projects', text: 'VIEW MORE'},
  ]

  const banners = [
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/AboutMe' ,text: 'ABOUT ME'},
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/Projects' ,text: 'NEW PROJECT IN DEVELOP'},
    { imageUrl: 'imgCarrusel/3.jpg' , url: '/Projects' ,text: 'NEW PROJECT FINISHED'},
  ];

  const titleProjectSection='Projects';
  const projectsCards=[
    {url:'/Projects/TFG/',urlImage:'Valeo.png',name:'Application for automotive spotlight image processing'},
    {url:'/Projects/Cards/',urlImage:'cARds.png',name:'cARds game'},
    {url:'/Projects',urlImage:'comingsoon.png',name:'Coming soon'},
    {url:'/Projects',urlImage:'comingsoon.png',name:'Coming soon'},
    {url:'/Projects',urlImage:'comingsoon.png',name:'Coming soon'},
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
    <Router >
        <article className='app'>
          <Header name={name} HeaderClass={CabeceraClass}/>
          <Routes>
          <Route path='/' element={
            <TransitionGroup >
                <CSSTransition key={'/'} timeout={500} classNames='fade' >
                <PortfolioIntro img={img} subtitle={subtitle} pretitle={pretitle} title={title} button={ProjectsButton} banners={banners}/>
                </CSSTransition>
            </TransitionGroup>
            } />
            <Route path='/AboutMe' element={
            <TransitionGroup >
                <CSSTransition key={'/AboutMe'} timeout={500} classNames='fade' >
                <PortfolioIntro img={img} subtitle={subtitle} pretitle={pretitle} title={title} button={ProjectsButton} banners={banners}/>
                </CSSTransition>
            </TransitionGroup>
            } />
            <Route path='/Projects/' element={
            <TransitionGroup >
                <CSSTransition key={'/Projects'} timeout={500} classNames='fade' >
                  <ProjectSection title={titleProjectSection} projectsCards={projectsCards} />
                </CSSTransition>
            </TransitionGroup>
            } />

            <Route path='/Projects/:nombreProyecto' element={
            <TransitionGroup >
                <CSSTransition key={'/Projects'} timeout={500} classNames='fade' >
                  <ProjectSection title={titleProjectSection} projectsCards={projectsCards} />
                </CSSTransition>
            </TransitionGroup>
            } />

            <Route path='/Skills' element={
            <TransitionGroup >
                <CSSTransition key={'/Skills'} timeout={500} classNames='fade' >
                <PortfolioIntro img={img} subtitle={subtitle} pretitle={pretitle} title={title} button={ProjectsButton} banners={banners}/>
                </CSSTransition>
            </TransitionGroup>
            } />
            <Route path='/Education' element={
            <TransitionGroup >
                <CSSTransition key={'/Education'} timeout={500} classNames='fade' >
                <PortfolioIntro img={img} subtitle={subtitle} pretitle={pretitle} title={title} button={ProjectsButton} banners={banners}/>
                </CSSTransition>
            </TransitionGroup>
            } />
            <Route path='/ContactMe' element={
            <TransitionGroup >
                <CSSTransition key={'/ContactMe'} timeout={500} classNames='fade' >
                <PortfolioIntro img={img} subtitle={subtitle} pretitle={pretitle} title={title} button={ProjectsButton} banners={banners}/>
                </CSSTransition>
            </TransitionGroup>
            } />
          </Routes>
        </article>
    </Router>
   
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