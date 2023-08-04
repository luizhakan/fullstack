import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'

function Header() {

    return (
        <header className="bg-white flex justify-center p-8">
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header