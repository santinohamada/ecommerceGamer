export function verificarPuntaje(puntaje, input) {
  if (
    !(puntaje > 0 && puntaje > 5) &&
    puntaje !== null &&
    puntaje !== undefined &&
    puntaje != ""
  ) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  }
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  return false;
}

export function verificarTexto(texto, textarea) {
  if (texto.length < 200 && texto.length > 10) {
    textarea.classList.remove("is-invalid");
    textarea.classList.add("is-valid");
    return true;
  }
  textarea.classList.remove("is-valid");
  textarea.classList.add("is-invalid");
  return false;
}
