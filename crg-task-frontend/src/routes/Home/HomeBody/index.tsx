import './styles.css'
import ButtonPrimary from '../../../components/ButtonPrimary'
import welcomeIcon from '../../../assets/welcome-icon.png'
import { Link } from 'react-router-dom'

export default function HomeBody() {

    return (
        <>
            <main id='crgtask-home-section'>
                <section className='crgtask-container'>
                    <h1>Seja bem-vindo Cauê!</h1>
                    <p>Começe a gerenciar suas tarefas e deixe sua rotina mais organizada!</p>
                    <Link to={"/tasks"}>
                        <ButtonPrimary text='Avançar' />
                    </Link>
                    <img className='crgtask-welcome-icon' src={welcomeIcon} alt="Seja bem vindo!" />
                </section>
            </main>
        </>
    )
}