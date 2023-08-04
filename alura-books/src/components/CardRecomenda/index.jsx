import PropTypes from 'prop-types'
import { Titulo } from "../Titulo"

function CardRecomenda({
  titulo, 
  subtitulo, 
  descricao,
  img  
}) {

  return (
    <div className="flex items-center bg-white shadow-lg rounded-lg p-10 max-w-3xl mx-auto">

      <div>
        <Titulo  
          cor="text-orange-500"
          tamanhoFonte="text-base"
          alinhamento="text-left"
        >
          {titulo}
        </Titulo>

        <h4 className="text-blue-800 font-bold text-lg mt-6">{subtitulo}</h4>

        <p className="max-w-md">{descricao}</p>
      </div>

      <div>
        <img 
          src={img}
          className="w-40" 
        />
        
        <button className="bg-orange-500 text-white px-4 py-2 mt-4 font-black">
          Saiba mais
        </button>
      </div>

    </div>
  )
}

CardRecomenda.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default CardRecomenda