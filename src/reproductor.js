// Clase Song y sus metodos
class Song {
  static idCounter = 0;

  constructor(nombre, autor, duracion, album, genero, año, cover, urlSong) {
    this.cancionId = Song.idCounter++;
    this.nombre = nombre;
    this.autor = autor;
    this.duracion = duracion;
    this.album = album;
    this.año = año;
    this.genero = genero;
    this.cover = cover;
    this.urlSong = urlSong;
  }

// para obtener la información de todos los atributos según el Id
  getFullAlbum() {
    return `${this.nombre} - ${this.autor} - ${this.duracion} - ${this.album} - ${this.genero} - ${this.año}`;
  }
}

// Fin Clase Song


// Clase CatalogoDeCanciones, que es donde coloco mi base de canciones y sus métodos
class CatalogoDeCanciones {
  constructor() {
    this.CatalogoDeCanciones = [
      new Song("Flowers", "Miley Cyrus", "3:21", "Endless Summer Vacation", "Pop", "2023", '9album.jpg', '1.mp3'),
      new Song("Yeah!", "Usher", "2:41", "Confessions", "Crunk&B", "2004", '10album.jpg', '2.mp3'),
      new Song("Deja vu", "Prince Royce & Shakira  ", "3:18", "FIVE", "Bachata", "2017", '11album.jpg', '3.mp3'),
      new Song("Seven", "Jungkook,", "3:24", "Golden", "Pop", "2023", '12album.jpg', '4.mp3'),
      new Song("Dangerously", "Charlie Puth", "3:22", "Nine Track Mind", "Pop", "2016", '13album.jpg', '5.mp3'),
      new Song("Attention", "Charlie Puth", "3:32", "Voicenotes", "Pop Rock", "2017", '14album.jpg', '6.mp3'),
      new Song("Dreamers", "	Jungkook & RedOne", "3:21", "FIFA World Cup 2022", " K-pop, Pop", "2022", '15album.jpg', '7.mp3'),
      new Song("Sofía", "Alvaro Soler", "3:33", "Eterno agosto", "Pop", "2016", '16album.jpg', '8.mp3'),
      new Song("Desde Cuando", "Alejandro Sanz", "3:57", "Paraiso Express", "Pop", "2009", '17album.jpg', '9.mp3'),
      new Song("La media Vuelta", "Luis Miguel", "2:41", "Segundo Romance", "Bolero Ranchero", "1994", '18album.jpg', '10.mp3'),
      new Song("Hasta que me olvides", "Luis Miguel", "4:41", "Segundo Romance", "Pop", "1994", '18album.jpg', '11.mp3'),
      new Song("You are not alone", "Michael Jackson", "5:45", "HIStory: Past, Present and Future, Book I", "Pop", "1995", '19album.jpg', '12.mp3'),
      new Song("Creo en mi", "Natalia Jimenez", "3:48", "Creo en mi", "Pop latino", "2015", '20album.jpg', '13.mp3'),
      new Song("Nunca es suficiente", "Angeles azules", "4:26", "aEsto si es cumbia", "Cumbia", "2018", '21album.jpg', '14.mp3'),
      new Song("Don't stop me now", "Queen", "3:29", "Jazz", "Pop rock", "1978", '22album.jpg', '15.mp3'),
      new Song("We Will Rock You ", "Queen", "2:01", "Jazz", "Pop rock", "1978", '22album.jpg', '16.mp3'),
      new Song("Que se parezca a ti", "Tiago PZK", "3:04", "Portales", "Urbano Latino", "2022", '1album.jpg', '17.mp3'),
      new Song("Bemaste", "Tiago PZK", "2:21", "Portales", "Urbano Latino", "2022", '1album.jpg', '18.mp3'),
      new Song("Yesterday", "The Beatles", "1:59", "Help!", "Chamber Pop", "1965", '2album.jpg', '19.mp3'),
      new Song("Mamichula", "Nicki Nicole", "3:38", "Atrevido", "Trap Latino", "2020", '3album.jpg', '20.mp3'),
      new Song("Take me to church", "Hozier", "4:16", "Take me to church", "Soul", "2014", '4album.jpg', '21.mp3'),
      new Song("CNV vol 30", "Pure Negga x Rastachai", "4:13", "CNV Vol 30", "Reggae", "2021", '5album.jpg', '22.mp3'),
      new Song("Let your hair down", "Magic!", "4:28", "Don't Kill the magic", "Pop", "2014", '6album.jpg', '23.mp3'),
      new Song("Medicine", "The pretty reckless", "3:17", "Make me wanna die", "Hard Rock", "2010", '7album.jpg', '24.mp3'),
      new Song("Diamons", "Rihanna", "3:45", "Unapologetic", "Pop", "2012", '25album.jpg', '25.mp3'),
      new Song("Viva la vida", "Coldplay", "4:01", "Viva la vida", "Pop", "2008", '26album.jpg', '26.mp3'),
      new Song("Take on me", "A-ha", "4:04", "Hunting high and low", "Alternative", "1985", '27album.jpg', '27.mp3'),
      new Song("Dusk till down", "Zayn & Sia", "3:55", "Dusk Till Down", "Pop", "2017", '28album.jpg', '28.mp3'),
      new Song("Señorita", "Shawn Mendes & Camila Cabello", "Shawn Mendes (Deluxe) y Romance", "3:25", "Latin Pop", "2019", '29album.jpg', '29.mp3'),
      new Song("Empire States of Mind", "Alicia Keys", "3:29", "The Element of freedom", "R&B/Soul", "2009", '30album.jpg', '30.mp3')
    ];
  }

// muestra todos los parámetros con el método getFullAlbum definido en la clase Song
  mostrarcanciones() {
    this.CatalogoDeCanciones.map(itemCancion => {
      console.log(itemCancion.getFullAlbum())
    });
  }

// para obtener todas las canciones del catálogo
  getCatalogoCanciones() {
    return this.CatalogoDeCanciones;
  }

