import './styles.css'
import { Link } from 'react-router-dom'
import formIcon from '../../../assets/form-icon.svg'
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms.ts'

export default function TaskForm() {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [formData, setFormData] = useState<any>({
        title: {
            value: "",
            id: "title",
            name: "title",
            type: "text",
            placeholder: "Nome",
            validation: function (value: string) {
                return /^.{3,80}$/.test(value)
            },
            message: "Favor informar um nome de 3 a 80 caracteres"
        }
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        const dataUpdated = forms.update(formData, event.target.name, event.target.value)
        const dataValidated = forms.validate(dataUpdated, event.target.name)
        setFormData(dataValidated)
    }

    function handleTurnDirty(name: string) {
        const newFormData = forms.toDirty(formData, name)
        setFormData(newFormData)
    }

    useEffect(() => {
        const result = forms.toDirty(formData, "title")
        console.log(result)
    }, [])

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
                                <FormInput 
                                    { ...formData.title }
                                    className="crgtask-form-control"
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className='crgtask-form-error'>{formData.title.message}</div>
                            </div>
                            <div>
                                <select className="crgtask-form-control crgtask-select" required>
                                    <option value="" disabled selected>Categorias</option>
                                    <option value="1">Valor 1</option>
                                    <option value="2">Valor 2</option>
                                </select>
                            </div>
                            {/* <div>
                                <textarea className="crgtask-form-control crgtask-textarea" placeholder="Descrição"></textarea>
                            </div> */}
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