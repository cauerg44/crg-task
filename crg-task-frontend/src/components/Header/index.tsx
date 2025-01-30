import './styles.css'
import homeIcon from '../../assets/home-icon.svg'

export default function Header() {

    return (
        <header>
            <nav className='crgtask-container'>
                <div className='crgtask-navlinks'>
                    <p>Início</p>
                    <p>Tarefas</p>
                    <p>Sobre</p>
                </div>
                <div className='crgtask-home-icon'>
                    <img src={homeIcon} alt="Home" />
                </div>
            </nav>
        </header>
    )
}