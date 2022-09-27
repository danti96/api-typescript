import { Request, Response } from 'express'
import { handleHttp } from "../utils/error.handle"
import {
    getCar,
    getCars,
    updateCar,
    insertCar,
    deleteCar
} from '../services/item'


const getItem = async ({ params }: Request, response: Response) => {
    try {
        const { id } = params
        const responseItem = await getCar(id)
        const data = response ? responseItem : "NOT_FOUND"
        response.send(data)
    } catch (error) {
        handleHttp(response, "ERROR_GET_ITEM", error)
    }
}

const getItems = async (_: Request, response: Response): Promise<any> => {
    try {
        const responseItems = await getCars()
        response.send(responseItems)
    } catch (error) {
        handleHttp(response, "ERROR_GET_ITEMS", error)
    }
}

const updateItem = async ({ params, body }: Request, response: Response) => {
    try {
        const { id } = params
        const responseItems = await updateCar(id, body)
        response.send(responseItems)
    } catch (error) {
        handleHttp(response, "ERROR_UPDATE_ITEM", error)
    }
}

const postItem = async ({ body }: Request, response: Response) => {
    try {
        const responseItem = await insertCar(body)
        response.send(responseItem)
    } catch (error) {
        handleHttp(response, "ERROR_POST_ITEM", error)
    }
}

const deleteItem = async ({ params }: Request, response: Response) => {
    try {
        const { id } = params
        const responseItem = await deleteCar(id)
        response.send(responseItem)
    } catch (error) {
        handleHttp(response, "ERROR_DELETE_ITEM", error)
    }
}

export {
    getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem,
}