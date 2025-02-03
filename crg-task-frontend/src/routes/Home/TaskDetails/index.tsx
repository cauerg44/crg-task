import './styles.css'
import { useParams } from "react-router-dom";
import TaskCard from "../../../components/TaskCard/index.tsx";
import * as taskService from '../../../services/task-service.ts'
import ButtonPrimary from '../../../components/ButtonPrimary/index.tsx';
import ButtonSecondary from '../../../components/ButtonSecondary/index.tsx';
import ButtonTertiary from '../../../components/ButtonTertiary/index.tsx';


export default function TaskDetails() {

    const params = useParams()

    const task = taskService.findById(Number(params.taskId));

    return (
        <main>
            <section id="crgtask-task-details-section" className="crgtask-container">
                {
                    task &&
                    <TaskCard task={task} />
                }
                <div className='crgtask-task-details-btn'>
                    <ButtonPrimary text='Finalizar ✅' />
                    <ButtonSecondary text='Editar tarefa ✏️' />
                    <ButtonTertiary text='Deletar' />
                </div>
            </section>
        </main>
    )
}