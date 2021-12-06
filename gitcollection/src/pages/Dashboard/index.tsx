import React from 'react'
import { Formulario, Title } from './styles'

import logo from '../../assets/logo.svg'
import { api } from '../../services/api'

export const Dashboard: React.FC = () => {

    // vamos criar um tipo de dados
    interface IGithubRepository {
        full_name: string;
        description: string;
        owner: {
            login: string;
            avatar_url: string;
        }
    }

    // criando um estado de variável e inicializo com vazio
    const [novoRepositorio, setNovoRepositorio] = React.useState('')

    // altera o estado da variável novoRepositório com o valor na caixa de texto
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
        // alterar o valor de novoRepositorio com o valor digitado pelo usuário
        setNovoRepositorio(event.target.value)
        
    }
    // chamar a api do github -> assíncrona
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{

        // vamos chamar a api -> dependência axios
        // novoRepositorio é a informação do usuário
        // tratar o erro
        try {
            const resposta = await api.get(`repos/${novoRepositorio}`)
            const repositorio = resposta.data // dados vindos do servidor
            console.log(repositorio)
        }
        catch {
            console.log(`Repositório não encontrado`)
        }
    }

    return (
        <>
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Formulario onSubmit={handleAddRepo}>
                <input placeholder="username/nome_repositorio" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button>
            </Formulario>
        </>
    )
}