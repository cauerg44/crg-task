import './styles.css'
import homeIcon from '../../assets/home-icon.svg'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <nav className='crgtask-container'>
                <div className='crgtask-navlinks'>
                    <NavLink to="/home" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Início
                    </NavLink>
                    <NavLink to="/tasks" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Tarefas
                    </NavLink>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "menu-item menu-active" : "menu-item"}>
                        Sobre
                    </NavLink>
                </div>
                <Link to={"/home"}>
                    <div className='crgtask-home-icon'>
                        <img src={homeIcon} alt="Home" />
                    </div>
                </Link>
            </nav>
        </header>
    )
}