import PropTypes from 'prop-types';
import { Titulo } from '../Titulo';

function CardRecomenda({ titulo, subtitulo, descricao, img }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-4 md:p-10 max-w-3xl mx-auto">
      <div className="md:mr-8">
        <Titulo cor="text-orange-500" tamanhoFonte="text-base" alinhamento="text-left">
          {titulo}
        </Titulo>

        <h4 className="text-blue-800 font-bold text-lg mt-2 md:mt-6">{subtitulo}</h4>

        <p className="max-w-md mt-2 md:mt-4">{descricao}</p>

        <button className="bg-orange-500 text-white px-4 py-2 mt-4 font-black">
          Saiba mais
        </button>
      </div>

      <div className="md:ml-8 mt-4 md:mt-0">
        <img src={img} className="w-24 md:w-40" alt={titulo} />
      </div>
    </div>
  );
}

CardRecomenda.propTypes = {
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default CardRecomenda;
