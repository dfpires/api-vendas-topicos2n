import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";
import {verify} from 'jsonwebtoken'

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
    // recupera o token informado pelo usuário
    let authHeaders = request.headers.authorization

    if (!authHeaders){ // frontend não informou o token
        throw new AppError(`Token não está presente`, 400)
    }
    // frontend informou o token
    // Beared jkasjdkfjdsklfjkalsdjfkljasdklfjadskljfals
    let [, token] = authHeaders.split(' ')
    // verifica se o token é válido
    try {
        // devemos utilizar a chave secreta é privada
        //jfalkjfklajdsklfjdsklafjasdklfj;kls
        let tokenVerificado = verify(token, 'jfalkjfklajdsklfjdsklafjasdklfj;kls')
        
        return next() // passa pra frente, entra na rota
    }
    catch {
        throw new AppError(`Token inválido`, 400)
    }

    
} 