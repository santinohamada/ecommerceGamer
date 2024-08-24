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
  get foto (){
    return this.#foto
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
  set foto(value){
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

    // Valorant
    const Valorant = new Juego(
      undefined,
      "Valorant",
      53.22,
      true,
      85,
      "Disfruta de un shooter táctico en primera persona con personajes únicos y habilidades estratégicas en Valorant.",
      ["Acción", "Shooter"],
      [
        "Windows 7/8/10 (64-bit)",
        "Intel Core 2 Duo E8400",
        "4 GB de RAM",
        "7 GB de espacio disponible",
      ],
      [
        "Windows 7/8/10 (64-bit)",
        "Intel i3-4150",
        "4 GB de RAM",
        "7 GB de espacio disponible",
      ],
      "Riot Games",
      "https://assets.xboxservices.com/assets/36/b5/36b52fa8-e71b-4435-888a-cecb98d3876a.jpg?n=153142244433_GLP-Page-Hero-0_1083x1222_02.jpg"
    );
    listaJuego.push(Valorant);

    // Fortnite
    const Fortnite = new Juego(
      undefined,
      "Fortnite",
      26.99,
      true,
      80,
      "Únete a la batalla en Fortnite, un juego de supervivencia y construcción con gráficos vibrantes y una jugabilidad dinámica.",
      ["Acción", "Battle Royale"],
      [
        "Windows 7/8/10 (64-bit)",
        "Intel Core i3-3225",
        "4 GB de RAM",
        "16 GB de espacio disponible",
      ],
      [
        "Windows 10 (64-bit)",
        "Intel Core i5-7300U",
        "8 GB de RAM",
        "20 GB de espacio disponible",
      ],
      "Epic Games",
      "https://image.api.playstation.com/vulcan/ap/rnd/202311/2801/803e41fee0edf8f8ed1de518e6eac60ddf30ac485b9a16a2.png"
    );
    listaJuego.push(Fortnite);

    // Counter-Strike 2
    const CounterStrike2 = new Juego(
      undefined,
      "Counter-Strike 2",
      49.36,
      true,
      90,
      "La esperada secuela de Counter-Strike, ofreciendo gráficos mejorados y una jugabilidad pulida en el clásico juego de disparos.",
      ["Acción", "Shooter"],
      [
        "Windows 7/8/10 (64-bit)",
        "Intel Core 2 Duo E6600",
        "4 GB de RAM",
        "15 GB de espacio disponible",
      ],
      [
        "Windows 10 (64-bit)",
        "Intel Core i5-7500",
        "6 GB de RAM",
        "20 GB de espacio disponible",
      ],
      "Valve",
      "https://cdn.akamai.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg"
    );
    listaJuego.push(CounterStrike2);
    // Tetris Effect: Connected
    const TetrisEffect = new Juego(
      undefined,
      "Tetris Effect: Connected",
      39.99,
      true,
      95,
      "Experimenta el clásico Tetris con una nueva perspectiva, acompañado de efectos visuales y sonoros que reaccionan a tu forma de jugar en Tetris Effect: Connected.",
      ["Puzzle", "Música"],
      [
        "Windows 10 (64-bit)",
        "Intel i3-4340",
        "4 GB de RAM",
        "5 GB de espacio disponible",
      ],
      [
        "Windows 10 (64-bit)",
        "Intel i5-4590",
        "8 GB de RAM",
        "5 GB de espacio disponible",
      ],
      "Enhance Games",
      "https://image.api.playstation.com/vulcan/ap/rnd/202301/2006/KjVYStE0uxgsVNvSqSCjwVKE.jpg"
    );
    listaJuego.push(TetrisEffect);

    // PUBG
    const PUBG = new Juego(
      undefined,
      "PUBG: Battlegrounds",
      29.99,
      false, // Valor de cuarto parámetro es false
      85,
      "Lucha por sobrevivir en el inmenso mapa de PUBG, un juego de Battle Royale con una gran variedad de armas y vehículos.",
      ["Acción", "Battle Royale"],
      [
        "Windows 7/8/10 (64-bit)",
        "Intel Core i5-4430",
        "8 GB de RAM",
        "30 GB de espacio disponible",
      ],
      [
        "Windows 10 (64-bit)",
        "Intel Core i7-7700",
        "16 GB de RAM",
        "30 GB de espacio disponible",
      ],
      "PUBG Corporation",
      "https://cdn1.epicgames.com/spt-assets/53ec4985296b4facbe3a8d8d019afba9/pubg-battlegrounds-1e9a7.jpg"
    );
    listaJuego.push(PUBG);

    localStorage.setItem("juegosKey", JSON.stringify(listaJuego));
  }
  return listaJuego;
}

