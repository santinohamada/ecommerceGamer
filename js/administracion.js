import { crearUsuarios } from "./classUsuario.js";
import { updateNavPages,verificarAdminPages } from "./navLogueado.js"
updateNavPages()
const listaUsuario=crearUsuarios()
const main = document.querySelector("main")
const user = JSON.parse(sessionStorage.getItem("usuario"));
const usuarioIniciado = listaUsuario.find(
  (usuario) => usuario.nombreUsuario === user
);
if( user == undefined || user ==null || usuarioIniciado ==undefined || usuarioIniciado ==null){
    main.innerHTML = "INICIE SESION COMO ADMINISTRADOR"
}
else{
    if(verificarAdminPages(usuarioIniciado)!==""){

        let li = document.getElementsByClassName('nav-link')
        li = [...li]
        li[2].classList.add('active')
    }
    else{
        main.innerHTML = "INICIE SESION COMO ADMINISTRADOR"
    }
}