  // para filtrar la canción desde el método getFullAlbum, aquí incluyo el lowercase al texto que voy a buscar
  buscarCancion(texto_buscar) {
    const cancionesEncontradas = this.CatalogoDeCanciones.filter(itemCancion => itemCancion.getFullAlbum().toLocaleLowerCase().includes(texto_buscar));
    return cancionesEncontradas;
  }

  // esta función busca al id de la canción, compara los id y obtengo un resultado array en la busqueda en el CatalogoDeCanciones
  buscarCancionById(idCancion) {
    let cancionSeleccionada = new Array();
    this.CatalogoDeCanciones.forEach(itemCancion => {
        if (itemCancion.cancionId === idCancion) {
          cancionSeleccionada = itemCancion;
        }
      }
    );
    //console.log(cancionSeleccionada);
    // imprimo la canción resultado del id de la búsqueda
    return cancionSeleccionada;
  }

  // en el método render estancio los elementos y el orden de los elementos según mi html
  renderListaBuscar(cancionesLista, ElementoHtml) {
    ElementoHtml.innerHTML = "";
    cancionesLista.map(cancionItem => {
      ElementoHtml.innerHTML += `
    <li >
      <div class="titulos_contenedor">
        <div  class="titulo_cancion">${cancionItem.nombre} - ${cancionItem.autor} </div>
        <div class="info_cancion"> ${cancionItem.album} - ${cancionItem.año} - ${cancionItem.duracion} </div>
      </div>
      <div class="iconos_cancion">
        <a href="#" title="Seleccionar" onclick="return seleccionarCancion( ${cancionItem.cancionId},'lista_buscar')"><i class="fa fa-play" aria-hidden="true"> </i> </a>
        <a href="#" title="Agregar a favoritos" onclick="return agregarAFavoritoslist( ${cancionItem.cancionId} )"><i class="fa fa-heart" aria-hidden="true"></i> </a> 
        <a href="#" title="Agregar a Playlist" onclick="return agregarAPlaylist( ${cancionItem.cancionId} )"><i class="fa-solid fa-plus" aria-hidden="true"></i></a> 
      </div>
    </li> 
    `
    });
  }

}

// Fin Clase CatalogoDeCanciones


// Class PlayList
class PlayList {
  constructor() {
    this.listaCanciones = [];
    this.cancionActual = {};
  }

  // utilizo el mismo método de busqueda para la class playlist
  buscarCancionById(idCancion) {
    let cancionSeleccionada = new Array;
    this.listaCanciones.forEach(itemCancion => {
        if (itemCancion.cancionId === idCancion) {
          cancionSeleccionada = itemCancion;
        }
      }
    );
    return cancionSeleccionada;
  }

