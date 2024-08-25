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
        categoriasSeleccionadas,
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
  
  // manejadores de eventos
 botonAgregarJuego.addEventListener('click',mostrarModal);
 formAgregarJuego.addEventListener("submit",crearJuego)


