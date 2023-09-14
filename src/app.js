import fetchData from "./api.js";
import { displayModal } from "./modal.js";
import { showLoading } from "./loading.js";

let opcion = "people";
let data;
const people = document.getElementById("btnPeople");
const planets = document.getElementById("btnPlanets");
const starships = document.getElementById("btnStarships");
const mostrarMas = document.getElementById("mostrarMas");
const seleccionado = document.getElementById("seleccionado");

people.addEventListener("click", () => changeOption("people"));
planets.addEventListener("click", () => changeOption("planets"));
starships.addEventListener("click", () => changeOption("starships"));

// Define la función showDetails que se llamará cuando se haga clic en el botón
mostrarMas.addEventListener("click", () => {
    if (data) {
      displayModal(JSON.stringify(data), opcion);
    }
})

async function changeOption(newOption) {
  opcion = newOption;
  seleccionado.innerHTML = `Seleccionado: ${opcion}`;
  const searchValue = document.getElementById("search").value;
  showLoading();
  data = await fetchData(opcion, searchValue);
  // Mostrar el modal después de obtener los datos
}
