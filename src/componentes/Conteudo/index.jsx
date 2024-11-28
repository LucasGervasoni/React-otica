import SecaoCapa from '@/componentes/SecaoCapa';
import SecaoSobre from '@/componentes/SecaoSobre';
import SecaoProdutos from '@/componentes/SecaoProdutos';
import SecaoContato from '@/componentes/SecaoContato';

export default function Conteudo() {
  return (
    <main>
      <SecaoCapa />
      <SecaoProdutos />
      <SecaoSobre />
      <SecaoContato />
    </main>
  )
}