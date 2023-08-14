import { useState } from "react";
import { registerApi } from "../API/Events";
import Error from "./Error";

const FormularioRegistro = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [nick, setNick] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false);
    if (!name || !surname || !nick || !email || !password) {
      setError(true);
      return;
    }
    const res = await registerApi(name, surname, nick, email, password);
    setResponse(res);
    console.log(res);

    setName("")
    setSurname("")
    setNick("")
    setEmail("")
    setPassword("")
    
  };

  return (
    <>
      <form onClick={handleSubmit}>
        <div className="mx-auto w-1/2 justify-center items-center ">
          {response && response.status}
          <br />
          {response && response.mensaje}

          <legend className="font-black text-5xl text-center mb-10">
            Registrarse
          </legend>
          {error && <Error mensaje="Todos los campos son obligatorios" />}
          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              Nombre:
            </label>
            <input
              id="tarea"
              type="name"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
              placeholder="ingresa tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              apellido:
            </label>
            <input
              id="tarea"
              type="surname"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
              placeholder="ingresa tu apellido"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              nick:
            </label>
            <input
              id="tarea"
              type="nick"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
              placeholder="ingresa tu nick"
              value={nick}
              onChange={(e) => setNick(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              Email:
            </label>
            <input
              id="tarea"
              type="email"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
              placeholder="ingresa tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="tarea"
              className="block font-bold text-gray-700 uppercase"
            >
              password:
            </label>
            <input
              id="tarea"
              type="password"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
              placeholder="ingresa tu password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="submit"
              className="bg-blue-500 w-full mt-5 text-white uppercase font-bold p-3 hover:bg-blue-600 cursor-pointer transition-colors"
              value={"Registrarse "}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default FormularioRegistro;
