import { Juego, crearJuegos } from "./classJuegos.js";
import { crearUsuarios } from "./classUsuario.js";
import Opiniones from "./Opinion.js";
import { verificarPuntaje, verificarTexto } from "./modalComentario.js";
const listaUsuarios = crearUsuarios();
const listaJuegos = crearJuegos();
const paramJuegoId = new URLSearchParams(window.location.search).get("juegoId");
const usuarioSeleccionado = listaUsuarios.find(
  (usuario) => usuario.id === listaUsuarios[0].id
);
//const usuarioSeleccionadoIndex = listaUsuarios.findIndex((usuario)=>usuario.id===paramId)
// const paramId = new URLSearchParams(window.location.search).get("id")
const juegoSeleccionado = listaJuegos.find(
  (juego) => juego.id === paramJuegoId
);
const div = document.createElement("div");
const main = document.querySelector("main");
const section = document.createElement("section");
const enviarOpinion = document.querySelector(".btn-outline-info");
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
    puntaje += parseFloat(opiniones[i].puntaje);
  }
  puntaje = puntaje / opiniones.length;
  if(puntaje !== undefined && puntaje !==null && !(isNaN(puntaje))){

    return `<div>${estrellas(puntaje)} </div> 
    <span class="ms-2 ">${puntaje.toFixed(2)} </span>`;
  }
  return `Sin puntaje`
}

function tieneDecimales(num) {
  return num % 1 !== 0;
}
export function categoriasJuego(juegoSeleccionado) {
  let categorias = "";
  for (let i = 0; i < juegoSeleccionado.categoria.length; i++) {
    categorias += `<span class="badge text-bg-secondary me-1">${juegoSeleccionado.categoria[i]} </span>`;
  }
  return categorias;
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
    alt="foto de ${juegoSeleccionado.opiniones[i].usuario.nombre} ${
      juegoSeleccionado.opiniones[i].usuario.apellido
    } "
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

function precioJuego(juegoSeleccionado) {
  if (juegoSeleccionado.descuento) {
    return `<span class="badge fs-5 celesteClarito me-2">-${
      juegoSeleccionado.cantidadDescuento
    }%</span>
            <span class="text-secondary"><s>${
              (juegoSeleccionado.precio).toFixed(2)
            } USD$</s></span>
            <span>${
              (juegoSeleccionado.precio *
              (1 - juegoSeleccionado.cantidadDescuento / 100)).toFixed(2)
            } USD$ </span>`;
  } else {
    return `<span>${juegoSeleccionado.precio} USD$</span>`;
  }
}
section.innerHTML = `
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
                  <strong>GPU:</strong> ${
                    juegoSeleccionado.requisitosMinimos[1]
                  }
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
              <div class="container">
              ${comentarios(juegoSeleccionado)}
              </div>
            </div>
            <div class="d-flex justify-content-evenly" id="verMasDetalle">
        <button
          class="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#ModalOpinion"
        >
          Añadir una reseña
        </button>
      </div>
          </section>
          
    `;
main.prepend(section);

enviarOpinion.addEventListener("click", (e) => {
  e.preventDefault();
  const puntajeModal = document.querySelector("#puntaje");
  const opinionModal = document.querySelector("#textoModal");
  if (
    verificarPuntaje(puntajeModal.value, puntajeModal) &&
    verificarTexto(opinionModal.value, opinionModal)
  ) {
    let timerInterval;
    Swal.fire({
      title: "Se ha enviado tu Reseña!",
      html: "Esta ventana se cerrará en <b></b> milliseconds.",
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      location.reload();
    });
    const opinion = new Opiniones(
      undefined,
      usuarioSeleccionado,
      puntajeModal.value,
      undefined,
      opinionModal.value
    );
    juegoSeleccionado.opiniones.push(opinion);
    localStorage.setItem("juegosKey", JSON.stringify(listaJuegos));
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Hemos detectado un error. Vuelve a intentarlo!",
    });
  }
});
