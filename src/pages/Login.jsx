import { Navigate } from "react-router-dom";
import FormularioLogin from "../components/FormularioLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { auth } = useAuth();

  return (
    
   <>{auth.id ? <Navigate to="/perfil" /> : <FormularioLogin />}</>

  );
};

export default Login;
