import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export default function isAuthenticated(request: Request, response: Response, next: NextFunction): void {
    // recupera o token informado pelo usuário
    let authHeaders = request.headers.authorization

    if (!authHeaders){ // frontend não informou o token
        throw new AppError(`Token não está presente`, 400)
    }
    // frontend informou o token
    

    
} 