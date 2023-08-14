import { useState, useEffect, createContext } from "react";
import jwt_decode from "jwt-decode";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    //REVISAR SI HAY USUARIO EN LOCAL STORAGE
    try {
      const loginUser = async () => {
        const token = localStorage.getItem("login");

        if (!token) {
          setCargando(true)
          return;
        }

        var decoded = jwt_decode(token);

        //SI HAY TOKEN, GUARDAR LOGIN EN CONTEXT Y REDIRECCIONAR A MENU
        setAuth(decoded);
      };
      loginUser();
    } catch (error) {
      console.log(error);
      setAuth({});
    } finally {
      setCargando(false);
    }
  }, [cargando]);

  return (
    <AuthContext.Provider value={{ setAuth, auth, setCargando }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