  // método de mi nueva lista de canciones que van en el playlist
  getListaCanciones() {
    return this.listaCanciones;
  }

  // método para agregar el objeto canción en una sección (playlist o favoritos, utilizo la misma para las dos secciones)
  //aquí coloco esta condicionante para que no se repita la canción en mi sección, así evito que se dupliquen las canciones.
  agregarCancionByObject(objCancion) {
    let cancionBuscar = this.buscarCancionById(objCancion.cancionId);
    if (cancionBuscar.length === 0) {
      this.listaCanciones.push(objCancion);
    } else {
      alert("La canción seleccionada ya está agregada ");
    }
  }

  // en este médoto creo una nueva lista donde va a devolverme la lista de canciones que no sean igual a la del id que voy a eliminar
  eliminarCancionById(idCancion) {
    const resultado = this.listaCanciones.filter(itemCancion => itemCancion.cancionId != idCancion);
    this.listaCanciones = resultado;
  }

  //para incluir en la lista render el ElementoHtml manteniendo el mismo formato, aquí cambio el ícono que se va a visualizar en esta clase
  renderPlaylist(ElementoHtml) {
    ElementoHtml.innerHTML = "";
    this.listaCanciones.map(cancionItem => {
      ElementoHtml.innerHTML += `
    <li>
      <div class="titulos_contenedor">
        <div  class="titulo_cancion">${cancionItem.nombre}  - ${cancionItem.autor} </div>
        <div class="info_cancion"> ${cancionItem.album} - ${cancionItem.año} - ${cancionItem.duracion} </div>
      </div>
      <div class="iconos_cancion">
        <a href="#" title="Seleccionar" onclick="return seleccionarCancion( ${cancionItem.cancionId} , 'lista_playlist')"><i class="fa fa-play" aria-hidden="true"> </i> </a>
        <a href="#" title="Agregar a Favoritos" onclick="return agregarAFavoritoslist( ${cancionItem.cancionId} )"><i class="fa fa-heart" aria-hidden="true"></i> </a> 
        <a href="#" title="Eliminar de Playlist" onclick="return eliminarDePlaylist( ${cancionItem.cancionId} )"><i class="fa-solid fa-trash" aria-hidden="true"></i></a> 
      </div>
    </li> 
    `
    });
  }

  // misma función con el modelo de íconos cuando pase a Favoritos
  renderFavoritoslist(ElementoHtml) {
    ElementoHtml.innerHTML = "";
    this.listaCanciones.map(cancionItem => {
      ElementoHtml.innerHTML += `
    <li >
      <div class="titulos_contenedor">
        <div  class="titulo_cancion">${cancionItem.nombre}  - ${cancionItem.autor} </div>
        <div class="info_cancion"> ${cancionItem.album} - ${cancionItem.año} - ${cancionItem.duracion} </div>
      </div>
      <div class="iconos_cancion">
        <a href="#" data-id="Seleccionar" onclick="return seleccionarCancion( ${cancionItem.cancionId}, 'lista_favoritos')"><i class="fa fa-play" aria-hidden="true"> </i> </a>
        <a href="#" data-id="Eliminar de Favoritos" onclick="return eliminarDeFavoritoslist( ${cancionItem.cancionId} )"><i class="fa fa-times" aria-hidden="true"></i> </a> 
        <a href="#" data-id="Agregar a Playlist" onclick="return agregarAPlaylist( ${cancionItem.cancionId} )"><i class="fa-solid fa-plus" aria-hidden="true"></i></a> 
      </div>
    </li> 
    `
    });
  }

}

// Fin Class PlayList


