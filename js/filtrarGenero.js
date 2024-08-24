import categoriasJuego from "./categoriasJuego.js";
const listaJuego = JSON.parse(localStorage.getItem("juegosKey")) || [];

const main = document.querySelector("main");

window.redireccionar = (idJuego) => {
  window.location.href = "../pages/detalle.html?juegoId=" + idJuego;
};

const sectionFiltro = document.querySelector("#rellenarSection");
export function colocarJuegos(categoria = "Todos") {
  let cards = ``;
  if (categoria === "Todos" || categoria == null || categoria == undefined) {
    for (let i = 0; i < listaJuego.length; i++) {
      cards += `
      <div class="col-12 col-md-4 col-lg-3 my-2">
        <div class="card cardJuegosCatalogo h-100 ">
        <div class="card-body">
        <div onclick = 'redireccionar("${listaJuego[i].id}")'>
            <div class="col text-center">
            <div class ="d-flex justify-content-center">
            <div id="contenedorImagenesCatalogo">
            
            <img
              src="${listaJuego[i].foto} "
              class="h-100 w-100 img-fluid rounded-1 "
              alt="foto del juego ${listaJuego[i].nombre} "
            />
            </div>
            </div>
            </div>
            <h5 class="card-title mt-1">${listaJuego[i].nombre} </h5>
            <p class="card-text text-secondary-emphasis">
              ${listaJuego[i].descripcion}
            </p>
          </div>
          </div>
          <div class="card-footer">
            ${categoriasJuego(listaJuego[i])}
          </div>
        </div>
      </div>`;
    }
  } else {
    for (let i = 0; i < listaJuego.length; i++) {
      for (let j = 0; j < listaJuego[i].categoria.length; j++) {
        if (((listaJuego[i].categoria[j]).replace(` `, '') === categoria)) {
          cards += `<div class="col-12 col-md-4 col-lg-3 my-2">
            <div class="card cardJuegosCatalogo h-100 ">
            <div class="card-body">
            <div onclick = 'redireccionar("${listaJuego[i].id}")'>
                <div class="col text-center">
                <div class ="d-flex justify-content-center">
                <div id="contenedorImagenesCatalogo">
                
                <img
                  src="${listaJuego[i].foto} "
                  class="h-100 w-100 img-fluid rounded-1 "
                  alt="foto del juego ${listaJuego[i].nombre} "
                />
                </div>
                </div>
                </div>
                <h5 class="card-title mt-1">${listaJuego[i].nombre} </h5>
                <p class="card-text text-secondary-emphasis">
                  ${listaJuego[i].descripcion}
                </p>
              </div>
              </div>
              <div class="card-footer">
                ${categoriasJuego(listaJuego[i])}
              </div>
            </div>
          </div>`;
        }
      }
    }
  }

  return cards;
}
export function rellenarSection(categoria) {
  sectionFiltro.innerHTML = `
    ${colocarJuegos(categoria)}
    </div>
    
    `;
}

const botonFiltrado = document.querySelector(".btn-outline-secondary");
document.addEventListener("DOMContentLoaded", function () {
  const Todos = document.querySelector("#Todos");
  const Accion = document.querySelector("#Accion");
  const RPG = document.querySelector("#RPG");
  const Puzzle = document.querySelector("#Puzzle");
  const Carreras = document.querySelector("#Carreras");
  const BattleRoyale = document.querySelector("#BattleRoyale");
  const Shooter = document.querySelector("#Shooter");
  Todos.addEventListener("click", (e) => {
    rellenarSection(Todos.id);
    botonFiltrado.innerHTML = Todos.id;
  });
  RPG.addEventListener("click", (e) => {
    rellenarSection(RPG.id);
    botonFiltrado.innerHTML = RPG.id;
  });
  Accion.addEventListener("click", (e) => {
    rellenarSection(Accion.id);
    botonFiltrado.innerHTML = Accion.id;
  });
  Shooter.addEventListener("click", (e) => {
    rellenarSection(Shooter.id);
    botonFiltrado.innerHTML = Shooter.id;
  });
  Carreras.addEventListener("click", (e) => {
    rellenarSection(Carreras.id);
    botonFiltrado.innerHTML = Carreras.id;
  });
  Puzzle.addEventListener("click", (e) => {
    rellenarSection(Puzzle.id);
    botonFiltrado.innerHTML = Puzzle.id;
  });
  BattleRoyale.addEventListener("click", (e) => {
    rellenarSection(BattleRoyale.id);
    botonFiltrado.innerHTML = BattleRoyale.id;
  });
});
