import { Car } from "../interfaces/car.interface"
import ItemModel from "../models/Items_model"

const getCar = async (id: string) => {
    const responseItem = await ItemModel.findOne({ _id: id })
    return responseItem
}

const getCars = async () => {
    const responseItems = await ItemModel.find({})
    return responseItems
}

const updateCar = async (id: string, data: Car) => {

    const responseItem = await ItemModel.findOneAndUpdate(
        { _id: id },
        data,
        {
            new: true
        }
    )
    return responseItem
}

const insertCar = async (item: Car) => {

    const responseItem = await ItemModel.create(item)
    return responseItem
}

const deleteCar = async (id: string) => {

    const responseItem = await ItemModel.remove({ _id: id })
    return responseItem
}

export {
    getCar,
    getCars,
    updateCar,
    insertCar,
    deleteCar
}