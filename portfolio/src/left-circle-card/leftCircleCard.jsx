
import './leftCircleCard.css'

export function LeftCircleCard({company,work}) {
    return (
        <article className='left-circle-card'>
           <h3 className='left-circle-card-h3'>{company}</h3>
           <p className='left-circle-card-p'>{work}</p>
           <span className='circle'></span>
        </article>
    )
}


