import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Headers = () => {
  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const cerrarSesion = async () => {
    //Borramos La session de localStorage
    localStorage.removeItem("login");

    //BORRAMOS INFO DE PROVIDER
    setAuth({});
  };

  return (
    <>
      <header className=" border-b bg-gray-50">
        <div className="md:flex md:justify-between items-center">
          <Link onClick={() => navigate("/")}>
            <img src={logo} width={80} />
          </Link>

          <input
            type="search"
            placeholder="Buscar Persona"
            className="rounded-lg lg:-96  block p-2 border"
          />

          {!auth.id ? (
            <nav className="p-3 ml-5 flex justify-end ">
              <p className="text-2xl mr-5 p-2 bg-sky-600 rounded-md uppercase text-white">
                {location.pathname === "/login" ? (
                  <Link
                    className={`${
                      location.pathname === "/register"
                        ? "bg-sky-600"
                        : "bg-sky-600"
                    } `}
                    to="/register"
                  >
                    Registro
                  </Link>
                ) : (
                  <Link
                    className={`${
                      location.pathname === "/login"
                        ? "bg-sky-600"
                        : "bg-sky-600"
                    } `}
                    to="/login"
                  >
                    iniciar sesion
                  </Link>
                )}
              </p>
            </nav>
          ) : (
            <>
              <nav className="flex justify-end text-center items-center gap-10">
                <Link to="/perfil">
                  <p>{auth.name}</p>
                </Link>
                <button onClick={cerrarSesion}>
                  <p className="text-2xl mr-5 p-2 bg-red-600 rounded-md uppercase text-white">
                    Cerrar Sesion
                  </p>
                </button>
              </nav>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Headers;
