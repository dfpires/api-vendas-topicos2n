// servidor http
import express from 'express'
// importar as rotas
import routes from './routes'

// cors -> permissão de acesso às rotas
import cors from 'cors'

// cria a conexão com o banco de dados
import './../typeorm'

// cria o servidor
const servidor = express()

// servidor vai utilizar o cors
servidor.use(cors())

// servidor vai converte valores do usuário para jSON
servidor.use(express.json())

// servidor reconhecendo a rota /product
servidor.use(routes)

// sobe o servidor
servidor.listen(3333, () => {
    console.log(`Servidor up and running `)
})