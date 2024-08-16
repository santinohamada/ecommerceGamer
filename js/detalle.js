import Juego from "./classJuegos.js";
import { verificarPuntaje } from "./modalComentario.js";
const listaJuegos = [];
const listaUsuarios = [];
const usuario = {
  id: "123",
  nombre: "Santino",
  password: "asd",
  apellido: "Hamada",
  nombreUsuario: "MEOWSOTE",
  foto: "https://media-protected.taiga.io/user/f/9/1/c/ff5c5b3dbe7b936e4ffbb57869e15dd15dcb1dafb1b70f913093d1c15919/fotozoom.jpg.300x300_q85_crop.jpg?token=ZrvYug%3AkX0j5aN7YrzExuy9Rmg4oofeLfZXjbolZTt4BFrpUYcvq657wnTYnzI4d1MWYqe6Q4fQwJzIjDFwpJieXOksQA",
};
const usuario2 = {
  id: "123",
  nombre: "Octavio",
  password: "asd",
  apellido: "Haurigot",
  nombreUsuario: "MIAUCHITO",
  foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0KALVgvM2cx9CPNEOwE-j7xdUe_YyWIx2Q&s",
};
listaUsuarios.push(usuario);
listaUsuarios.push(usuario2);

localStorage.setItem("usuariosKey", JSON.stringify(listaUsuarios));

const guardarEnLocalStorage = () => {
  localStorage.setItem("juegosKey", JSON.stringify(listaJuegos));
};
let fecha = new Date();

// Formatear la fecha
let dia = fecha.getDate().toString().padStart(2, "0");
let mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0
let año = fecha.getFullYear();
let horas = fecha.getHours().toString().padStart(2, "0");
let minutos = fecha.getMinutes().toString().padStart(2, "0");

// Formato final
let fechaFormateada = `${dia}/${mes}/${año} ${horas}:${minutos}`;

const opinion1 = {
  id: "123",
  usuario: usuario,
  puntaje: 4.5,
  fecha: fechaFormateada,
  comentario:
    "interesante pero no mas interesante q el CULO DE LA MAMA DE HAURANE",
};
const opinion2 = {
  id: "123",
  usuario: usuario2,
  puntaje: 2,
  fecha: fechaFormateada,
  comentario: "ZARPAO EN ABUSO",
};
const JuegoNuevo = new Juego(
  undefined,
  "Need for Speed™ Hot Pursuit Remastered",
  69.99,
  true,
  90,
  "Siente la emoción de la persecución y la adrenalina de escapar sobre ruedas con los coches de mayor rendimiento del mundo en Need for Speed™ Hot Pursuit Remastered.",
  ["Accion", "Carreras"],
  [
    "Windows 10,64 Bit",
    "(AMD) Phenom II X4 965 o equivalente (Intel) Core i3-2120 o equivalente",
    "DirectX 11",
    "45 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "Phenom II X4 965 o equivalente (Intel) Core i3-2120 o equivalente",
    "DirectX 11",
    "45 GB",
  ],
  "Electronic Arts",
  "https://image.api.playstation.com/cdn/UP0006/CUSA01925_00/RxeNb9Ph1y2VhBGv5Ct0tuY6f5xC4t9f.png?w=440"
);
JuegoNuevo.opiniones.push(opinion1, opinion2);
listaJuegos.push(JuegoNuevo);
guardarEnLocalStorage();
// const paramId = new URLSearchParams(window.location.search).get("id")
const juegoSeleccionado = listaJuegos.find(
  (juego) => juego.id === JuegoNuevo.id
);

const div = document.createElement("div");
function precioJuego(juegoSeleccionado) {
  if (juegoSeleccionado.descuento) {
    return `<span class="badge fs-5 celesteClarito">-${
      juegoSeleccionado.cantidadDescuento
    }%</span>
            <span class="text-secondary"><s>${
              juegoSeleccionado.precio
            } ARS$</s></span>
            <span>${
              juegoSeleccionado.precio *
              (1 - juegoSeleccionado.cantidadDescuento / 100).toFixed(2)
            } ARS$ </span>`;
  } else {
    return `<span>${juegoSeleccionado.precio} ARS$</span>`;
  }
}
let categorias = "";
function categoriasJuego(juegoSeleccionado) {
  for (let i = 0; i < juegoSeleccionado.categoria.length; i++) {
    categorias += `<span class="badge text-bg-secondary me-1">${juegoSeleccionado.categoria[i]} </span>`;
  }
  return categorias;
}

