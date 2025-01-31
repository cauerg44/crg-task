import './styles.css'

export default function TaskCard() {

    return (
        <div className='crgtask-task-card'>
            <div className='crgtask-line-bottom'>
                <h4>Treinar perna e estudar Java</h4>
                <p>Fazer leg 180, elevação pélvica com 3 séries de 10 repetições</p>
            </div>
            <div className='crgtask-task-categories'>
                <div className='crgtask-task-category'>
                    Academia
                </div>
                <div className='crgtask-task-category'>
                    Estudo
                </div>
            </div>
        </div>
    )
}