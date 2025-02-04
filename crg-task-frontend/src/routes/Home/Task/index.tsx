import './styles.css';
import * as taskService from '../../../services/task-service.ts';
import TaskCard from '../../../components/TaskCard/index.tsx';
import ButtonPrimary from '../../../components/ButtonPrimary/index.tsx';
import { Link } from 'react-router-dom';

export default function Task() {
    const tasks = taskService.findAll();

    return (
        <main id='crgtask-task-section-page'>
            <section className='crgtask-container mt45'>
                <div className='crgtask-navigate-create-new-task'>
                    <h2>Gostaria de adicionar uma tarefa? 📝</h2>
                    <Link to="/create/task">
                        <ButtonPrimary text='Clique aqui' />
                    </Link>
                </div>
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
