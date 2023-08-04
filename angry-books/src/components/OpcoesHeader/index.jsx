import { v4 as uuidv4 } from 'uuid';

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OpcoesHeader() {

  return (
    <ul className="flex">

      {textoOpcoes.map(texto => (
        <li
          key={uuidv4()}
          className="text-base flex items-center justify-center px-2 cursor-pointer min-w-48"
        >
          <p>{texto}</p>
        </li>
      ))}

    </ul>
  )
}

export default OpcoesHeader