import  categoriasJuego  from "./categoriasJuego.js";
const listaJuego = JSON.parse(localStorage.getItem("juegosKey")) || [];

const main = document.querySelector('main')

window.redireccionar = (idJuego)=>{

    window.location.href= "/pages/detalle.html?juegoId=" +idJuego
} 
    
const sectionFiltro = document.querySelector('.filtrarPorGenero')
console.log(listaJuego)
export function colocarJuegos (){
    let cards = ``
    for(let i=0;i<listaJuego.length;i++){
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
      </div>`

    }
    return cards
}
export function rellenarSection(){
    sectionFiltro.innerHTML=`
    <div class="container mt-5">
    <h2>Catálogo de Juegos</h2>
    <hr>
    <div class="d-flex justify-content-between align-items-center mb-4">
    <div class="btn-group">
    <button
    class="btn btn-outline-secondary dropdown-toggle"
    type="button"
    id="categoryFilter"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    >
    <i class="bi bi-funnel"></i> Filtrar por categoría
    </button>
    <ul class="dropdown-menu" aria-labelledby="categoryFilter">
    <li><button class="dropdown-item" id="botonTodos">Todos</button></li>
    <li><button class="dropdown-item" id="botonAccion">Acción</button></li>
    <li><button class="dropdown-item" id="botonRPG">RPG</button></li>
    <li><button class="dropdown-item" id="botonPuzzle">Puzzle</button></li>
    <li><button class="dropdown-item" id="botonBattleRoyale">Battle Royale</button></li>
    <li><button class="dropdown-item" id="botonCarreras">Carreras</button></li>
    <li><button class="dropdown-item" id="BotonShooter">Shooter</button></li>
    </ul>
    </div>
    </div>
    
    <div class="row">
    ${colocarJuegos()}
    </div>
    </div>
    `
    main.appendChild(sectionFiltro)
}

document.addEventListener('DOMContentLoaded', function() {
    const botonTodos = document.querySelector('#botonTodos');
    const botonAccion = document.querySelector('#botonAccion');
    const botonRPG = document.querySelector('#botonRPG');
    const botonPuzzle = document.querySelector('#botonPuzzle');
    const botonCarreras = document.querySelector('#botonCarreras');
    const botonBattleRoyale = document.querySelector('#botonTodos');
    const botonShooter = document.querySelector('#botonShooter');

    botonTodos.addEventListener('click', (e)=>{
        filtrar(botonTodos)
    });
    botonRPG.addEventListener('click', (e)=>{
        filtrar(botonRPG)
    });
    botonAccion.addEventListener('click', (e)=>{
        filtrar(botonAccion)
    });
    botonShooter.addEventListener('click', (e)=>{
        filtrar(botonShooter)
    });
    botonCarreras.addEventListener('click', (e)=>{
        filtrar(botonCarreras)
    });
    botonPuzzle.addEventListener('click', (e)=>{
        filtrar(botonPuzzle)
    });
    botonBattleRoyale.addEventListener('click', (e)=>{
        filtrar(botonBattleRoyale)
    });
    
});

function filtrar(boton) {
    console.log("hola");
}