import './styles.css'
import * as taskService from '../../../services/task-service.ts'
import TaskCard from '../../../components/TaskCard/index.tsx'

export default function Task() {

    return (
        <main id='crgtask-task-section-page'>
            <section className='crgtask-container mt45'>
                <div className='crgtask-task-card'>
                    {
                        taskService.findAll().map(
                            task => <TaskCard key={task.id} task={task} />)
                    }
                </div>
            </section>
        </main>
    )
}