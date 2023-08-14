export async function loginApi(email, password) {
  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const url = "https://fancy-jersey-elk.cyclic.app/api/user/login";

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}

export async function registerApi(name, surname, nick, email, password) {
  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        name, 
        surname,
        nick,
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const url = "https://fancy-jersey-elk.cyclic.app/api/user/register";

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}

//PRECIO DOLAR
export async function precioDolar() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const url = "https://api.exchangerate.host/latest?base=USD&symbols=MXN";

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}


// MULTIPLES CONSULTAS SIMULTANEAS

// cont [guitarras, post] = await Promise.all([
//   getGuitarras(),
//   getPost
// ])
