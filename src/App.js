
import './App.css';
import Cabecalho from './componentes/Cabecalho'
import Rodape from './componentes/Rodape'
import Tela1 from './componentes/Tela1';
import Tela2 from './componentes/Tela2';

/*
Arquoivo App JSX
Componente funcional = Porque ele é uma função
*/
function App() {
  /*Todo componente deve retornar um HTML entre ()*/
  return (
    /*O react substitui classname por claas porque é palavra executada no js*/
    <>
    
    <Cabecalho logo = 'favorito.png' titulo = "GerenceFav"/>
    <Tela1/>
    <Tela2/>
    <Rodape insta = 'instagram.png' face = 'facebook.png' twitter = 'twitter.png'/>
    
    </>
  );
}

export default App;
