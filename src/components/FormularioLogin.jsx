import {  useState } from "react";
import { loginApi } from "../API/Events";
import Error from "./Error";
import useAuth from "../hooks/useAuth";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";

const FormularioLogin = () => {
  //CONTEXT
  const { setAuth, setCargando } = useAuth();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const spinner = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSubmit = async () => {
    setError(false);
    if (!email || !password) {
      setError(true);
      return;
    }
    spinner();

    const res = await loginApi(email, password);
    setResponse(res);

    //GUARDAR LOGIN EN CONTEXT
    setAuth(res);
    setCargando(true)
    //REVISAR SI HAY CHECK PARA GUARDAR EN LOCALSTORAGE
    // if (sesionActiva) {
    localStorage.setItem("login", JSON.stringify(res.token));
    // }

    // REVISAR SI HAY DATOS EN LOCAL STORE
    // if(localStorage.length > 0){
    //   console.log("Hya datos");
    // }
  };

  //SESION ACTIVA
  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setSesionActiva(!sesionActiva);
  // };

  return (
    <>
      <div>
        <div className="flex justify-center items-center  ">
          <div className="w-16 h-16">
            <ClipLoader
              color={"D0021B"}
              loading={loading}
              size={80}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>

        <form>
          <div className="mx-auto w-1/2 justify-center items-center mt-10">
            {response ? (<div className="bg-green-800 text-white text-center p-3 uppercase font-bold mb-8 rounded-md">
              {response && response.mensaje}
            </div>) : ""}
            

            <legend className="font-black text-5xl text-center mb-10">
              Iniciar Sesion
            </legend>
            {error && <Error mensaje="Todos los campos son obligatorios" />}

            <div className="mb-5">
              <label
                className="block font-bold text-gray-700 uppercase"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
                placeholder="ingresa tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                className="block font-bold text-gray-700 uppercase"
                htmlFor="password"
              >
                password:
              </label>
              <input
                id="password"
                type="password"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
                placeholder="ingresa tu password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="items-center flex justify-evenly">
              <label className="">
                Guardar Sesion
              </label>
              <input
                type="checkbox"
                className="ml-3"
                checked={sesionActiva}
                onChange={handleChange}
  />*/}
            
              <div>
              <p className="text-2xl text-gray-700 ">
                <Link
                  className={`${
                    location.pathname === "/register"
                      ? "text-blue-600"
                      : "text-gray-700"
                  } `}
                  to="/register"
                >
                  Registrarte
                </Link>
              </p>
            </div> 
            <button
              type="submit"
              className={
                loading
                  ? "bg-sky-300 text-white p-3 flex w-full mt-5 justify-center"
                  : "bg-sky-600 text-white p-3 flex w-full mt-5 justify-center"
              }
              value={"Login"}
              disabled={loading}
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormularioLogin;
