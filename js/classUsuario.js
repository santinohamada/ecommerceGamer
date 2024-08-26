import { v4 as uid } from "https://jspm.dev/uuid";

export class Usuario {
  //export default se usa solo si exportamos una unica cosa, sino es export
  #id;
  #nombre;
  #apellido;
  #nombreUsuario;
  #password;
  #foto;
  #tipo;
  #mail;

  constructor(id, nombre, apellido, mail, password, nombreUsuario, foto, tipo) {
    this.#id = uid();
    this.mail = mail;
    this.#password = password;
    this.#nombreUsuario = nombreUsuario;
    this.#nombre = nombre;
    this.#apellido = apellido;
    this.#foto = foto;
    this.#tipo = tipo;
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
  get mail() {
    return this.#mail;
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
  set mail(value) {
    this.#mail = value;
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
      mail: this.mail,
      nombreUsuario: this.nombreUsuario,
      foto: this.foto,
      tipo: this.tipo,
      password: this.password,
    };
  }
}
export function crearUsuarios() {
  const listaUsuario = [];
  if (listaUsuario.length == 0) {
    const usuario = new Usuario(
      undefined,
      "Maria Emilia",
      "Ceballos",
      "emiliaceballos@gmail.com",
      "HolaComoEstas",
      "Emilia21",
      "images/PagNosotros.img/emiliacanva.png",
      false
    );
    const usuario2 = new Usuario(
      undefined,
      "Santino",
      "Hamada",
      "santinohamada@gmail.com",
      "santino20",
      "El ScrumMAster",
      "images/PagNosotros.img/santinocanva.png",
      true
    );
    listaUsuario.push(usuario);
    listaUsuario.push(usuario2);
    localStorage.setItem(
      "usuariosKey",
      JSON.stringify([usuario.nombreUsuario, usuario2.nombreUsuario])
    );
  }
  return listaUsuario;
}
