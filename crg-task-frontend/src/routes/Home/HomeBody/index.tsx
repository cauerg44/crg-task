import './styles.css'
import ButtonPrimary from '../../../components/ButtonPrimary'
import welcomeIcon from '../../../assets/welcome-icon.png'

export default function HomeBody() {

    return (
        <>
            <main id='crgtask-home-section'>
                <section  className='crgtask-container'>
                    <h1>Seja bem-vindo(a)!</h1>
                    <p>Começe a gerenciar suas tarefas e deixe sua rotina mais organizada!</p>
                    <ButtonPrimary />
                    <img className='crgtask-welcome-icon' src={welcomeIcon} alt="Seja bem vindo!" />
                </section>
            </main>
        </>
    )
}