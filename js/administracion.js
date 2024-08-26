import { crearUsuarios } from "./classUsuario.js";
import {
  crearVariables,
  updateNavPages,
  verificarAdminPages,
} from "./navLogueado.js";
import { Juego } from "./classJuegos.js";
import { validarLink, cantidadCaracteres } from "./validaciones.js";
crearVariables();
updateNavPages();
const listaUsuario = crearUsuarios();
const main = document.querySelector("main");
const user = JSON.parse(sessionStorage.getItem("usuario"));
const usuarioIniciado = listaUsuario.find(
  (usuario) => usuario.nombreUsuario === user
);
if (
  user == undefined ||
  user == null ||
  usuarioIniciado == undefined ||
  usuarioIniciado == null
) {
  main.innerHTML = "INICIE SESION COMO ADMINISTRADOR";
} else {
  if (verificarAdminPages(usuarioIniciado) !== "") {
    let li = document.getElementsByClassName("nav-link");
    li = [...li];
    li[2].classList.add("active");
  } else {
    main.innerHTML = "INICIE SESION COMO ADMINISTRADOR";
  }
}

const modalAdminContacto = new bootstrap.Modal(
  document.querySelector("#modalJuego")
);
const botonAgregarJuego = document.querySelector("#botonAgregarJuego"),
  formAgregarJuego = document.querySelector("#formAgregarJuego"),
  formEditarJuego = document.querySelector("#formEditarJuego");
const listaJuegos = JSON.parse(localStorage.getItem("juegosKey")) || [];
const tbody = document.querySelector("tbody");

const foto = document.querySelector("#foto"),
  nombre = document.querySelector("#titulo"),
  precio = document.querySelector("#precio"),
  descuento = document.querySelector("#descuento"),
  desarrollador = document.querySelector("#desarrollador"),
  descripcion = document.querySelector("#descripcion"),
  categoriasSeleccionadas = [];
const versionM = document.querySelector("#versionM"),
  cpuM = document.querySelector("#cpuM"),
  memoriaM = document.querySelector("#memoriaM"),
  gpuM = document.querySelector("#gpuM"),
  directxM = document.querySelector("#directxM"),
  almacenamientoM = document.querySelector("#almacenamientoM"),
  versionR = document.querySelector("#versionR"),
  cpuR = document.querySelector("#cpuR"),
  memoriaR = document.querySelector("#memoriaR"),
  gpuR = document.querySelector("#gpuR"),
  directxR = document.querySelector("#directxR"),
  almacenamientoR = document.querySelector("#almacenamientoR");
const fotoEditar = document.querySelector("#fotoEditar"),
  nombreEditar = document.querySelector("#tituloEditar"),
  precioEditar = document.querySelector("#precioEditar"),
  descuentoEditar = document.querySelector("#descuentoEditar"),
  desarrolladorEditar = document.querySelector("#desarrolladorEditar"),
  descripcionEditar = document.querySelector("#descripcionEditar"),
  categoriasSeleccionadasEditar = [];
const versionMEditar = document.querySelector("#versionMEditar"),
  cpuMEditar = document.querySelector("#cpuMEditar"),
  memoriaMEditar = document.querySelector("#memoriaMEditar"),
  gpuMEditar = document.querySelector("#gpuMEditar"),
  directxMEditar = document.querySelector("#directxMEditar"),
  almacenamientoMEditar = document.querySelector("#almacenamientoMEditar"),
  versionREditar = document.querySelector("#versionREditar"),
  cpuREditar = document.querySelector("#cpuREditar"),
  memoriaREditar = document.querySelector("#memoriaREditar"),
  gpuREditar = document.querySelector("#gpuREditar"),
  directxREditar = document.querySelector("#directxREditar"),
  almacenamientoREditar = document.querySelector("#almacenamientoREditar");

