import React, { useState }  from "react";

const Tela2 = () => {
    const [email_usuario, setEmailUsuario] = useState ("");
    const [senha_usuario, setSenhalUsuario] = useState("");

    function logar(){
        const usuariosCadastrados = localStorage.getItem("usuario") || [];

        if (usuariosCadastrados){
            const usuarios = JSON.parse(usuariosCadastrados);

            if (usuarios.find((usuario) => usuario.email_usuario == email_usuario && usuario.senha_usuario == senha_usuario)){
                alert ('LOGIN EFETUADO');
            } else {
                alert ('ERRO AO LOGAR. USUARIO OU SENHA INCORRETOS');
            }
        } else {
            console.log("NÃO HÁ USUÁRIOS");
        }   
 
 
    } 
 return (
    <div><h1>LOGIN</h1>
    <form>
        <label>EMAIL:</label><br />
        <input 
        type="email"
        name="email"
        onChange ={(evento) => {
            setEmailUsuario(evento.target.value);
        }}
        ></input><br />

        <label>SENHA:</label><br />
        <input 
        type="password"
        name = "password"
        onChange ={(evento) => {
            setSenhalUsuario(evento.target.value);
        }}
        ></input><br />

        <input type="button" value = "Logar" 
        onClick={()=> logar()}/>
        
    </form>
    </div>
 )
};

export default Tela2;