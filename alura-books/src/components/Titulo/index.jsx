import PropTypes from 'prop-types'
export function Titulo({
    children,
    cor = 'text-black',
    tamanhoFonte = 'text-xl',
    alinhamento = 'text-center'
}) {

    return (
        <h2
            className={`
          bg-white
          py-12
          ${cor}
          ${tamanhoFonte} 
          ${alinhamento}
        `}
        >
            {children}
        </h2>
    )
}

Titulo.propTypes = {
    children: PropTypes.node.isRequired,
    cor: PropTypes.string,
    tamanhoFonte: PropTypes.string,
    alinhamento: PropTypes.string
}

Titulo.defaultProps = {
    cor: 'text-black',
    tamanhoFonte: 'text-xl',
    alinhamento: 'text-center'
}