import React from 'react'
import { Formulario, Title } from './styles'

import logo from '../../assets/logo.svg'

export const Dashboard: React.FC = () => {

    // criando um estado de variável e inicializo com vazio
    const [novoRepositorio, setNovoRepositorio] = React.useState('')

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void{
        // alterar o valor de novoRepositorio com o valor digitado pelo usuário
        setNovoRepositorio(event.target.value)
        
    }
    return (
        <>
            <img src={logo} alt="Git Collection"/>
            <Title> Catálogo de repositórios do Github </Title>
            <Formulario>
                <input placeholder="username/nome_repositorio" onChange={handleInputChange}/>
                <button type="submit"> Buscar </button>
            </Formulario>
        </>
    )
}