// Class Reproductor
class Reproductor {
  constructor() {
    this.cancionActual = {};
    this.listaActual = [];
    this.audioActual = new Audio();
    this.volumenInicial = 0.5;
    this.interaccionUsuario = false;

    // Verificamos si el catálogo de canciones tiene elementos
    if (MisCancionesCatalogo.length > 0) {
      // Si hay canciones en el catálogo, establecemos la lista actual como el catálogo completo
      this.setListaActual(MisCancionesCatalogo);
      // También establecemos la canción actual como la primera del catálogo
      this.setCancionActual(MisCancionesCatalogo[0]);
    }

    this.stop();
    this.muted = false;
    this.renderMuteButton();

    this.audioActual.addEventListener('ended', () => {
      this.siguienteCancion();
    });

    const avanzarBoton = document.getElementById('adelante');
    const retrocederBoton = document.getElementById('atras');

    avanzarBoton.addEventListener('click', () => {
      this.avanzar();
    });

    retrocederBoton.addEventListener('click', () => {
      this.retroceder();
    });

    const detenerBoton = document.getElementById('stop');

    detenerBoton.addEventListener('click', () => {
      this.detener();
    });
  }


  setCancionActual(objCancion, manualIteracion = false) {
    this.cancionActual = objCancion;

    // para reproducirse otra canción hay que parar la canción actual, caso contrario se reproducen al mismo tiempo
    if (this.hayCancionActual()) {
      this.stop();
    }

    // Utiliza la misma instancia de Audio y solo cambia la fuente
    this.audioActual.src = "./assets/" + dir_canciones + "/" + this.cancionActual.urlSong;
    this.audioActual.volume = this.volumenInicial;
    this.renderPortada("./assets/" + dir_portadas + "/" + this.cancionActual.cover);
    this.renderCancionActual();
    this.play(manualIteracion);

    // Asegúrate de llamar a la función play después de cambiar la canción

  }


  renderCancionActual() {
    document.getElementById("portada_nombreCancion").innerHTML = this.getCancionActual().nombre;
    document.getElementById("portada_artistaCancion").innerHTML = this.getCancionActual().autor;
    document.getElementById("portada_duracionCancion").innerHTML = this.getCancionActual().duracion;
    document.getElementById("portada_albumCancion").innerHTML = this.getCancionActual().album;
    document.getElementById("portada_anioCancion").innerHTML = this.getCancionActual().año;
    document.getElementById("portada_generoCancion").innerHTML = this.getCancionActual().genero;
  }

  setListaActual(nueva_lista_canciones) {
    this.listaActual = nueva_lista_canciones.slice(); // Utiliza slice() para crear una copia de la lista
  }

  getCancionActual() {
    return this.cancionActual;
  }

  hayCancionActual() {
    //validamos si esta vacio el objeto cancionActual y devolvemos true o false
    return Object.entries(this.getCancionActual()).length !== 0;
  }

  // para parar la canción que se está ejecutando y que se ejecute la otra canción seleccionada
  stop() {
    if (this.hayCancionActual()) {
      this.audioActual.pause();
      this.audioActual.currentTime = 0;
    }
  }

  detener() {
    if (this.hayCancionActual()) {
      this.stop();
    }
  }

  avanzar() {
    if (this.hayCancionActual()) {
      const lista = this.listaActual;
      const indexCancionActual = lista.findIndex(cancion => cancion.cancionId === this.cancionActual.cancionId);

        if (indexCancionActual !== -1) {
          const siguienteIndex = (indexCancionActual + 1) % lista.length;
          const siguienteCancion = lista[siguienteIndex];
        this.setCancionActual(siguienteCancion);
        this.play();
      } 
    } else {
      // Si la lista está vacía, reproduce la primera canción del catálogo
      const primeraCancion = MisCancionesCatalogo[0];
      if (primeraCancion) {
        this.setCancionActual(primeraCancion);
        this.play();
      } else {
        this.setListaActual(MisCancionesCatalogo); // Establece la lista como el catálogo completo
      }
    }
  }

  retroceder() {
    if (this.hayCancionActual()) {
      const lista = this.listaActual;
      const indexCancionActual = lista.findIndex(cancion => cancion.cancionId === this.cancionActual.cancionId);

      if (indexCancionActual > 0) {
        const cancionAnterior = lista[indexCancionActual - 1];
        this.setCancionActual(cancionAnterior);
        this.play();
      } else {
        // Si estamos en la primera canción, simplemente detén la reproducción
        this.stop();
      }
    } else {
      // Si la lista está vacía, reproduce la última canción del catálogo
      const ultimaCancion = MisCancionesCatalogo[MisCancionesCatalogo.length - 1];
      if (ultimaCancion) {
        this.setCancionActual(ultimaCancion);
        this.play();
      } else {
        this.setListaActual(MisCancionesCatalogo); // Establece la lista como el catálogo completo
      }
    }
  }


