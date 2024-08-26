import categoriasJuego from "./categoriasJuego.js";
const listaJuegos = JSON.parse(localStorage.getItem("juegosKey")) || [];

function mostrarJuegos(juegos) {
  const rellenarSection = document.querySelector("#rellenarSection");
  rellenarSection.innerHTML = '';

  if (juegos.length > 0) {
      juegos.forEach(juego => {
          const card = `
        <div class="col-12 col-md-4 col-lg-3 my-2">
          <div class="card cardJuegosCatalogo h-100">
            <div class="card-body">
              <div onclick='redireccionar("${juego.id}")'>
                <div class="col text-center">
                  <div class="d-flex justify-content-center">
                    <div id="contenedorImagenesCatalogo">
                      <img src="${juego.foto}" class="h-100 w-100 img-fluid rounded-1" alt="foto del juego ${juego.nombre}">
                    </div>
                  </div>
                </div>
                <h5 class="card-title mt-1">${juego.nombre}</h5>
                <p class="card-text text-secondary-emphasis">${juego.descripcion}</p>
              </div>
            </div>
            <div class="card-footer">
              ${categoriasJuego(juego)}
            </div>
          </div>
        </div>`;
          rellenarSection.insertAdjacentHTML('beforeend', card);
      });
  } else {
      rellenarSection.innerHTML = '<p class="text-center">No se encontraron juegos.</p>';
  }
}

export default function inicializarBusqueda() {
  const formBuscar = document.querySelector(".formBuscar");
  formBuscar.addEventListener('submit', function (event) {
      event.preventDefault();
      const inputBuscar = document.querySelector(".inputBuscar").value.trim();
      const juegosFiltrados = listaJuegos.filter(juego =>
          juego.nombre.toLowerCase().includes(inputBuscar.toLowerCase())
      );
      mostrarJuegos(juegosFiltrados);
  });

  document.querySelector("#botonLimpiar").addEventListener('click', function () {
      document.querySelector(".inputBuscar").value = '';
      mostrarJuegos(listaJuegos);
  });
}

