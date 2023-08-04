import { useState, useRef } from 'react';
import { livros } from './dadosPesquisa';
import { v4 as uuidv4 } from 'uuid';

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const inputRef = useRef(null);
  const [showPlaceholder, setShowPlaceholder] = useState(false);

  const handleInputChange = (evento) => {
    const textoDigitado = evento.target.value ? evento.target.value : 'Digite seu livro';
    const resultadoPesquisa = livros.filter(
      (livro) => livro.nome.toLowerCase().includes(textoDigitado)
    );
    setLivrosPesquisados(resultadoPesquisa);
    setShowPlaceholder(false);
  };

  const handleInputBlur = () => {
    setShowPlaceholder(true);
    setTimeout(() => {
      setShowPlaceholder(false);
    }, 4000);
  };

  const handleInputClick = () => {
    inputRef.current.value = '';
    setShowPlaceholder(false);
  };

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white text-center py-8 md:py-20 px-4 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-bold">Já sabe por onde começar?</h2>

      <h3 className="text-base md:text-lg font-medium mb-6 md:mb-10">
        Encontre seu livro em nossa estante.
      </h3>

      <input
        ref={inputRef}
        className="border text-black border-gray-300 px-3 py-2 rounded-lg w-full md:w-96"
        placeholder={showPlaceholder ? 'Digite seu livro' : ''}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onClick={handleInputClick}
      />

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-8">
        {livrosPesquisados.map((livro) => (
          <div
            key={uuidv4()}
            className="flex justify-center items-center mb-8 cursor-pointer hover:border hover:border-white"
          >
            <img src={livro.src} className="w-24 md:w-40" alt={livro.nome} />

            <p className="ml-2 md:ml-4 w-24 md:w-64">{livro.nome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pesquisa;
