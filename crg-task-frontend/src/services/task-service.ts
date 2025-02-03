import { TaskDTO } from "../models/task";

export function findAll(): TaskDTO[] {
    return tasks
}

export function findById(id: number) : TaskDTO | undefined {
    return tasks.find(x => x.id === id)
}

const tasks: TaskDTO[] = [
    {
        "id": 1,
        "title": "Estudar ReactJS",
        "description": "Aprender sobre Context API e estado global",
        "categories": [
            {
                "id": 1,
                "name": "Estudo"
            },
            {
                "id": 3,
                "name": "Casa"
            }
        ]
    },
    {
        "id": 2,
        "title": "Organizar meu quarto",
        "description": "Organizar meu quarto antes das 8hrs para eu sair de casa",
        "categories": [
            {
                "id": 3,
                "name": "Casa"
            }
        ]
    },
    {
        "id": 3,
        "title": "Treino de braço",
        "description": "Treinar bastante o bíceps e tríceps",
        "categories": [
            {
                "id": 4,
                "name": "Academia"
            }
        ]
    },
    {
        "id": 4,
        "title": "Entender conceito SOLID",
        "description": "Entender todo o conceito e arquitetura para que me ajude a melhorar meu código",
        "categories": [
            {
                "id": 1,
                "name": "Estudo"
            }
        ]
    },
    {
        "id": 5,
        "title": "Limpar banheiro e cozinha",
        "description": "Deixar a comida pronta, depois deixar a cozinha limpa, e deixar o banheiro limpo antes de anoitecer",
        "categories": [
            {
                "id": 3,
                "name": "Casa"
            }
        ]
    },
    {
        "id": 6,
        "title": "Zerar a task",
        "description": "Fazer todas as tasks e fazer o pull request para ser aprovado",
        "categories": [
            {
                "id": 2,
                "name": "Trabalho"
            }
        ]
    },
    {
        "id": 7,
        "title": "Entregar o projeto pronto",
        "description": "Entregar meu projeto full stack pronto para eu ser aprovado",
        "categories": [
            {
                "id": 1,
                "name": "Estudo"
            },
            {
                "id": 2,
                "name": "Trabalho"
            }
        ]
    }
]