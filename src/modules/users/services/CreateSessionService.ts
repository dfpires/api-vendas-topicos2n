import { getCustomRepository } from "typeorm";
import AppError from "../../../shared/errors/AppError";
import User from "../typeorm/entities/User";
import UserRepository from "../typeorm/repository/UserRepository";
import {compare} from 'bcryptjs'

import {sign} from 'jsonwebtoken'

interface IRequest { // tipo de dados para requisição
    email: string;
    password: string;
}

interface IResponse { // tipo de dados para resposta
    user: User;
    token: string;
}
class CreateSessionService {

    public async execute({email, password}: IRequest): Promise<IResponse> {
        const userRepository = getCustomRepository(UserRepository)
        // verifica se o usuário existe
        const user = await userRepository.findByEmail(email)
        if (!user){
            throw new AppError(`Usuário/senha inválidos`, 401)
        }
        // usuário existe
        // senha está correta ? bcryptjs
        const senhaConfirmada = await compare(password, user.password)
        if (!senhaConfirmada){
            throw new AppError(`Usuário/senha inválidos`, 401)
        }
        // senha correta
        // gerar o token para usuário
        const token = sign({}, 'jfalkjfklajdsklfjdsklafjasdklfj;kls', {
            subject: user.id,
            expiresIn: '1d'
        })

        return {
            user,
            token
        }
    }
}

export default CreateSessionService