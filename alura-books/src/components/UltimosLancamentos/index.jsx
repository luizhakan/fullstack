import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../images/livro2.png'  
import { v4 as uuidv4 } from 'uuid';

function UltimosLancamentos() {

  return (
    <section className="bg-gray-200 p-20">
      
      <Titulo 
        cor="text-orange-500"
        tamanhoFonte="text-6xl"  
      >
        ÚLTIMOS LANÇAMENTOS
      </Titulo>

      <div className="mt-12 flex justify-center cursor-pointer">
        {livros.map(livro => (
          <img 
            key={uuidv4()}
            src={livro.src} 
          />
        ))}
      </div>

      <CardRecomenda
        titulo="Talvez você se interesse por"
        subtitulo="Angular 11"
        descricao="Construindo uma aplicação com a plataforma Google"
        img={imagemLivro}
      />

    </section>
  )
}

export default UltimosLancamentos