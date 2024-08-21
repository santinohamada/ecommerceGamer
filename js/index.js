import { colocarJuegos,rellenarSection } from "./filtrarGenero.js";
import { rellenarGaleria } from "./galeria.js";
import { Juego, crearJuegos } from "./classJuegos.js";
import { crearUsuarios } from "./classUsuario.js";
crearJuegos()
crearUsuarios()
const listaJuego = JSON.parse(localStorage.getItem("juegosKey")) || [];
rellenarGaleria()
rellenarSection()