import { useState, useRef } from 'react'
import { livros } from './dadosPesquisa'
import { v4 as uuidv4 } from 'uuid';

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const inputRef = useRef(null)
  const [showPlaceholder, setShowPlaceholder] = useState(false)

  const handleInputChange = (evento) => {
    const textoDigitado = evento.target.value ? evento.target.value : 'Digite seu livro'
    const resultadoPesquisa = livros.filter(
      livro => livro.nome.toLowerCase().includes(textoDigitado)
    )
    setLivrosPesquisados(resultadoPesquisa)
    setShowPlaceholder(false)
  }

  const handleInputBlur = () => {
    setShowPlaceholder(true)
    setTimeout(() => {
      setShowPlaceholder(false)
    }, 4000)
  }

  const handleInputClick = () => {
    inputRef.current.value = ''
    setShowPlaceholder(false)
  }

  return (
    <section className="bg-gradient-to-r from-blue-700 to-blue-400 text-white text-center py-20 px-4 lg:px-0">
      <h2 className="text-3xl font-bold">Já sabe por onde começar?</h2>

      <h3 className="text-lg font-medium mb-10">Encontre seu livro em nossa estante.</h3>

      <input
        ref={inputRef}
        className="border text-black border-gray-300 px-3 py-2 rounded-lg"
        placeholder={showPlaceholder ? "Digite seu livro" : ""}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onClick={handleInputClick}
      />

      {livrosPesquisados.map(livro => (
        <div
          key={uuidv4()}
          className="flex justify-center items-center mb-8 cursor-pointer hover:border hover:border-white"
        >
          <img
            src={livro.src}
            className="w-40"
          />

          <p className="ml-4 w-64">{livro.nome}</p>
        </div>
      ))}
    </section>
  )
}

export default Pesquisa
