const mostrarMas = document.getElementById("mostrarMas");
//mostrar el loading
export function showLoading() {
  const loadingElement = document.getElementById("loading");
    if (loadingElement) {
        mostrarMas.style.display = "block";
    loadingElement.style.display = "block";
  }
}

//ocultar el loading
export function hideLoading() {
  const loadingElement = document.getElementById("loading");
  if (loadingElement) {
    loadingElement.style.display = "none";
  }
}
