import './styles.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import formIcon from '../../../assets/form-icon.svg'
import { useEffect, useState } from 'react';
import FormInput from '../../../components/FormInput';
import * as categoryService from '../../../services/category-service.ts'
import * as forms from '../../../utils/forms.ts'
import FormTextArea from '../../../components/FormTextArea/index.tsx';
import { CategoryDTO } from '../../../models/category.ts';
import FormSelect from '../../../components/FormSelect/index.tsx';
import { selectStyles } from '../../../utils/select.ts';
import * as taskService from '../../../services/task-service.ts'

export default function TaskForm() {

    const [categories, setCategories] = useState<CategoryDTO[]>([])

    const params = useParams()

    const navigate = useNavigate()

    const isEditing = params.taskId !== undefined;

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
        },
        categories: {
            value: [],
            id: "categories",
            name: "categories",
            placeholder: "Categorias",
            validation: function (value: CategoryDTO[]) {
                return value.length > 0
            },
            message: "Deve ter pelo menos uma categoria"
        }
    })

    useEffect(() => {
        categoryService.findAllCategories()
            .then(response => {
                setCategories(response.data)
            })
    }, [])

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleInputChange(event: any) {
        setFormData(forms.updateAndValidate(formData, event.target.name, event.target.value))
    }

    function handleTurnDirty(name: string) {
        setFormData(forms.dirtyAndValidate(formData, name))
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function handleSubmit(event: any) {
        event.preventDefault()

        const formDataValidated = forms.dirtyAndValidateAll(formData)
        if (forms.hasAnyInvalid(formDataValidated)) {
            setFormData(formDataValidated)
            return
        }

        const requestBody = forms.toValues(formData)
        if (isEditing) {
            requestBody.id = params.taskId
        }

        taskService.updateRequest(requestBody)
            .then(() => {
                navigate("/tasks")
            })
    }

    return (
        <main>
            <section id="crgtask-task-form-section-page" className="crgtask-container">
                <div className="crgtask-task-form-container">
                    <div>
                        <img src={formIcon} alt="Form" />
                        <h2>Vamos deixar nosso dia produtivo 💡</h2>
                    </div>
                    <form className="crgtask-card crgtask-form" onSubmit={handleSubmit}>
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
                                <FormSelect
                                    {...formData.categories}
                                    options={categories}
                                    className="crgtask-form-control crgtask-form-select-container"
                                    styles={selectStyles}
                                    onChange={(obj: any) => {
                                        const newFormData = forms.updateAndValidate(formData, "categories", obj)
                                        console.log(newFormData.categories)
                                        setFormData(newFormData)
                                    }}
                                    onTurnDirty={handleTurnDirty}
                                    isMulti
                                    getOptionLabel={(obj: any) => obj.name}
                                    getOptionValue={(obj: any) => String(obj.id)}
                                />
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