import TaskCard from '../../../components/TaskCard'
import './styles.css'

export default function Task() {

    return (
        <main id='crgtask-task-section-page'>
            <section className='crgtask-container mt45'>
                <div className='crgtask-task-card'>
                    <TaskCard />
                </div>
            </section>
        </main>
    )
}