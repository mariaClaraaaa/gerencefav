import React from 'react'

const Conteudo = () => {
  return (
    <div>
      Conteudo
    <form onSubmit={()=>alert("Favorito salvo")}>
        <label>
          Nome do site
        </label>
        <input name="nome_site"></input>
        <label>
          <input type= 'url' name='url'></input>
          <button>salvar</button>
        </label>
      </form>
    </div>
  )
}

export default Conteudo
