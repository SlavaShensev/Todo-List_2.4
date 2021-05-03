import axios from 'axios'

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    data: T
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}
// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': 'bc0f37c0-3636-40b7-850e-bf294ab46dea'
//     }
// }

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': 'bc0f37c0-3636-40b7-850e-bf294ab46dea'
    }
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('/todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists',
            {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(`/todo-lists/${todolistId}`,
            {title: title})
    },

    getTasks(todoListId: string) {
        return instance.get<GetTasksResponse>(`/todo-lists/${todoListId}/tasks`)
    },

    deleteTask(todoListId: string, taskId: string ) {
        return instance.delete<ResponseType>(`/todo-lists/${todoListId}/tasks/${taskId}`)
    }


}
