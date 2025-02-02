import './styles.css'
import * as taskService from '../../../services/task-service.ts'
import TaskCard from '../../../components/TaskCard/index.tsx'

export default function Task() {

    return (
        <main id='crgtask-task-section-page'>
            <section className='crgtask-container mt45'>
                {
                    taskService.findAll().map(
                        task => <TaskCard key={task.id} task={task} />)
                }
            </section>
        </main>
    )
}