const main = document.querySelector("main");
main.innerHTML = `
<h1 class="text-start">${juegoSeleccionado.nombre} </h1>
      <div class="d-flex">
        ${estrellasPromedio(juegoSeleccionado.opiniones)}
      </div>
      <section class="row mt-5">
        <article class="col-md-7 col-lg-6">
          <div>
            <img
              src="${juegoSeleccionado.foto}"
              alt="foto del juego"
              class="img-fluid w-100"
            />
          </div>
        </article>
        <div class="col-md-5 col-lg-6 mt-5 p-5">
        <div class="d-flex justify-content-evenly fs-5">
          ${(div.innerHTML = precioJuego(juegoSeleccionado))}
          </div>
          <div class="text-center my-3 d-flex flex-column">
            <a href="#" class="btn celesteClarito p-2">Comprar ahora</a>
            <a href="#" class="btn bg-body-tertiary my-3 p-2"
              >Añadir al carrito</a
            >
            <a href="#" class="btn bg-body-tertiary p-2">Añadir al carrito</a>
          </div>
        </div>
        <div class="mt-3">
          <p>
            ${juegoSeleccionado.descripcion}
          </p>
        </div>
        <section>
          <h4 class="text-body-tertiary">Categoria</h4>
          <div class="d-flex">
            ${categoriasJuego(juegoSeleccionado)}
          </div>
        </section>
        <article class="row mt-3">
          <h2 class="my-3 text-center">Requisitos del juego</h2>
          <div class="col-6">
            <h3>Mínimos</h3>
            <p>
              <strong>Versión del sistema operativo:</strong> ${
                juegoSeleccionado.requisitosMinimos[0]
              }
            </p>
            <p>
              <strong>CPU:</strong> (AMD) Phenom II X4 965 o equivalente (Intel)
              Core i3-2120 o equivalente
            </p>
            <p><strong>Memoria:</strong> 8 GB</p>
            <p>
              <strong>GPU:</strong> ${juegoSeleccionado.requisitosMinimos[1]}
            </p>
            <p><strong>DirectX:</strong> ${
              juegoSeleccionado.requisitosMinimos[2]
            }</p>
            <p><strong>Almacenamiento:</strong> ${
              juegoSeleccionado.requisitosMinimos[3]
            }</p>
          </div>
          <div class="col-6">
            <h3>Recomendado</h3>
            <p>
              <strong>Versión del sistema operativo:</strong> ${
                juegoSeleccionado.requisitosRecomendados[0]
              }
            </p>
            <p>
              <strong>CPU:</strong> (AMD) Phenom II X4 965 o equivalente (Intel)
              Core i3-2120 o equivalente
            </p>
            <p><strong>Memoria:</strong> 8 GB</p>
            <p>
              <strong>GPU:</strong> ${
                juegoSeleccionado.requisitosRecomendados[1]
              }
            </p>
            <p><strong>DirectX:</strong> ${
              juegoSeleccionado.requisitosRecomendados[2]
            }</p>
            <p><strong>Almacenamiento:</strong> ${
              juegoSeleccionado.requisitosRecomendados[3]
            }</p>
          </div>
        </article>
        <div class="col-12">
          <h2 class="text-center my-3">Reseñas</h2>
          ${comentarios(juegoSeleccionado)}
          <div class="d-flex justify-content-evenly" id="verMasDetalle">
            <button class="btn btn-outline-success"data-bs-toggle="modal" data-bs-target="#Modal">Añadir una reseña</button>
          </div>
        </div>
      </section>


<!-- Modal -->
<div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
      <div class="mb-3">
        <label for="puntaje" class="form-label">Puntaje</label>
        <input type="number" required class="form-control" id="puntaje" aria-describedby="puntajeHelp">
        <div class="invalid-feedback">Debe estar entre el 0 y el 5.</div>
      <div class="mb-3">
        <label for="comentarioModal" class="form-label">Reseña</label>
        <textarea type="text" required class="form-control" id="comentarioModal"></textarea>
      </div>
      <button class="btn btn-outline-info">Enviar</button>
    </form>
      </div>
    </div>
  </div>
</div>
`;
const enviarOpinion = document.querySelector(".btn-outline-info");
enviarOpinion.addEventListener("click", (e) => {
  e.preventDefault();
  if (verificarPuntaje(puntaje.value, document.getElementById("puntaje"))) {
  }
});
function estrellas(puntaje) {
  let estrellas = ``;
  for (let i = 0; i < Math.trunc(puntaje); i++) {
    estrellas += `<img
    src="../svg/svgexport-3.svg"
    alt="estrella de puntaje entera"
    class="estrellas img-fluid"
  />`;
  }
  if (tieneDecimales(puntaje)) {
    estrellas += ` <img src="../svg/svgexport-4.svg" alt="" class="estrellas img-fluid"/>`;
  }
  return estrellas;
}

function estrellasPromedio(opiniones) {
  let puntaje = 0;
  for (let i = 0; i < opiniones.length; i++) {
    puntaje += opiniones[i].puntaje;
  }
  puntaje = puntaje / opiniones.length;
  return `<div>${estrellas(puntaje)} </div> 
<span class="ms-2 ">${puntaje} </span>`;
}
function tieneDecimales(num) {
  return num % 1 !== 0;
}
function comentarios(juegoSeleccionado) {
  let comentarios = ``;
  for (let i = 0; i < juegoSeleccionado.opiniones.length; i++) {
    comentarios += `
    <div class="row">
              <div class="card mb-3">
                <div class="col-12 p-0">
                  <div class="d-flex mt-2 justify-content-between">
                    <div class="d-flex align-items-center">
                      <img src="${juegoSeleccionado.opiniones[i].usuario.foto}"
                        class="img-fluid rounded-5 imagenUsuarios-Carousel"
                        alt="foto de ${
                          juegoSeleccionado.opiniones[i].usuario.nombre
                        } ${juegoSeleccionado.opiniones[i].usuario.apellido} "
                      />
                      <h5 class="ms-3">${
                        juegoSeleccionado.opiniones[i].usuario.nombreUsuario
                      } </h5>
                    </div>
                    <div>
                      <div class="d-flex justify-content-evenly">
                        ${estrellas(juegoSeleccionado.opiniones[i].puntaje)}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  <div class="row">
                    <div class="col-12 d-flex justify-content-between"></div>
                    <div class="col-12">
                      <div class="card-body">
                        <h6 class="card-text">${
                          juegoSeleccionado.opiniones[i].comentario
                        }</h6>
                        <p class="text-secondary">
                          ${juegoSeleccionado.opiniones[i].fecha}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    `;
  }
  return comentarios;
}
