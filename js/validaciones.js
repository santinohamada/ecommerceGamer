export const cantidadCaracteres = (input, min, max) => {
  if (input.value.length >= min && input.value.length <= max) {
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    return false;
  }
};
export const validarLink = (input) => {
  const regExp = /^https?:\/\/.*\.(?:jpg|jpeg|png|gif|bmp|webp)(\?.*)?$/i;
  if (regExp.test(input.value)) {
    input.classList.remove("is-invalid");
    return true;
  } else {
    input.classList.add("is-invalid");
    return false;
  }
};
