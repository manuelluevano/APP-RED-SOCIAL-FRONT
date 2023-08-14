import { Navigate } from "react-router-dom";
import FormularioRegistro from "../components/FormularioRegistro";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const { auth } = useAuth();

  return <>{auth.id ? <Navigate to="/perfil" /> : <FormularioRegistro />}</>;
};

export default Register;
