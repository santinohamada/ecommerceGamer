import { v4 as uid } from "https://jspm.dev/uuid";
export default class Opiniones {
  //export default se usa solo si exportamos una unica cosa, sino es export
  #id;
  #usuario;
  #puntaje;
  #fecha;
  #comentario;

  constructor(id, usuario, puntaje, fecha = formatearFecha(), comentario) {
    this.#id = uid();
    this.#usuario = usuario;
    this.#puntaje = puntaje;
    this.#fecha = fecha;
    this.#comentario = comentario;
  }

  // Getters
  get id() {
    return this.#id;
  }
  get usuario() {
    return this.#usuario;
  }
  get puntaje() {
    return this.#puntaje;
  }
  get fecha() {
    return this.#fecha;
  }
  get comentario() {
    return this.#comentario;
  }
  // Setters
  set id(value) {
    this.#id = value;
  }
  set usuario(value) {
    this.#usuario = value;
  }
  set puntaje(value) {
    if (!(puntaje > 0 && puntaje <= 5)) {
      return false;
    }
    this.#puntaje = value;
    return true;
  }
  set fecha(value) {
    this.#fecha = value;
  }
  set comentario(value) {
    this.#comentario = value;
  }
  //agregar los metodo

  toJSON() {
    return {
      id: this.id,
      usuario: this.usuario,
      puntaje: this.puntaje,
      fecha: this.fecha,
      comentario: this.comentario,
    };
  }
}

function formatearFecha() {
  let fecha = new Date();

  // Formatear la fecha
  let dia = fecha.getDate().toString().padStart(2, "0");
  let mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Los meses comienzan desde 0
  let año = fecha.getFullYear();
  let horas = fecha.getHours().toString().padStart(2, "0");
  let minutos = fecha.getMinutes().toString().padStart(2, "0");

  // Formato final
  return `${dia}/${mes}/${año} ${horas}:${minutos}`;
}