  retroceder() {
    if (this.hayCancionActual()) {
      const lista = this.listaActual;
      const indexCancionActual = lista.findIndex(cancion => cancion.cancionId === this.cancionActual.cancionId);

      if (indexCancionActual > 0) {
        const cancionAnterior = lista[indexCancionActual - 1];
        this.setCancionActual(cancionAnterior);
        this.play();
      } else if (lista.length > 1) {
        // Si estamos en la primera canción, pero hay más de una canción en la lista, avanza al final
        this.setCancionActual(lista[lista.length - 1]);
        this.play();
      } else if (MisCancionesCatalogo.length > 0) {
        // Si la lista está vacía pero hay canciones en el catálogo, reproduce la última canción del catálogo
        this.setCancionActual(MisCancionesCatalogo[MisCancionesCatalogo.length - 1]);
        this.play();
      } else {
        // Si la lista está vacía y no hay canciones en el catálogo, detén la reproducción
        this.stop();
      }
    }
  }


  toggleMute() {
    this.muted = !this.muted;
    this.audioActual.muted = this.muted;
    this.renderMuteButton(); // Actualizar la interfaz de usuario
  }

  // Método para renderizar el botón de "mute" en la interfaz de usuario
  renderMuteButton() {
    const muteButton = document.getElementById('muteButton');

    if (this.muted) {
      muteButton.innerHTML = '<i class="fa fa-volume-off"></i>';
    } else {
      muteButton.innerHTML = '<i class="fa fa-volume-up"></i>';
    }
  }

  siguienteCancion() {
    if (this.listaActual && this.listaActual.length > 0) {
      // Encuentra la posición de la canción actual en la lista
      const currentIndex = this.listaActual.findIndex(
        (cancion) => cancion.cancionId === this.cancionActual.cancionId
      );

      // Calcula el índice de la siguiente canción
      const nextIndex = (currentIndex + 1) % this.listaActual.length;

      if (nextIndex === 0 && this.listaActual.length > 1) {
        // Si nextIndex es 0 y hay más de un elemento en la lista,
        // significa que llegamos al final de la lista actual,
        // pero no detenemos la reproducción
        this.setCancionActual(this.listaActual[nextIndex]);
        this.play();
      } else {
        // Establece la siguiente canción como canción actual y reproduce
        this.setCancionActual(this.listaActual[nextIndex]);
        this.play();
      }
    } else {
      // Si la lista está vacía o no está definida, reproduce la primera canción del catálogo
      const primeraCancion = MisCancionesCatalogo[0];
      if (primeraCancion) {
        this.setCancionActual(primeraCancion);
        this.play();
      } else {
        this.setListaActual(MisCancionesCatalogo); // Establece la lista como el catálogo completo
      }
    }
  }

  play(manualIteracion = false) {
    console.log("Play después de avanzar");
    if (this.hayCancionActual() && this.interaccionUsuario) {
      this.audioActual.play();
      this.renderMuteButton(); // Asegúrate de actualizar el botón de silencio
    }
    if (manualIteracion) {
      this.audioActual.play();
      this.renderMuteButton();
    }
  }

  pause() {
    this.audioActual.pause();
  }

  renderPortada(imgUrl) {
    let ElementoHtml = document.getElementById("portadaAlbum");
    ElementoHtml.innerHTML = `<img src="${imgUrl}" />`;
  }

}

// Fin Clase Reproductor


//----------- EJECUCIÓN-------------------

const input_buscador = document.getElementById('texto_para_buscar');
const boton_buscar = document.getElementById('boton_buscar');
const lista_buscar = document.getElementById('lista_buscar');
const listaPlaylist = document.getElementById('listaPlaylist');
const listaFavoritos = document.getElementById('listaFavoritos');


lista_buscar.innerHTML = "";
listaPlaylist.innerHTML = "";
listaFavoritos.innerHTML = "";

// const con la direccion de las carpetas para portadas y mp3
const dir_portadas = "album";
const dir_canciones = "mp3";

const MisCanciones = new CatalogoDeCanciones();
var MisCancionesCatalogo = MisCanciones.getCatalogoCanciones();
var cancionesQueCumplen = new Array();

