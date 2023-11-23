
import './projectCard.css'

export function ProjectCard({link,imgProject,title,technologies,style}) {

    return (
        <a href={link} className='project-card' style={style}>
            <section className='project-card-imgContainer'>
                <img src={`./img/${imgProject}`} className='project-card-img'/>
            </section>
            <h3 className='project-card-h3'>{title}</h3>
            <section className='project-card-technologies'>
                {technologies.map((tech, indx) => (
                    <img key={indx} src={`./img/${tech}`} className='project-card-techologies-img'/>
                ))}
            </section>
        </a>
    )
}


