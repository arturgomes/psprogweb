import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/ponteiromouse">PonteiroMouse</Link>
        </li>
        <li>
          <Link to="/contador">Contador</Link>
        </li>
        <li>
          <Link to="/pessoas">Pessoas</Link>
        </li>
        <li>
          <Link to="/rgb">RGB</Link>
        </li>
        <li>
          <Link to="/tarefas">Tarefas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
