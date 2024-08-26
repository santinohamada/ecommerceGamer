import { v4 as uid } from "https://jspm.dev/uuid";
export class Juego {
  //export default se usa solo si exportamos una unica cosa, sino es export
  #id;
  #foto;
  #nombre;
  #precio;
  #descuento;
  #desarrollador;
  #categoria;
  #descripcion;
  #versionM;
  #cpuM;
  #memoriaM;
  #gpuM;
  #directxM;
  #almacenamientoM;
  #versionR;
  #cpuR;
  #memoriaR;
  #gpuR;
  #directxR;
  #almacenamientoR;

  #opiniones;

  constructor(
    id,
    foto,
    nombre,
    precio,
    descuento,
    descripcion,
    categoria,
    desarrollador,
    versionM,
    cpuM,
    memoriaM,
    gpuM,
    directxM,
    almacenamientoM,
    versionR,
    cpuR,
    memoriaR,
    gpuR,
    directxR,
    almacenamientoR,
    opiniones = []
  ) {
    this.#id = uid();
    this.#foto = foto;
    this.#categoria = categoria;
    this.#nombre = nombre;
    this.#precio = precio;
    this.#descuento = descuento;
    this.#desarrollador = desarrollador;
    this.#descripcion = descripcion;
    this.#versionM = versionM;
    this.#cpuM = cpuM;
    this.#memoriaM = memoriaM;
    this.#gpuM = gpuM;
    this.#directxM = directxM;
    this.#almacenamientoM = almacenamientoM;
    this.#versionR = versionR;
    this.#cpuR = cpuR;
    this.#memoriaR = memoriaR;
    this.#gpuR = gpuR;
    this.#directxR = directxR;
    this.#almacenamientoR = almacenamientoR;
    this.#opiniones = opiniones;
  }

