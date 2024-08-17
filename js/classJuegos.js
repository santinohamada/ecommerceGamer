import { v4 as uid } from "https://jspm.dev/uuid";
export class Juego {
  //export default se usa solo si exportamos una unica cosa, sino es export
  #id;
  #nombre;
  #precio;
  #descuento;
  #cantidadDescuento;
  #categoria;
  #descripcion;
  #requisitosRecomendados;
  #requisitosMinimos;
  #desarrollador;
  #foto;
  #opiniones;

  constructor(
    id,
    nombre,
    precio,
    descuento,
    cantidadDescuento,
    descripcion,
    categoria,
    requisitosMinimos,
    requisitosRecomendados,
    desarrollador,
    foto,
    opiniones = []
  ) {
    this.#id = uid();
    this.#categoria = categoria;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descuento = descuento;
    this.#cantidadDescuento = cantidadDescuento;
    this.#descripcion = descripcion;
    this.#requisitosMinimos = requisitosMinimos;
    this.#requisitosRecomendados = requisitosRecomendados;
    this.#desarrollador = desarrollador;
    this.#foto = foto;
    this.#opiniones = opiniones;
  }

  // Getters
  get id() {
    return this.#id;
  }
  get nombre() {
    return this.#nombre;
  }
  get precio() {
    return this.#precio;
  }
  get categoria() {
    return this.#categoria;
  }
  get descripcion() {
    return this.#descripcion;
  }
  get descuento() {
    return this.#descuento;
  }
  get cantidadDescuento() {
    return this.#cantidadDescuento;
  }
  get requisitosMinimos() {
    return this.#requisitosMinimos;
  }
  get requisitosRecomendados() {
    return this.#requisitosRecomendados;
  }
  get desarrollador() {
    return this.#desarrollador;
  }
  get foto() {
    return this.#foto;
  }
  get opiniones() {
    return this.#opiniones;
  }
  // Setters
  set id(value) {
    this.#id = value;
  }
  set nombre(value) {
    this.#nombre = value;
  }
  set precio(value) {
    this.#precio = value;
  }
  set categoria(value) {
    this.#categoria = value;
  }
  set descripcion(value) {
    this.#descripcion = value;
  }
  set descuento(value) {
    return this.#descuento;
  }
  set cantidadDescuento(value) {
    return this.#cantidadDescuento;
  }
  set requisitosMinimos(value) {
    this.#requisitosMinimos = value;
  }
  set requisitosRecomendados(value) {
    this.#requisitosRecomendados = value;
  }
  set desarrollador(value) {
    this.#desarrollador = value;
  }
  set foto(value) {
    this.#foto = value;
  }
  set opiniones(value) {
    this.#opiniones = value;
  }
  //agregar los metodo

  toJSON() {
    return {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      descuento: this.descuento,
      cantidadDescuento: this.cantidadDescuento,
      categoria: this.categoria,
      descripcion: this.descripcion,
      requisitosMinimos: this.requisitosMinimos,
      requisitosRecomendados: this.requisitosRecomendados,
      desarrollador: this.desarrollador,
      foto: this.foto,
      opiniones: this.opiniones,
    };
  }
}
export function crearJuegos() {
  const listaJuego = JSON.parse(localStorage.getItem("juegosKey")) || [];
  if (listaJuego.length == 0) {
    const JuegoNuevo = new Juego(
      undefined,
      "Need for Speed™ Hot Pursuit Remastered",
      69.99,
      true,
      90,
      "Siente la emoción de la persecución y la adrenalina de escapar sobre ruedas con los coches de mayor rendimiento del mundo en Need for Speed™ Hot Pursuit Remastered.",
      ["Accion", "Carreras"],
      [
        "Windows 10,64 Bit",
        "(AMD) Phenom II X4 965 o equivalente (Intel) Core i3-2120 o equivalente",
        "DirectX 11",
        "45 GB",
      ],
      [
        "Windows 10, 64 Bit",
        "Phenom II X4 965 o equivalente (Intel) Core i3-2120 o equivalente",
        "DirectX 11",
        "45 GB",
      ],
      "Electronic Arts",
      "https://image.api.playstation.com/cdn/UP0006/CUSA01925_00/RxeNb9Ph1y2VhBGv5Ct0tuY6f5xC4t9f.png?w=440"
    );
    listaJuego.push(JuegoNuevo);
    localStorage.setItem("juegosKey", JSON.stringify(listaJuego));
  }
  return listaJuego;
}
