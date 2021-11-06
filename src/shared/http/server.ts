import 'reflect-metadata'
import 'express-async-errors'

// servidor http
import express, { NextFunction, Request, Response } from 'express'

// importar as rotas
import routes from './routes'

// cors -> permissão de acesso às rotas
import cors from 'cors'

// cria a conexão com o banco de dados
import './../typeorm'
import AppError from '../errors/AppError'

// cria o servidor
const servidor = express()

// servidor vai utilizar o cors
servidor.use(cors())

// servidor vai converte valores do usuário para jSON
servidor.use(express.json())

// servidor reconhecendo a rota /product
servidor.use(routes)


// vamos configurar servidor para que erros sejam respondidos pelo AppError
servidor.use(
    (error:Error, request: Request, response: Response, next:NextFunction) => {
        // erro foi lançado pelo AppError
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        // erro não foi lançado pelo AppError
        return response.status(500).json({
            status: 'error',
            message: 'Erro interno do servidor'
        })
    }
)
// sobe o servidor
servidor.listen(3333, () => {
    console.log(`Servidor up and running `)
})