  // Getters
  get id() {
    return this.#id;
  }
  get foto() {
    return this.#foto;
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
  get desarrollador() {
    return this.#desarrollador;
  }
  get versionM() {
    return this.#versionM;
  }

  get cpuM() {
    return this.#cpuM;
  }

  get memoriaM() {
    return this.#memoriaM;
  }

  get gpuM() {
    return this.#gpuM;
  }

  get directxM() {
    return this.#directxM;
  }

  get almacenamientoM() {
    return this.#almacenamientoM;
  }

  get versionR() {
    return this.#versionR;
  }

  get cpuR() {
    return this.#cpuR;
  }

  get memoriaR() {
    return this.#memoriaR;
  }

  get gpuR() {
    return this.#gpuR;
  }

  get directxR() {
    return this.#directxR;
  }

  get almacenamientoR() {
    return this.#almacenamientoR;
  }

  get opiniones() {
    return this.#opiniones;
  }
  // Setters
  set id(value) {
    this.#id = value;
  }
  set foto(value) {
    this.#foto = value;
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
  set desarrollador(value) {
    this.#desarrollador = value;
  }
  set versionM(value) {
    this.#versionM = value;
  }

  set cpuM(value) {
    this.#cpuM = value;
  }

  set memoriaM(value) {
    this.#memoriaM = value;
  }

  set gpuM(value) {
    this.#gpuM = value;
  }

  set directxM(value) {
    this.#directxM = value;
  }

  set almacenamientoM(value) {
    this.#almacenamientoM = value;
  }

  set versionR(value) {
    this.#versionR = value;
  }

  set cpuR(value) {
    this.#cpuR = value;
  }

  set memoriaR(value) {
    this.#memoriaR = value;
  }

  set gpuR(value) {
    this.#gpuR = value;
  }

  set directxR(value) {
    this.#directxR = value;
  }

  set almacenamientoR(value) {
    this.#almacenamientoR = value;
  }

  set opiniones(value) {
    this.#opiniones = value;
  }
  //agregar los metodo

  toJSON() {
    return {
      id: this.id,
      foto: this.foto,
      nombre: this.nombre,
      precio: this.precio,
      descuento: this.descuento,
      cantidadDescuento: this.cantidadDescuento,
      categoria: this.categoria,
      descripcion: this.descripcion,
      desarrollador: this.desarrollador,
      versionM: this.versionM,
      cpuM: this.cpuM,
      memoriaM: this.memoriaM,
      gpuM: this.gpuM,
      directxM: this.directxM,
      almacenamientoM: this.almacenamientoM,
      almacenamientoR: this.almacenamientoR,
      versionR: this.versionR,
      cpuR: this.cpuR,
      memoriaR: this.memoriaR,
      gpuR: this.gpuR,
      directxR: this.directxR,
      opiniones: this.opiniones,
    };
  }
}
export function crearJuegos() {
  const listaJuego = JSON.parse(localStorage.getItem("juegosKey")) || [];
  if (listaJuego.length == 0) {
    const listaJuego = [
      new Juego(
        undefined,
        "https://image.api.playstation.com/cdn/UP0006/CUSA01925_00/RxeNb9Ph1y2VhBGv5Ct0tuY6f5xC4t9f.png?w=440",
        "Need for Speed™ Hot Pursuit Remastered",
        29.99,
        10,
        "Remasterización del clásico juego de carreras de alta velocidad con impresionantes gráficos mejorados.",
        ["Carreras", "Accion"],
        "Criterion Games",
        "Windows 10",
        "Intel Core i3-6100",
        "8 GB RAM",
        "NVIDIA GeForce GTX 750 Ti",
        "DirectX 11",
        "45 GB",
        "Windows 10",
        "Intel Core i5-6600",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1060",
        "DirectX 11",
        "45 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/vulcan/ap/rnd/202211/0714/ojKZ7l0T2M5egR9YHIjVhI0R.png",
        "The Witcher 3: Wild Hunt",
        39.99,
        20,
        "Un juego de rol épico en un mundo abierto lleno de monstruos, magia y decisiones morales.",
        ["RPG", "Accion"],
        "CD Projekt Red",
        "Windows 7",
        "Intel Core i5-2500K",
        "8 GB RAM",
        "NVIDIA GeForce GTX 770",
        "DirectX 11",
        "50 GB",
        "Windows 10",
        "Intel Core i7-3770",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1060",
        "DirectX 12",
        "50 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png",
        "Red Dead Redemption 2",
        59.99,
        15,
        "Un juego de acción y aventura que sigue la historia de un forajido en el Salvaje Oeste.",
        ["Accion", "Aventura"],
        "Rockstar Games",
        "Windows 10",
        "Intel Core i5-2500K",
        "8 GB RAM",
        "NVIDIA GeForce GTX 770",
        "DirectX 11",
        "150 GB",
        "Windows 10",
        "Intel Core i7-4770K",
        "12 GB RAM",
        "NVIDIA GeForce GTX 1060",
        "DirectX 12",
        "150 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/vulcan/ap/rnd/202311/2812/ae84720b553c4ce943e9c342621b60f198beda0dbf533e21.jpg",
        "Cyberpunk 2077",
        49.99,
        30,
        "Un RPG de mundo abierto ambientado en un futuro distópico lleno de tecnología avanzada.",
        ["Accion", "RPG"],
        "CD Projekt Red",
        "Windows 10",
        "Intel Core i5-3570K",
        "8 GB RAM",
        "NVIDIA GeForce GTX 780",
        "DirectX 12",
        "70 GB",
        "Windows 10",
        "Intel Core i7-4790",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1060",
        "DirectX 12",
        "70 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
        "Resident Evil Village",
        59.99,
        25,
        "El octavo capítulo de la serie Resident Evil, donde el terror acecha en cada rincón de un misterioso pueblo.",
        ["Terror", "Accion"],
        "Capcom",
        "Windows 10",
        "Intel Core i5-7500",
        "8 GB RAM",
        "NVIDIA GeForce GTX 1050 Ti",
        "DirectX 12",
        "45 GB",
        "Windows 10",
        "Intel Core i7-8700",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1070",
        "DirectX 12",
        "45 GB"
      ),
      new Juego(
        undefined,
        "https://images.fravega.com/f500/a92cfb023cd14ccb9881543ae08a8a59.jpg",
        "FIFA 23",
        69.99,
        10,
        "La última entrega de la popular franquicia de fútbol, con gráficos mejorados y nuevas características.",
        ["Deportes", "Simulación"],
        "EA Sports",
        "Windows 10",
        "Intel Core i3-6100",
        "8 GB RAM",
        "NVIDIA GeForce GTX 1050 Ti",
        "DirectX 12",
        "50 GB",
        "Windows 10",
        "Intel Core i5-8600",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1660",
        "DirectX 12",
        "50 GB"
      ),
      new Juego(
        undefined,
        "https://assets.xboxservices.com/assets/36/b5/36b52fa8-e71b-4435-888a-cecb98d3876a.jpg?n=153142244433_GLP-Page-Hero-0_1083x1222_02.jpg",
        "Valorant",
        50,
        0,
        "Un shooter táctico en primera persona que combina habilidades únicas y trabajo en equipo.",
        ["FPS", "Shooter"],
        "Riot Games",
        "Windows 7",
        "Intel Core i3-370M",
        "4 GB RAM",
        "Intel HD 3000",
        "DirectX 11",
        "20 GB",
        "Windows 10",
        "Intel Core i5-4460",
        "8 GB RAM",
        "NVIDIA GeForce GTX 1050 Ti",
        "DirectX 12",
        "20 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/vulcan/ap/rnd/202311/2801/803e41fee0edf8f8ed1de518e6eac60ddf30ac485b9a16a2.png",
        "Fortnite",
        70,
        0,
        "Un battle royale que combina construcción y combate en una isla llena de peligros y sorpresas.",
        ["Battle Royale", "Accion"],
        "Epic Games",
        "Windows 7",
        "Intel Core i3-3225",
        "4 GB RAM",
        "Intel HD 4000",
        "DirectX 11",
        "40 GB",
        "Windows 10",
        "Intel Core i5-7300U",
        "8 GB RAM",
        "NVIDIA GeForce GTX 960",
        "DirectX 12",
        "40 GB"
      ),
      new Juego(
        undefined,
        "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg",
        "Counter-Strike 2",
        19.99,
        0,
        "La secuela del legendario shooter táctico, con nuevas mecánicas y gráficos actualizados.",
        ["FPS", "Shooter"],
        "Valve",
        "Windows 10",
        "Intel Core i5-2500K",
        "8 GB RAM",
        "NVIDIA GeForce GTX 660",
        "DirectX 11",
        "30 GB",
        "Windows 10",
        "Intel Core i7-4790",
        "16 GB RAM",
        "NVIDIA GeForce GTX 970",
        "DirectX 12",
        "30 GB"
      ),
      new Juego(
        undefined,
        "https://image.api.playstation.com/vulcan/ap/rnd/202301/2006/KjVYStE0uxgsVNvSqSCjwVKE.jpg",
        "Tetris Effect: Connected",
        39.99,
        20,
        "Una experiencia de Tetris inmersiva que combina la jugabilidad clásica con efectos visuales y sonoros impresionantes.",
        ["Puzzle", "Música"],
        "Monstars Inc.",
        "Windows 10",
        "Intel Core i3-4340",
        "4 GB RAM",
        "NVIDIA GeForce GTX 750 Ti",
        "DirectX 11",
        "3 GB",
        "Windows 10",
        "Intel Core i5-4590",
        "8 GB RAM",
        "NVIDIA GeForce GTX 970",
        "DirectX 12",
        "3 GB"
      ),
      new Juego(
        undefined,
        "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg",
        "PUBG: Battlegrounds",
        29.99,
        50,
        "El juego que definió el género battle royale, con combate intenso en un mapa de gran escala.",
        ["Battle Royale", "Accion"],
        "PUBG Corporation",
        "Windows 7",
        "Intel Core i5-4430",
        "8 GB RAM",
        "NVIDIA GeForce GTX 960",
        "DirectX 11",
        "30 GB",
        "Windows 10",
        "Intel Core i7-6700K",
        "16 GB RAM",
        "NVIDIA GeForce GTX 1060",
        "DirectX 12",
        "30 GB"
      ),
    ];

    localStorage.setItem("juegosKey", JSON.stringify(listaJuego));
  }
  return listaJuego;
}
