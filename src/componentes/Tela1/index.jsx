import React, { useState, useEffect } from 'react'

const Tela1 = () => {
    const [email_usuario, setEmailUsuario] = useState("");
    const [nome_usuario, setNomelUsuario] = useState("");
    const [senha_usuario, setSenhalUsuario] = useState("");
    const [confirmSenha_usuario, setConfirSenhalUsuario] = useState("");
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const usuariosCadastrados = JSON.parse(localStorage.getItem("usuario"));
        if(usuariosCadastrados){
            setUSuarios(usuariosCadastrados);
        }
    }, []);

    function salvarUsuario() 
        if (senha_usuario !== confirmSenha_usuario) {
            alert('Você não digitou a mesma senha!');
        } else{
            const novosUsuarios = [...usuarios, {nome_usuario, email_usuario, senha_usuario}];
            setUsuarios(novosUsuarios);
            localStorage.setItem("usuario", JSON.stringify(novosUsuarios));
        }
    }

    return (
        <div>
            <h1>ÁREA DE CADASTRO DE USUÁRIO</h1>
            <form>
                <label>NOME: </label><br />
                <input
                 name="nome" 
                 onChange={(evento) => { 
                    setNomelUsuario(evento.target.value);
                }} 
                ></input>
            </form>
        </div>
    )