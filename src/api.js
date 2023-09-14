import { hideLoading } from "./loading.js";
//vamos a agregar al html el nombre
const searchSimple = document.getElementById("searchSimple");
export default async function fetchData(opcion, searchValue) {
  const apiUrl = `https://swapi.dev/api/${opcion}/`;
  const url = `${apiUrl}${searchValue}/`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 404) {
            hideLoading();
            searchSimple.innerHTML = `error 404 not found`;
        // handle error 404
        return null; // Retorna null para indicar que no se encontraron resultados y poder manejarlo en el modal
      } else {
        throw new Error("No se pudo completar la solicitud.");
      }
    }
      const data = await response.json();
      hideLoading();
        searchSimple.innerHTML = `name: ${data.name}`;

    return data;
  } catch (error) {
      console.error("Se produjo un error:", error);
      hideLoading()
    throw error;
  }
}
