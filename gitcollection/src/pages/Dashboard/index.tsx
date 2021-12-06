import React from 'react'
import { Formulario, Repo, Title } from './styles'

import logo from '../../assets/logo.svg'
import { api } from '../../services/api'
import { Link } from 'react-router-dom'

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

    // estado da variável repositorio que inicia como vazio do tipo githubrepository
    const [repositorio, setRepositorio] = React.useState({owner: {}} as IGithubRepository)

    // altera o estado da variável novoRepositório com o valor na caixa de texto
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
        // alterar o valor de novoRepositorio com o valor digitado pelo usuário
        setNovoRepositorio(event.target.value)
        
    }
    // chamar a api do github -> assíncrona
    async function handleAddRepo(event: React.FormEvent<HTMLFormElement>, ): Promise<void>{
        
        // não atualiza a página
        event.preventDefault(); 
        
        // vamos chamar a api -> dependência axios
        // novoRepositorio é a informação do usuário
        // tratar o erro
        try {
            const resposta = await api.get<IGithubRepository>(`repos/${novoRepositorio}`)
            const aux = resposta.data // dados vindos do servidor
            setRepositorio(aux) // atualiza o repositorio com os dados do servidor
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

            <Repo>
                <Link 
                    to={`/repositories/${repositorio.full_name}`}>
                    <img src={repositorio.owner.avatar_url}
                        alt={repositorio.owner.login}/>
                    <div>
                        <strong> {repositorio.full_name} </strong>
                        <p> {repositorio.description}</p>
                    </div>
                </Link>
            </Repo>
        </>
    )
}