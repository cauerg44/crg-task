import axios, { AxiosRequestConfig } from "axios"
import { BASE_URL } from "../utils/system"
import { requestBackend } from "../utils/requests"
import { TaskDTO } from "../models/task"

export function findAll() {
    return axios.get(`${BASE_URL}/tasks`)
}

export function findById(id: number) {
    return requestBackend({ url: `tasks/${id}`})
}

export function deleteById(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `tasks/${id}`,
        withCredentials: false
    }

    return requestBackend(config)
}

export function finishTask(id: number) {
    const config : AxiosRequestConfig = {
        method: "DELETE",
        url: `tasks/${id}`,
        withCredentials: false
    }

    return requestBackend(config)
}

export function updateRequest(obj: TaskDTO) {
    const config: AxiosRequestConfig = {
        method: "PUT",
        url: `/tasks/${obj.id}`,
        withCredentials: true,
        data: obj
    }

    return requestBackend(config)
}