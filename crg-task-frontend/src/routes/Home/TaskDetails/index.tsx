import './styles.css'
import { useNavigate, useParams } from "react-router-dom";
import TaskCard from "../../../components/TaskCard/index.tsx";
import * as taskService from '../../../services/task-service.ts'
import { useEffect, useState } from 'react';
import { TaskDTO } from '../../../models/task.ts';
import DialogInfo from '../../../components/DialogInfo/index.tsx';
import DialogConfirmation from '../../../components/DialogConfirmation/index.tsx';


export default function TaskDetails() {

    const params = useParams()

    const navigate = useNavigate()

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso!"
    })

    const [dialogConfirmationData, setDialogConfirmationData] = useState({
        visible: false,
        id: 0,
        message: "Tem certeza?"
    })

    const [task, setTask] = useState<TaskDTO>()

    useEffect(() => {
        taskService.findById(Number(params.taskId))
            .then(response => {
                console.log(response.data)
                setTask(response.data)
            })
            .catch(() => {
                navigate("/tasks")
            })
    }, [params.taskId])

    function handleDialogInfoClose() {
        setDialogInfoData({ ...dialogInfoData, visible: false })
    }

    function handleDeleteClick(taskId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: taskId, visible: true })
    }

    function handleFinishClick(taskId: number) {
        setDialogConfirmationData({ ...dialogConfirmationData, id: taskId, visible: true })
    }

    function handleEditClick() {
        navigate(`/task/edit/${task.id}`);
    }

    function handleDialogConfirmationAnswer(answer: boolean, taskId: number) {
        if (answer) {
            taskService.deleteById(taskId)
                .then(() => {
                    navigate("/tasks")
                })
        }
        setDialogConfirmationData({ ...dialogConfirmationData, visible: false })
    }

    return (
        <main>
            <section id="crgtask-task-details-section" className="crgtask-container">
                {
                    task &&
                    <TaskCard task={task} />
                }
                <div className='crgtask-task-details-btn'>
                    <button onClick={() => handleFinishClick(task?.id)} className='bg-blue font-white'>
                        Finalizar ✅
                    </button>
                        <button onClick={handleEditClick} className='bg-white font-blue'>
                            Editar tarefa ✏️
                        </button>
                    <button onClick={() => handleDeleteClick(task?.id)} className='bg-red font-white'>
                        Deletar 🗑️
                    </button>
                </div>
            </section>
            {
                dialogInfoData.visible &&
                <DialogInfo
                    message={dialogInfoData.message}
                    onDialogClose={handleDialogInfoClose}
                />
            }
            {
                dialogConfirmationData.visible &&
                <DialogConfirmation
                    id={dialogConfirmationData.id}
                    message={dialogConfirmationData.message}
                    onDialogAnswer={handleDialogConfirmationAnswer}
                />
            }
        </main>
    )
}