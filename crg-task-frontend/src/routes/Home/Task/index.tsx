import './styles.css';
import * as taskService from '../../../services/task-service.ts';
import TaskCard from '../../../components/TaskCard/index.tsx';

export default function Task() {
    const tasks = taskService.findAll();

    return (
        <main id='crgtask-task-section-page'>
            <section className='crgtask-container mt45'>
                {tasks.length > 0 ? (
                    tasks.map(task => <TaskCard key={task.id} task={task} />)
                ) 
                : 
                (
                    <h1>Não há tarefas cadastradas!</h1>
                )}
            </section>
        </main>
    );
}
