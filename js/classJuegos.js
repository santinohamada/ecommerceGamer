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
    // Juego 1
const Juego1 = new Juego(
  undefined,
  "The Witcher 3: Wild Hunt",
  59.99,
  true,
  95,
  "Una historia épica y llena de aventuras, donde Geralt de Rivia se enfrenta a enemigos y criaturas temibles en un mundo abierto lleno de posibilidades.",
  ["Accion", "RPG"],
  [
    "Windows 10, 64 Bit",
    "(AMD) FX-6300 o equivalente (Intel) Core i5-2500K o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "(AMD) FX-8350 o equivalente (Intel) Core i7-3770 o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  "CD Projekt Red",
  "https://image.api.playstation.com/vulcan/ap/rnd/202211/0714/ojKZ7l0T2M5egR9YHIjVhI0R.png"
);
listaJuego.push(Juego1);

// Juego 2
const Juego2 = new Juego(
  undefined,
  "Red Dead Redemption 2",
  79.99,
  true,
  96,
  "Explora el vasto Oeste americano y sumérgete en una historia profunda llena de forajidos, cazadores de recompensas, y una lucha por la supervivencia.",
  ["Accion", "Aventura"],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 5 1500X o equivalente (Intel) Core i7-4770K o equivalente",
    "DirectX 12",
    "150 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 5 2600 o equivalente (Intel) Core i7-8700K o equivalente",
    "DirectX 12",
    "150 GB",
  ],
  "Rockstar Games",
  "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
);
listaJuego.push(Juego2);

// Juego 3
const Juego3 = new Juego(
  undefined,
  "Cyberpunk 2077",
  49.99,
  true,
  87,
  "Sumérgete en Night City, un mundo abierto de ciencia ficción donde tus decisiones impactan en el desarrollo de la historia y el destino de los personajes.",
  ["Accion", "RPG"],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 3 3200G o equivalente (Intel) Core i5-3570K o equivalente",
    "DirectX 12",
    "70 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 5 3600 o equivalente (Intel) Core i7-4790 o equivalente",
    "DirectX 12",
    "70 GB",
  ],
  "CD Projekt Red",
  "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg"
);
listaJuego.push(Juego3);

// Juego 4
const Juego4 = new Juego(
  undefined,
  "Resident Evil Village",
  69.99,
  true,
  92,
  "Enfréntate a los horrores de una aldea misteriosa en este aterrador capítulo de la saga Resident Evil, donde la supervivencia es la clave.",
  ["Horror", "Accion"],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 5 1600 o equivalente (Intel) Core i5-7500 o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 7 3700X o equivalente (Intel) Core i7-8700 o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  "Capcom",
  "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png"
);
listaJuego.push(Juego4);

// Juego 5
const Juego5 = new Juego(
  undefined,
  "FIFA 23",
  59.99,
  true,
  85,
  "Experimenta la emoción del fútbol mundial con gráficos realistas, mecánicas de juego mejoradas y los equipos más famosos del planeta.",
  ["Deportes", "Simulación"],
  [
    "Windows 10, 64 Bit",
    "(AMD) FX-8350 o equivalente (Intel) Core i3-6100 o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  [
    "Windows 10, 64 Bit",
    "(AMD) Ryzen 5 1600 o equivalente (Intel) Core i5-7600 o equivalente",
    "DirectX 12",
    "50 GB",
  ],
  "Electronic Arts",
  "https://images.fravega.com/f500/a92cfb023cd14ccb9881543ae08a8a59.jpg"
);
listaJuego.push(Juego5);

localStorage.setItem("juegosKey", JSON.stringify(listaJuego));

  }
  return listaJuego;
}
