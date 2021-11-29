class Establecimiento{
    constructor(nombre,provincia, direccion, telefono, idioma,url) {
        this.nombre=nombre;
        this.provincia = provincia;
        this.direccion = direccion;
        this.telefono = telefono;
        this.idioma = idioma;
        this.url=url;
    }

}

let establecimientos=[
    new Establecimiento("Punto Idiomas - Palermo","Buenos Aires", "Av. Luis María Campos 170, CABA","+54 011 56487545","Ingles - Portuges - Italiano - Frances","img/sede1.jpg.crdownload"),
    new Establecimiento("Punto Idiomas - Ramos Mejia","Buenos Aires", "Cuba 2202, Ramos mejía","+54 011 12456214","Ingles - Portuges - Italiano - Frances", "img/sedo2.png"),
    new Establecimiento("Punto Idiomas - Cordoba","Cordoba","Av. Vélez Sarsfield 215, Córdoba","+54 351 7420285","Ingles - Portugués - Italiano - Francés","img/sede3.jfif"),
    new Establecimiento("Punto Idiomas - Rosario","Santa Fe","Blvd. 27 de Febrero 2439, Santa Fe","+54 341 4331330","Ingles - Portugués - Italiano - Francés","img/sede4.jpg")
]

$(document).ready(function(){
    
})

function filtrar(){
  let provinciaElegida = $("#provincias").val();
  let provinciasFiltradas = [];
    if (provinciaElegida == " ") {
        provinciasFiltradas = establecimientos.filter(function (establecimiento) {
            return establecimiento=establecimientos;
        })
    }
    else if (provinciaElegida == "BsAs") {
        provinciasFiltradas = establecimientos.filter(function (establecimiento) {
            return establecimiento.provincia == "Buenos Aires";
        })
    } else if (provinciaElegida == "SantaFe") {
        provinciasFiltradas = establecimientos.filter(function (establecimiento) {
            return establecimiento.provincia == "Santa Fe";
        })
    } else if (provinciaElegida == "Cordoba") {
        provinciasFiltradas = establecimientos.filter(function (establecimiento) {
            return establecimiento.provincia == "Cordoba";
        })
    }




$("#contenedor-provincias").empty();
$("#contenedor-provincias").append(
    provinciasFiltradas.map(function (institucion) {
        return `
        <h2 class="subtitulo-establecimiento">${institucion.nombre} </h2>
        <section class="contenedor-main">
      <div >
          <img  src="${institucion.url}"  class="imagen-sede"alt="">
      </div>
      <div class="informacion-establecimiento">
          <p>
             Provincia: ${institucion.provincia}<br>Dirección: ${institucion.direccion} <br> Telefono: ${institucion.telefono}<br> Idiomas que se dictan: ${institucion.idioma}
          </p>
          <a class="boton" href="detalles-de-establecimientos.html">Ver detalles</a>
      </div>
  </section>
        
        `
    })
);
}




