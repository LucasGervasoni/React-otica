import '../styles/globals.css'; // Substitua pelo caminho correto do seu arquivo CSS

import Conteudo from '@/componentes/Conteudo';
import Topo from '@/componentes/Topo';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      
      <Topo />
      <Conteudo />
      
    </>
  );
}

export default App;