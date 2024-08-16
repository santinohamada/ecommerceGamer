import { v4 as uid } from "https://jspm.dev/uuid";

export default class Usuario {
  //export default se usa solo si exportamos una unica cosa, sino es export
  #id;
  #nombre;
  #apellido;
  #nombreUsuario;
  #password;
  #foto;
  #tipo;

  constructor(id, nombre, apellido, password, nombreUsuario, foto, tipo) {
    this.#id = uid();
    this.#password = password;
    this.#nombreUsuario = nombreUsuario;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#foto = foto;
  }

  // Getters
  get id() {
    return this.#id;
  }
  get nombre() {
    return this.#nombre;
  }
  get apellido() {
    return this.#apellido;
  }
  get nombreUsuario() {
    return this.#nombreUsuario;
  }
  get foto() {
    return this.#foto;
  }
  get tipo() {
    return this.#tipo;
  }
  get password() {
    return this.#password;
  }
  // Setters
  set id(value) {
    this.#id = value;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  set apellido(value) {
    this.#apellido = value;
  }
  set nombreUsuario(value) {
    this.#nombreUsuario = value;
  }
  set foto(value) {
    this.#foto = value;
  }
  get tipo() {
    return this.#tipo;
  }
  get password() {
    return this.#password;
  }
  //agregar los metodo

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      nombreUsuario: this.nombreUsuario,
      foto: this.foto,
      tipo: this.tipo,
      password: this.password,
    };
  }
}
