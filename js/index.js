import { colocarJuegos,rellenarSection } from "./filtrarGenero.js";
import { rellenarGaleria } from "./galeria.js";
import { Juego, crearJuegos } from "./classJuegos.js";
import { crearVariables,updateNavIndex } from "./navLogueado.js";
const listaJuegos=crearJuegos()
updateNavIndex()
rellenarGaleria()
rellenarSection()
crearVariables()