import PropTypes from 'prop-types'

function Input({ placeholder }) {
    return (
        <input
            className="border text-black border-white bg-transparent px-4 py-2 rounded-full w-1/3 text-lg mb-12"
            placeholder={placeholder}
        />
    )
}

Input.propTypes = {
    placeholder: PropTypes.string
}

Input.defaultProps = {
    placeholder: ''
}

export default Input