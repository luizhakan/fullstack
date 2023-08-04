import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import { v4 as uuidv4 } from 'uuid';

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul className="flex items-center">
      {icones.map((icone) => (
        <li key={uuidv4()} className="mr-8 md:mr-16 w-6">
          <img src={icone} />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
