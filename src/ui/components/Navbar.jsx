import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";
import { DocenteNavbar } from './DocenteNavbar';
import { StudentNavbar } from './StudentNavbar';

export const Navbar = () => {

  //* Extrae el usuario almacenado
  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate();

  //* Cierra sesion, llama la funcion logout del AuthProvider
  const onLogout = () => {
    logout();

    navigate('/login', { replace: true });
  };

  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">

      <ul className="nav col-12 col-md-auto mb-2 mx-4 justify-content-center mb-0">
        {
          (user?.userType === 1) ? <StudentNavbar /> : <DocenteNavbar />
        }
      </ul>



      <Link
        className="text-center col-3 mb-2 mb-md-0 text-dark text-decoration-none mx-4"
        to="/"
      >
        <span className="fw-bold fs-5">Bienvenido</span>
      </Link>


      <div className="text-end mx-4">
        <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">

          <IconContext.Provider value={{ color: "light", size: "1.3em" }}>
            <AiOutlineUser />
          </IconContext.Provider>

          <span className="ms-1">
            {`${user?.given_name} ${user?.aPaterno} ${user?.aMaterno}`}
          </span>
        </button>
        <ul className="dropdown-menu dropdown-menu-light">
          <li><a className="dropdown-item text-center" href="#" onClick={() => onLogout()}>
            <IconContext.Provider value={{ color: "light", size: "1.3em" }}>
              <AiOutlineLogout />
            </IconContext.Provider>
            <span className="ms-2">logout</span></a></li>
        </ul>
      </div>
    </header>
  )
}