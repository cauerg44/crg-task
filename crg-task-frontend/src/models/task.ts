import { CategoryDTO } from "./category"


export type TaskDTO = {
    id: number,
    title: string,
    description: string,
    categories: CategoryDTO[]
}