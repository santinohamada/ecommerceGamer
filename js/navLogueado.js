import { crearUsuarios } from "./classUsuario.js";
const listaUsuario = crearUsuarios()
const nav = document.querySelector("nav")
const modal = document.querySelector(".modal-dialog")
const container = document.querySelector(".container-sm")
const p = document.createElement("p")
p.innerHTML="Usuario y/o contraseña incorrectos"
export function crearVariables(){
const email = document.querySelector('#email')
const pass = document.querySelector('#Contraseña')
const botonLogIn=document.querySelector('#btnModalFooter')
    //btnModalFooter
    const formulario = document.querySelector("#formularioLogIn")
    botonLogIn.addEventListener('click',(e)=>{
        loginUser(email.value,pass.value)
    })
}
function loginUser(mail,password) {
  const usuarioLogueado =  recorrerUsuarios(mail,password)
  if(usuarioLogueado !==undefined){
      sessionStorage.setItem("usuario",JSON.stringify(usuarioLogueado.nombreUsuario))
    }
if(window.location.pathname == "./index.html"){
    updateNavIndex()
}

else{
    updateNavPages
}
}

export function updateNavIndex() {
    console.log("hola")
    const user = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(user)
    const usuarioIniciado = listaUsuario.find((usuario)=>usuario.nombreUsuario === user)

    if (user) {
nav.innerHTML=`<div class="container-fluid">
          <a class="navbar-brand" href="./index.html">
            <div id="logo-navbar">
              <img
                class="img-fluid"
                src="./images/NETHER-SHOP-12-8-2024.png"
                alt="logo de la pagina"
              />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="ul-nav">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="./pages/sobreNosotros.html"
                    >Sobre Nosotros</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="./pages/error404.html"
                    >Soporte</a
                  >
                </li>
              </ul>
            </div>
            <div class="d-lg-flex flex-nowrap">
              <div class="search me-3">
                <form class="d-flex" role="search" data-bs-theme="light">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="buscar"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-light" type="submit">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
              <img
                class="nav-fotoUsuario rounded-5"
                src="${usuarioIniciado.foto} "
            </div>
          </div>
        </div>`
    } else {
        // Si no hay usuario, muestra el botón de iniciar sesión

    }
}
export function updateNavPages() {
    console.log("hola")
    const user = JSON.parse(sessionStorage.getItem("usuario"));
    console.log(user)
    const usuarioIniciado = listaUsuario.find((usuario)=>usuario.nombreUsuario === user)

    if (user) {
nav.innerHTML=`<div class="container-fluid">
          <a class="navbar-brand" href="../index.html">
            <div id="logo-navbar">
              <img
                class="img-fluid"
                src="../images/NETHER-SHOP-12-8-2024.png"
                alt="logo de la pagina"
              />
            </div>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <div>
              <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="ul-nav">
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="./sobreNosotros.html"
                    >Sobre Nosotros</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    aria-current="page"
                    href="./error404.html"
                    >Soporte</a
                  >
                </li>
              </ul>
            </div>
            <div class="d-lg-flex flex-nowrap">
              <div class="search me-3">
                <form class="d-flex" role="search" data-bs-theme="light">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="buscar"
                    aria-label="Search"
                  />
                  <button class="btn btn-outline-light" type="submit">
                    <i class="bi bi-search"></i>
                  </button>
                </form>
              </div>
              <img
                class="nav-fotoUsuario rounded-5"
                src="/${usuarioIniciado.foto} "
            </div>
          </div>
        </div>`
    } else {
        // Si no hay usuario, muestra el botón de iniciar sesión

    }
}
function recorrerUsuarios(mail,password) {
    for(let i = 0; i<listaUsuario.length;i++){
        if(listaUsuario[i].mail === mail && listaUsuario[i].password===password){
            return listaUsuario[i]
        }
      }
      container.append(p)
      return undefined
}


