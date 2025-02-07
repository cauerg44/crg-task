import './styles.css'
import { Link } from 'react-router-dom'
import formIcon from '../../../assets/form-icon.svg'
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as forms from '../../../utils/forms.ts'
import FormTextArea from '../../../components/FormTextArea/index.tsx';

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
        },
        description: {
            value: "",
            id: "description",
            name: "description",
            type: "text",
            placeholder: "Descrição",
            validation: function (value: string) {
                return /^.{10,}$/.test(value)
            },
            message: "A descrição deve ter pelo menos 10 caracteres"
        }
    })

    useEffect(() => {
        const result = forms.toDirty(formData, "title")
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name))
    }

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
                                    {...formData.title}
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
                            <div>
                                <FormTextArea
                                    {...formData.description}
                                    className="crgtask-form-control crgtask-textarea"
                                    onChange={handleInputChange}
                                    onTurnDirty={handleTurnDirty}
                                />
                                <div className='crgtask-form-error'>{formData.description.message}</div>
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