import logo from '../../images/logo.svg';

function Logo() {
  return (
    <div className="flex items-center text-xl md:text-4xl">
      <img src={logo} alt="logo" className="w-10 h-10 md:w-12 md:h-12 mr-2 md:mr-4" />

      <p className="font-bold">
        <strong>Angry</strong>Books
      </p>
    </div>
  );
}

export default Logo;
