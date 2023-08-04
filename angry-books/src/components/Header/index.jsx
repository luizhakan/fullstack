import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';

function Header() {
    return (
        <header className="bg-white flex flex-wrap justify-center p-4 md:p-8">
            <div className="w-full md:w-auto md:mr-auto mb-4 md:mb-0">
                {/* O Logo será centralizado em telas menores (w-full) e alinhado à esquerda em telas maiores (md:w-auto md:mr-auto) */}
                <Logo />
            </div>

            <div className="w-full md:w-auto md:mx-auto mb-4 md:mb-0">
                {/* As opções do Header serão centralizadas em telas menores (w-full) e alinhadas ao centro em telas maiores (md:w-auto md:mx-auto) */}
                <OpcoesHeader />
            </div>

            <div className="w-full md:w-auto">
                {/* Os ícones do Header serão centralizados em telas menores (w-full) e alinhados à direita em telas maiores (md:w-auto) */}
                <IconesHeader />
            </div>
        </header>
    );
}

export default Header;
