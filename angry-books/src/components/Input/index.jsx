import PropTypes from 'prop-types';

function Input({ placeholder }) {
    return (
        <input
            className="border text-black border-white bg-transparent px-4 py-2 rounded-full w-full md:w-1/3 text-base md:text-lg mb-8 md:mb-12"
            placeholder={placeholder}
        />
    );
}

Input.propTypes = {
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    placeholder: '',
};

export default Input;
