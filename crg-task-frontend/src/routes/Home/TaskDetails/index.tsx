import './styles.css'
import { useParams } from "react-router-dom";
import TaskCard from "../../../components/TaskCard/index.tsx";
import * as taskService from '../../../services/task-service.ts'
import ButtonPrimary from '../../../components/ButtonPrimary/index.tsx';
import ButtonSecondary from '../../../components/ButtonSecondary/index.tsx';
import ButtonTertiary from '../../../components/ButtonTertiary/index.tsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TaskDTO } from '../../../models/task.ts';


export default function TaskDetails() {

    const params = useParams()

    const [task, setTask] = useState<TaskDTO>()

    useEffect(() => {
        taskService.findById(Number(params.taskId))
            .then(response => {
                console.log(response.data)
                setTask(response.data)
            })
    }, [params.taskId])

    return (
        <main>
            <section id="crgtask-task-details-section" className="crgtask-container">
                {
                    task &&
                    <TaskCard task={task} />
                }
                <div className='crgtask-task-details-btn'>
                    <ButtonPrimary text='Finalizar ✅' />
                    <Link to="/create/task">
                        <ButtonSecondary text='Editar tarefa ✏️' />
                    </Link>
                    <ButtonTertiary text='Deletar' />
                </div>
            </section>
        </main>
    )
}