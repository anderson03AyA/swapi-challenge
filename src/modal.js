export function displayModal(data, opcion) {
  const modal = document.getElementById("myModal");
  const modalContent = document.getElementById("modalContent");
  const closeModal = document.getElementById("closeModal");
  data = JSON.parse(data);

  // Función para generar los detalles en formato de lista
  function generateDetailsList(data) {
    const detailsList = document.createElement("ul");

    for (const key in data) {
      if (Array.isArray(data[key])) {
        // Si el atributo es un array, lo unimos con comas
        const value = data[key].join(", ");
        addListItem(detailsList, key, value);
      } else {
        addListItem(detailsList, key, data[key]);
      }
    }

    return detailsList;
  }

  // agregar un elemento de lista a la lista de detalles
  function addListItem(list, key, value) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    list.appendChild(listItem);
  }

  if (data) {
    let detailsList;

    if (opcion === "people") {
      detailsList = generateDetailsList(data);
    } else if (opcion === "planets") {
      // Genera los detalles específicos para la opción "planets"
      detailsList = generatePlanetDetails(data);
    } else if (opcion === "starships") {
      // Genera los detalles específicos para la opción "starships"
      detailsList = generateStarshipDetails(data);
    }

    modalContent.innerHTML = ""; // Limpia el contenido actual
    modalContent.appendChild(detailsList); // Agrega la lista de detalles
  } else {
    modalContent.innerHTML = "error 404 ";
  }

  modal.style.display = "block";

  closeModal.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// planeta
function generatePlanetDetails(data) {
  const detailsList = document.createElement("ul");

  addListItem(detailsList, "Name", data.name);

  addListItem(detailsList, "Diameter", data.diameter);

  addListItem(detailsList, "Climate", data.climate);

  addListItem(detailsList, "Terrain", data.terrain);

  addListItem(detailsList, "Films", data.films.join(", "));

  return detailsList;
}

// nave espacial
function generateStarshipDetails(data) {
  const detailsList = document.createElement("ul");

  addListItem(detailsList, "Name", data.name);

  addListItem(detailsList, "Model", data.model);

  addListItem(detailsList, "Manufacturer", data.manufacturer);

  addListItem(detailsList, "Passengers", data.passengers);

  addListItem(detailsList, "Films", data.films.join(", "));

  return detailsList;
}

function addListItem(list, key, value) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
  list.appendChild(listItem);
}
