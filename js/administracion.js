import { crearUsuarios } from "./classUsuario.js";
import {
  crearVariables,
  updateNavPages,
  verificarAdminPages,
} from "./navLogueado.js";
import {Juego} from "./classJuegos.js";
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
    document.querySelector('#modalJuego')
);
const botonAgregarJuego  = document.querySelector('#botonAgregarJuego'),
formAgregarJuego = document.querySelector('#formAgregarJuego');
const listaJuegos =JSON.parse(localStorage.getItem('juegosKey')) || [];
const tbody = document.querySelector('tbody');

const foto = document.querySelector("#foto"),
  nombre = document.querySelector("#titulo"),
  precio = document.querySelector("#foto"),
  descuento = document.querySelector('#descuento'),
  desarrollador = document.querySelector('#desarrollador'),
  descripcion = document.querySelector('#descripcion'),
  categoriasSeleccionadas = [];
  const versionM = document.querySelector('#versionM'),
  cpuM = document.querySelector('#versionM'),
  memoriaM = document.querySelector('#memoriaM'),
  gpuM = document.querySelector('#gpuM'),
  directxM = document.querySelector('#directxM'),
  almacenamientoM = document.querySelector('#almacenamientoM'),
  versionR = document.querySelector('#versionR'),
  cpuR = document.querySelector('#versionR'),
  memoriaR = document.querySelector('#memoriaR'),
  gpuR = document.querySelector('#gpuR'),
  directxR = document.querySelector('#directxR'),
  almacenamientoR = document.querySelector('#almacenamientoR');


  const mostrarModal = () => {
    //mostrar
    modalAdminContacto.show();
  };
  const crearJuego = (e) => {
    e.preventDefault();
    categoriasSeleccionadas.length = 0;
    document.querySelectorAll('.form-check-input').forEach((checkbox) => {
        if (checkbox.checked) {
          categoriasSeleccionadas.push(checkbox.nextElementSibling.textContent.trim());
        }
      });
    
    const nuevoJuego = new Juego(
        undefined,
        foto.value,
        nombre.value,
        precio.value,
        descuento.value,
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
        directxM.value,
        almacenamientoM.value,
        undefined
    )
    listaJuegos.push(nuevoJuego);
    console.log(listaJuegos)
    limpiarFormulario();
    guardarEnLocalStorage();
  };
  const limpiarFormulario = () =>{
    formAgregarJuego.reset();
}
const guardarEnLocalStorage = () => {
    localStorage.setItem('juegosKey',JSON.stringify(listaJuegos));
  
  }
const cargaTablaJuegos = () => {
    if (listaJuegos.length !== 0){
        listaJuegos.map(juego =>dibujarFila(juego));
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
                  <button class="btn btn-warning">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button class="btn btn-danger" onclick="borrarJuego('${juego.id}')">
                    <i class="bi bi-trash"></i>
                  </button>
                  <button class="btn btn-primary">
                    <i class="bi bi-eye"></i>
                  </button>
                </td>
              </tr>`
}
window.borrarJuego = (id) => {
    Swal.fire({
        title: "¿Estas seguro de borrar el juego?",
        text: "No puedes revertir posteriormente este proceso",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#8E3336",
        cancelButtonColor: " #586F6B",
        confirmButtonText: "Borrar",
        cancelButtonText: "Cancelar"
      }).then((result) => {
        if (result.isConfirmed) {

            const posicionJuego = listaJuegos.findIndex((juego)=>juego.id === id);
            listaJuegos.splice(posicionJuego,1);
            guardarEnLocalStorage();
            tbody.removeChild(tbody.children[posicionJuego]);

          Swal.fire({
            title: "Juego borrado",
            text: "El juego seleccionado ha sido borrado",
            icon: "success"
          });
        }
      });
}

  
  // manejadores de eventos
 botonAgregarJuego.addEventListener('click',mostrarModal);
 formAgregarJuego.addEventListener("submit",crearJuego)
 cargaTablaJuegos();


