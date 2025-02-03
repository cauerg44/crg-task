import './styles.css'
import profilePicture from '../../../assets/my-profile-picture.png'
import icon1 from '../../../assets/github-icon.svg'
import icon2 from '../../../assets/instagram-icon.svg'
import icon3 from '../../../assets/linkedin-icon.svg'
import icon4 from '../../../assets/gmail-icon.svg'

export default function About() {

    return (
        <main>
            <section id='crgtask-section-page-about' className='crgtask-container'>
                <div className='crgtask-profile-picture'>
                    <img src={profilePicture} alt="Profile picture" />
                </div>
                <h2 className='crgtask-title-contact-me'>Entre em contato comigo</h2>
                <div className='crgtask-social-medias'>
                    <div className='crgtask-social-media-item'>
                        <a href="https://github.com/cauerg44" target="_blank" rel="noopener noreferrer">
                            <img src={icon1} alt="Github" />
                            <p>cauerg44</p>
                        </a>
                    </div>
                    <div className='crgtask-social-media-item'>
                        <a href="https://instagram.com/cauerg.ig" target="_blank" rel="noopener noreferrer">
                            <img src={icon3} alt="Instagram" />
                            <p>@cauerg.ig</p>
                        </a>
                    </div>
                    <div className='crgtask-social-media-item'>
                        <a href="https://www.linkedin.com/in/cauegarcia8112004" target="_blank" rel="noopener noreferrer">
                            <img src={icon2} alt="LinkedIn" />
                            <p>Cauê da Rocha Garcia</p>
                        </a>
                    </div>
                    <div className='crgtask-social-media-item'>
                        <a href="mailto:cauerg7@gmail.com">
                            <img src={icon4} alt="Gmail" />
                            <p>cauerg7@gmail.com</p>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
