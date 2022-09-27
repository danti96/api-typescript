import { Request, Response } from 'express'
import { handleHttp } from "../utils/error.handle"


const getBlog = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, "ERROR_GET_ITEM")
    }
}

const getItems = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, "ERROR_GET_ITEMS")
    }
}

const updateItem = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, "ERROR_UPDATE_ITEM")
    }
}

const postItem = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, "ERROR_POST_ITEM")
    }
}

const deleteItem = (request: Request, response: Response) => {
    try {

    } catch (error) {
        handleHttp(response, "ERROR_DELETE_ITEM")
    }
}

export {
    getBlog as getItem,
    getItems,
    updateItem,
    postItem,
    deleteItem,
}