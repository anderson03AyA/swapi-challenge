let opcion = "planets";

const people = document.getElementById("btnPeople");
const planets = document.getElementById("btnPlanets");
const starships = document.getElementById("btnStarships");
const paint = document.getElementById("app");
const seleccionado = document.getElementById("seleccionado");

const search = document.getElementById("search");
let apiUrl = `https://swapi.dev/api/${opcion}/${search.value}/`;

function fnpeople() {
  opcion = "people";
  seleccionado.innerHTML = `seleccionado: ${opcion}`;
  apiUrl = `https://swapi.dev/api/${opcion}/${search.value}/`;
  api();
}

function fnplanets() {
  opcion = "planets";
  seleccionado.innerHTML = `seleccionado: ${opcion}`;
  apiUrl = `https://swapi.dev/api/${opcion}/${search.value}/`;
  api();
}
function fnStarships() {
  opcion = "starships";
  seleccionado.innerHTML = `seleccionado: ${opcion}`;
  apiUrl = `https://swapi.dev/api/${opcion}/${search.value}/`;
  api();
}

// Hacer una solicitud GET a la API
function api() {
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudo completar la solicitud.");
      }
      return response.json();
    })
    .then((data) => {
      // Manejar los datos de la respuesta aquí
      console.log(data);
      console.log(data.name);
      paint.innerHTML = `${data.name}`;
    })
    .catch((error) => {
      console.error("Se produjo un error:", error);

      paint.innerHTML = `${error}`;
    });
}
