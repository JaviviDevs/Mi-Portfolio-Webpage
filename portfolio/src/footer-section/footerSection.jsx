import './footerSection.css'


export function FooterSection({links}) {

  return (
    <article className='footer' id='ContactMe'>
      <section className='footer-contact' >
        {links.map((link, indx) => (
          <a key={indx} href={link[0]} className='footer-contact-a'>
            <section className='footer-contact-a-imgContainer'>
              <img src={`./img/${link[1]}`} className='footer-contact-a-img'/>
            </section>
            <p className='footer-contact-a-p'>{link[2]}</p>
          </a>
        ))}
      </section>
    </article> 
  )
}