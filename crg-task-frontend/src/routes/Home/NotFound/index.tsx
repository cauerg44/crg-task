import './styles.css'
import notFoundIcon from '../../../assets/not-found.png'

export default function NotFound() {

    return (
        <main id='crgtask-not-found-page'>
            <section className='crgtask-container crgtask-not-foun-page-section'>
                <h1>Erro ao navegar :(</h1>
                <h3>Que tal voltar ao ínicio? 🏠</h3>
                <img src={notFoundIcon} alt="Error" />
            </section>
        </main>
    )
}