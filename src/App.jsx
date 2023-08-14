import { useLoaderData } from "react-router-dom";
import { precioDolar } from "./API/Events";


import { Navigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

export async function loader(){

  // MULTIPLES CONSULTAS SIMULTANEAS

const [precio1, precio2] = await Promise.all([
  precioDolar(),
  precioDolar()
])

const data = {
  precio1, precio2
}

  return data
}

function App() {

  const { auth } = useAuth();

  const datos = useLoaderData()


  return (
    <>

    {auth.id ?  <div>
      <>
      {datos.precio1.base}
      <br/>

     {datos.precio1["rates"]["MXN"]}
      </>
    </div> :  <Navigate to='/login'/>}

    </>
  )
}

export default App;
