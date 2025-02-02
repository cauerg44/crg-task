import './styles.css'

type Props = {
    name: string
}

export default function TaskCategory({ name }: Props) {

    return (
        <div className='crgtask-task-category'>
            {name}
        </div>
    )
}