const mostrarModal = () => {
  //mostrar
  modalAdminContacto.show();
};
const crearJuego = (e) => {
  e.preventDefault();
  categoriasSeleccionadas.length = 0;
  document.querySelectorAll(".form-check-input").forEach((checkbox) => {
    if (checkbox.checked) {
      categoriasSeleccionadas.push(
        checkbox.nextElementSibling.textContent.trim()
      );
    }
  });
  if (
    cantidadCaracteres(nombre, 2, 50) &&
    cantidadCaracteres(precio, 1, 9) &&
    cantidadCaracteres(descripcion, 3, 500) &&
    cantidadCaracteres(desarrollador, 3, 50) &&
    cantidadCaracteres(versionM, 3, 20) &&
    cantidadCaracteres(cpuM, 3, 50) &&
    cantidadCaracteres(memoriaM, 1, 15) &&
    cantidadCaracteres(gpuM, 3, 50) &&
    cantidadCaracteres(directxM, 3, 15) &&
    cantidadCaracteres(almacenamientoM, 3, 20) &&
    cantidadCaracteres(versionR, 3, 20) &&
    cantidadCaracteres(cpuR, 3, 50) &&
    cantidadCaracteres(memoriaR, 1, 15) &&
    cantidadCaracteres(gpuR, 3, 50) &&
    cantidadCaracteres(directxR, 3, 15) &&
    cantidadCaracteres(almacenamientoR, 3, 20) &&
    validarLink(foto)
  ) {
    const nuevoJuego = new Juego(
      undefined,
      foto.value,
      nombre.value,
      parseFloat(precio.value),
      parseFloat(descuento.value),
      descripcion.value,
      [...categoriasSeleccionadas],
      desarrollador.value,
      versionM.value,
      cpuM.value,
      memoriaM.value,
      gpuM.value,
      directxM.value,
      almacenamientoM.value,
      versionR.value,
      cpuR.value,
      memoriaR.value,
      gpuR.value,
      directxR.value,
      almacenamientoR.value,
      undefined
    );
    listaJuegos.push(nuevoJuego);
    limpiarFormulario();
    guardarEnLocalStorage();
    cargaTablaJuegos();
  }
};
const limpiarFormulario = () => {
  formAgregarJuego.reset();
};
const guardarEnLocalStorage = () => {
  localStorage.setItem("juegosKey", JSON.stringify(listaJuegos));
};
const cargaTablaJuegos = () => {
  if (listaJuegos.length !== 0) {
    listaJuegos.map((juego) => dibujarFila(juego));
  }
};
window.redireccionar = (idJuego) => {
  window.location.href = "../pages/detalle.html?juegoId=" + idJuego;
};
window.editarJuego = (idJuego) => {
  const juegoIndex = listaJuegos.findIndex((juego) => juego.id === idJuego);
  fotoEditar.value = listaJuegos[juegoIndex].foto;
  nombreEditar.value = listaJuegos[juegoIndex].nombre;
  precioEditar.value = listaJuegos[juegoIndex].precio;
  descuentoEditar.value = listaJuegos[juegoIndex].descuento;
  (descripcionEditar.value = listaJuegos[juegoIndex].descripcion),
    (desarrolladorEditar.value = listaJuegos[juegoIndex].desarrollador);
  versionMEditar.value = listaJuegos[juegoIndex].versionM;
  cpuMEditar.value = listaJuegos[juegoIndex].cpuM;
  memoriaMEditar.value = listaJuegos[juegoIndex].memoriaM;
  gpuMEditar.value = listaJuegos[juegoIndex].gpuM;
  directxMEditar.value = listaJuegos[juegoIndex].directxM;
  almacenamientoMEditar.value = listaJuegos[juegoIndex].almacenamientoM;
  versionREditar.value = listaJuegos[juegoIndex].versionR;
  cpuREditar.value = listaJuegos[juegoIndex].cpuR;
  memoriaREditar.value = listaJuegos[juegoIndex].memoriaR;
  gpuREditar.value = listaJuegos[juegoIndex].gpuR;
  directxREditar.value = listaJuegos[juegoIndex].directxR;
  almacenamientoREditar.value = listaJuegos[juegoIndex].almacenamientoR;

  botonConfirmarEditar.addEventListener("click", () => {
    actualizarValoresJuegos(juegoIndex);
  });
  cargaTablaJuegos();
};
const botonConfirmarEditar = document.querySelector("#confirmarEditar");
function actualizarValoresJuegos(juegoIndex) {
  categoriasSeleccionadasEditar.length = 0;
  document.querySelectorAll(".checksEditar").forEach((checkbox) => {
    if (checkbox.checked) {
      categoriasSeleccionadasEditar.push(
        checkbox.nextElementSibling.textContent.trim()
      );
    }
  });
  if (
    cantidadCaracteres(nombreEditar, 2, 50) &&
    cantidadCaracteres(precioEditar, 1, 9) &&
    cantidadCaracteres(descripcionEditar, 3, 500) &&
    cantidadCaracteres(desarrolladorEditar, 3, 50) &&
    cantidadCaracteres(versionMEditar, 3, 20) &&
    cantidadCaracteres(cpuMEditar, 3, 50) &&
    cantidadCaracteres(memoriaMEditar, 1, 15) &&
    cantidadCaracteres(gpuMEditar, 3, 50) &&
    cantidadCaracteres(directxMEditar, 3, 15) &&
    cantidadCaracteres(almacenamientoMEditar, 3, 20) &&
    cantidadCaracteres(versionREditar, 3, 20) &&
    cantidadCaracteres(cpuREditar, 3, 50) &&
    cantidadCaracteres(memoriaREditar, 1, 15) &&
    cantidadCaracteres(gpuREditar, 3, 50) &&
    cantidadCaracteres(directxREditar, 3, 15) &&
    cantidadCaracteres(almacenamientoREditar, 3, 20) &&
    validarLink(fotoEditar)
  ) {
    listaJuegos[juegoIndex].foto = fotoEditar.value;
    listaJuegos[juegoIndex].nombre = nombreEditar.value;
    listaJuegos[juegoIndex].precio = parseFloat(precioEditar.value);
    listaJuegos[juegoIndex].descuento = parseFloat(descuentoEditar.value);
    listaJuegos[juegoIndex].descripcion = descripcionEditar.value;
    listaJuegos[juegoIndex].categoria = [...categoriasSeleccionadasEditar];
    listaJuegos[juegoIndex].desarrollador = desarrolladorEditar.value;
    listaJuegos[juegoIndex].versionM = versionMEditar.value;
    listaJuegos[juegoIndex].cpuM = cpuMEditar.value;
    listaJuegos[juegoIndex].memoriaM = memoriaMEditar.value;
    listaJuegos[juegoIndex].gpuM = gpuMEditar.value;
    listaJuegos[juegoIndex].directxM = directxMEditar.value;
    listaJuegos[juegoIndex].almacenamientoM = almacenamientoMEditar.value;
    listaJuegos[juegoIndex].versionR = versionREditar.value;
    listaJuegos[juegoIndex].cpuR = cpuREditar.value;
    listaJuegos[juegoIndex].memoriaR = memoriaREditar.value;
    listaJuegos[juegoIndex].gpuR = gpuREditar.value;
    listaJuegos[juegoIndex].directxR = directxREditar.value;
    listaJuegos[juegoIndex].almacenamientoR = almacenamientoREditar.value;
    listaJuegos.splice(juegoIndex, 1, listaJuegos[juegoIndex]);
    guardarEnLocalStorage();
    location.reload();
  }
}
const dibujarFila = (juego) => {
  tbody.innerHTML += `<tr class="fila-tabla">
                <td>
                  <img
                    src="${juego.foto}"
                    alt="portada del juego"
                    class="imagen-catalogo-juego"
                  />
                </td>
                <td>${juego.id}</td>
                <td>${juego.nombre}</td>
                <td>${juego.desarrollador}</td>
                <td>${juego.categoria}</td>
                <td>
                  <button class="btn btn-warning" onclick="editarJuego('${juego.id}')" data-bs-toggle="modal"
                  data-bs-target="#modalEditarJuego">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button class="btn btn-danger" onclick="borrarJuego('${juego.id}')">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button class="btn btn-primary" onclick="redireccionar('${juego.id}')">
                    <i class="bi bi-eye"></i>
                  </button>
                </td>
              </tr>`;
};
window.borrarJuego = (id) => {
  Swal.fire({
    title: "¿Estas seguro de borrar el juego?",
    text: "No puedes revertir posteriormente este proceso",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#8E3336",
    cancelButtonColor: " #586F6B",
    confirmButtonText: "Borrar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      const posicionJuego = listaJuegos.findIndex((juego) => juego.id === id);
      listaJuegos.splice(posicionJuego, 1);
      guardarEnLocalStorage();
      tbody.removeChild(tbody.children[posicionJuego]);

      Swal.fire({
        title: "Juego borrado",
        text: "El juego seleccionado ha sido borrado",
        icon: "success",
      });
    }
  });
};

// manejadores de eventos
botonAgregarJuego.addEventListener("click", mostrarModal);
formAgregarJuego.addEventListener("submit", crearJuego);
cargaTablaJuegos();
formEditarJuego.addEventListener("submit", (e, idJuego) => {
  e.preventDefault();
});
