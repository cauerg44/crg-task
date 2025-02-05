import './styles.css'
import { useNavigate, useParams } from "react-router-dom";
import TaskCard from "../../../components/TaskCard/index.tsx";
import * as taskService from '../../../services/task-service.ts'
import ButtonPrimary from '../../../components/ButtonPrimary/index.tsx';
import ButtonSecondary from '../../../components/ButtonSecondary/index.tsx';
import ButtonTertiary from '../../../components/ButtonTertiary/index.tsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { TaskDTO } from '../../../models/task.ts';
import DialogInfo from '../../../components/DialogInfo/index.tsx';


export default function TaskDetails() {

    const params = useParams()

    const navigate = useNavigate()

    const [dialogInfoData, setDialogInfoData] = useState({
        visible: false,
        message: "Operação com sucesso"
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

    function handleDeleteClick() {
        setDialogInfoData({ ...dialogInfoData, visible: true })
    }

    function handleEditClick() {
        navigate("/create/task")
    }

    return (
        <main>
            <section id="crgtask-task-details-section" className="crgtask-container">
                {
                    task &&
                    <TaskCard task={task} />
                }
                <div className='crgtask-task-details-btn'>
                    <button className='bg-blue font-white'>
                        Finalizar ✅
                    </button>
                        <button onClick={handleEditClick} className='bg-white font-blue'>
                            Editar tarefa ✏️
                        </button>
                    <button onClick={handleDeleteClick} className='bg-red font-white'>
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
        </main>
    )
}