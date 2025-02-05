import { Link } from 'react-router-dom'
import formIcon from '../../../assets/form-icon.svg'
import './styles.css'

export default function TaskForm() {

    return (
        <main>
            <section id="crgtask-task-form-section-page" className="crgtask-container">
                <div className="crgtask-task-form-container">
                    <div>
                        <img src={formIcon} alt="Form" />
                        <h2>Vamos deixar nosso dia produtivo 💡</h2>
                    </div>
                    <form className="crgtask-card crgtask-form">
                        <h2>Dados da tarefa</h2>
                        <div className="crgtask-form-controls-container">
                            <div>
                                <input className="crgtask-form-control" type="text" placeholder="Nome" />
                            </div>
                            <div>
                                <select className="crgtask-form-control crgtask-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div>
                            <div>
                                <textarea className="crgtask-form-control crgtask-textarea" placeholder="Descrição"></textarea>
                            </div>
                        </div>

                        <div className="crgtask-product-form-buttons">
                            <Link to={"/tasks"}>
                                <button type="reset" className="crgtask-btn crgtask-btn-white">Cancelar</button>
                            </Link>
                            <button type="submit" className="crgtask-btn crgtask-btn-blue">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}