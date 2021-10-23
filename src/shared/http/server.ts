// servidor http
import express from 'express'

// cors -> permissão de acesso às rotas
import cors from 'cors'

// cria o servidor
const servidor = express()

// servidor vai utilizar o cors
servidor.use(cors)

// servidor vai converte valores do usuário para jSON
servidor.use(express.json())

// sobe o servidor
servidor.listen(3333, () => {
    console.log(`Servidor up and running `)
})