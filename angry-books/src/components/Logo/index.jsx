import logo from '../../images/logo.svg'

function Logo() {
  return (
    <div className="flex text-4xl">
      <img 
        src={logo}
        alt="logo"
        className="mr-4"  
      />

      <p className="font-bold">
        <strong>Angry</strong>Books
      </p>
    </div>
  )
}

export default Logo