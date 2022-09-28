import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage_model";

const registerUpload = async ({ fileName, idUser, path }: Storage) => {
    const responseItem = await StorageModel.create({ fileName, idUser, path });
    return responseItem;
};

export { registerUpload };