const MiPlayList = new PlayList();
const MiFavoritosList = new PlayList();
const MiReproductor = new Reproductor();

// renderizamos en la seccion de Lista de Busqueda la lista completa antes de buscar
MisCanciones.renderListaBuscar(MisCancionesCatalogo, lista_buscar);


//Evento Buscar del boton_buscar para realizar busqueda según el texto del input texto_para_buscar
boton_buscar.addEventListener('click', function () {
  lista_buscar.innerHTML = "";
  if (input_buscador.value !== "") {
    // Obtener el valor del input y convertirlo a minúsculas
    const valor_buscar = input_buscador.value.toLowerCase();
    //para buscar las canciones dentro del array de MisCancionesCatalogo del Objeto MisCanciones
    cancionesQueCumplen = MisCanciones.buscarCancion(valor_buscar);
    // si no se encuentran las canciones, entonces muestra el mensaje
    if (cancionesQueCumplen.length === 0) {
      lista_buscar.innerHTML = `<li> No se encontraron canciones</li>`;
    } else {
      //imprimimos en la seccion HTML correspondiente con método renderListarBuscar las canciones que cumplen en la busqueda
      MisCanciones.renderListaBuscar(cancionesQueCumplen, lista_buscar);
    }
  }
});

//Fin del Evento Buscar s


function seleccionarCancion(idCancion, listaActual) {
  // selecionamos una cancion identificando de que Lista para enviarlo al Reproductor
  console.log('entrando a seleccionarCancion')
  let cancionSeleccionada = MisCanciones.buscarCancionById(idCancion);
  var lista_canciones = [];

  switch (listaActual) {
    case "lista_buscar":
      lista_canciones = cancionesQueCumplen.length > 0 ? cancionesQueCumplen : MisCancionesCatalogo;
      break;
    case "lista_playlist":
      lista_canciones = MiPlayList.getListaCanciones();
      break;
    case "lista_favoritos":
      lista_canciones = MiFavoritosList.getListaCanciones();
      break;
    default:
      break;
  }

  MiReproductor.setCancionActual(cancionSeleccionada, true);
  MiReproductor.setListaActual(lista_canciones);
  return false;
}

//Agregar la canción al playlist
function agregarAPlaylist(idCancion) {
  let cancionSeleccionada = MisCanciones.buscarCancionById(idCancion);
  MiPlayList.agregarCancionByObject(cancionSeleccionada, "Playlist");
  MiPlayList.renderPlaylist(listaPlaylist);
  return false;
}

// borrar la canción del playlist
function eliminarDePlaylist(idCancion) {
  MiPlayList.eliminarCancionById(idCancion, "Playlist");
  MiPlayList.renderPlaylist(listaPlaylist);
  return false;
}

//agregar la canción a favoritos
function agregarAFavoritoslist(idCancion) {
  let cancionSeleccionada = MisCanciones.buscarCancionById(idCancion);
  MiFavoritosList.agregarCancionByObject(cancionSeleccionada, "Favoritos");
  MiFavoritosList.renderFavoritoslist(listaFavoritos);
  return false;
}

// borrar la canción de favoritos
function eliminarDeFavoritoslist(idCancion) {
  MiFavoritosList.eliminarCancionById(idCancion, "Favoritos");
  MiFavoritosList.renderFavoritoslist(listaFavoritos);
  return false;
}


// -----Ejecución del reproductor-----

const playBoton = document.getElementById('play');
const pauseBoton = document.getElementById('pause');

playBoton.addEventListener('click', () => {
  // si el objeto de Cancion Actual en el reproductor no esta vacio
  if (MiReproductor.hayCancionActual()) {
    MiReproductor.interaccionUsuario = true;
    MiReproductor.play();
  }
});

pauseBoton.addEventListener('click', () => {
  // si el objeto de Cancion Actual en el reproductor no esta vacio
  if (MiReproductor.hayCancionActual()) {
    MiReproductor.pause();
  }
});

input_buscador.addEventListener('input', () => {
  // si el texto a buscar en la caja de texto vuelve a estar vacio lo llenamos de las canciones iniciales
  if (input_buscador.value.trim().length === 0){
    MisCanciones.renderListaBuscar(MisCancionesCatalogo, lista_buscar);
  }
});



