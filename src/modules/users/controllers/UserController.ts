import { Request, Response } from "express";
import CreateUserService from "../services/CreateUserService";
import ListUserService from "../services/ListUserService";

class UserController {

    public async index(request: Request, response: Response): Promise<Response>{

        let listUserService = new ListUserService()
        let users = await listUserService.execute()
        return response.json(users)

    }

    public async create(request: Request, response: Response): Promise<Response>{
        let createUserService = new CreateUserService()
        // obter os dados do usuário
        let {name, email, password} = request.body
        let user = await createUserService.execute({
            name, email, password
        })
        return response.json(user)
    }
}

export default UserController