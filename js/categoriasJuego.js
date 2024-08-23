export default function categoriasJuego(juegoSeleccionado) {
    let categorias = "";
    for (let i = 0; i < juegoSeleccionado.categoria.length; i++) {
      categorias += `<span class="badge text-bg-secondary me-1">${juegoSeleccionado.categoria[i]} </span>`;
    }
    return categorias;
  }