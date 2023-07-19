import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
/*
Arquoivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {
  /*Todo componente deve retornar um HTML entre ()*/
  return (
    /*O react substitui classname por claas porque é palavra executada no js*/
    <>
    <img src = 'logo.png' alt='logotipo'></img>
    <Cabecalho titulo = "Fav.io" subtitulo="O melhor gerenciador de favoritos da Internet Brasileira!"/>
    <Rodape/>
    </>
  );
}

export default App;
