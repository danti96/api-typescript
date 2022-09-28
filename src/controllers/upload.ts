import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import { RequestExt } from "../interfaces/jwt.interface";
import { Storage } from "../interfaces/storage.interface";
import { registerUpload } from "../services/storage";
import { handleHttp } from "../utils/error.handle";

const getFile = async (req: RequestExt, res: Response) => {
    try {
        const { user, file } = req;
        console.log(req)
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`,
        };
        const response = await registerUpload(dataToRegister);
        res.send(response);
    } catch (e) {
        handleHttp(res, "ERROR_GET_BLOG");
    }
};

export { getFile };