export function verificarPuntaje(puntaje, input) {
  if (!(puntaje > 0 && puntaje >= 5)) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    return true;
  }
  input.classList.remove("is-valid");
  input.classList.add("is-invalid");
  input.classList.add();
  return false;
}
