import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="header-nav">
      <NavLink to="/" end>Todas</NavLink>
      <NavLink to="/pendentes">Pendentes</NavLink>
      <NavLink to="/concluidas">Concluídas</NavLink>
    </nav>
  );
}

export default Header;