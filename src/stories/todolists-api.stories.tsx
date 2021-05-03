import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.createTodolist('Hello!!!')
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const todolistId = '749ab4fa-3a11-42f8-9f4c-aeac14d140b5';
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const todolistId = 'b2975af0-727f-4b76-99b9-0bc3cc418126'
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, 'fack')
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todoListId = 'b2975af0-727f-4b76-99b9-0bc3cc418126'

        todolistAPI.getTasks(todoListId)
            .then(res => setState(res.data.items))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {

        const todoListId = 'b2975af0-727f-4b76-99b9-0bc3cc418126'
        const taskId = ''

        todolistAPI.deleteTask(todoListId, taskId)
            .then(res => setState(res.data))
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
