import { TaskDTO } from '../../models/task'
import TaskCategory from '../TaskCategory'
import './styles.css'

type Props = {
    task: TaskDTO
}

export default function TaskCard({ task }: Props) {

    return (
        <div className='crgtask-task-card'>
            <div className='crgtask-line-bottom'>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
            </div>
            <div className='crgtask-task-categories'>
                {
                    task.categories.map(item => (
                        <TaskCategory key={item.id} name={item.name} />
                    ))
                }
            </div>
        </div>
    )
}