import { colocarJuegos,rellenarSection } from "./filtrarGenero.js";
import { rellenarGaleria } from "./galeria.js";
import { Juego, crearJuegos } from "./classJuegos.js";
import { crearVariables,updateNavIndex } from "./navLogueado.js";
import inicializarBusqueda from "./buscarJuegos.js";
const listaJuegos=crearJuegos()
rellenarGaleria()
rellenarSection()
crearVariables()
updateNavIndex()
inicializarBusqueda()