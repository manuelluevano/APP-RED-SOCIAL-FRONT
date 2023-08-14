import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Perfil = () => {
  const { auth, cargando } = useAuth();

  console.log(auth);

  if (cargando) return "Cargando...";
  return (
    <>
      {auth.id ? (
        <div>
          <>
            <div className="container">
              <div className="block">
                <p>Correo: {auth.email}</p>
                <p >Nombre: {auth.name}</p>
                <p>Nick {auth.nick}</p>
              </div>
              <div>
                <img src={auth.imagen} width={200} />
              </div>
            </div>
          </>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Perfil;
