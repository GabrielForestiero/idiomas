let regexEmail= /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
let regexNumeros = /^[0-9]{8}$/;
let regexLetras = /^[a-zA-Z]+$/;


$(document).ready(function(){
    $("#form").submit(function(e){
        validar(e);

        $("#mensaje").append("<p>Envio exitoso!</p>")
    });
    $("#nombre, #apellido, #mail, #tel").keyup(function(){
        validar();
    });
    $("#txaMessage").on('keypress', function() {
        var limit = 1000;
        $("#txaMessage").attr('maxlength', limit);
        var init = $(this).val().length;
        
        if(init<limit){
          init++;
          $('#caracteres').text("Máximo 1000 caracteres:" + init); 
        }
    });
});
    
    function validar (e){
        let error = false;
        $("#mensaje").empty(); //para que no me tire muchos mensajes iguales
        $("#form input, #form select").removeClass(); //para cuando vuelva a validad se remueva el mensaje de error (casillero rojo)
        if($("#nombre").val()==""){ //si nombre esta vacio, error es verdadero
            error = true;
            $("#mensaje").append("<p>El campo nombre es obligatorio </p>"); //con append agrego la etiqueta p y su mensaje
            $("#nombre").addClass("error"); //para que te alerte el error en rojo
        }
        if($("#apellido").val()==""){ 
            error = true;
            $("#mensaje").append("<p>El campo apellido debe ser obligatorio</p>"); //con append agrego la etiqueta p y su mensaje
            $("#apellido").addClass("error");
        }
    
        if(!$("#mail").val().match(regexEmail)){
            error=true;
            $("#mensaje").append("<p>Ingrese un email válido</p>")
            $("#mail").addClass("error");
        }
        
        if(!$("#tel").val().match(regexNumeros)){
            error=true;
            $("#mensaje").append("<p>Ingrese un numero válido</p>")
            $("#tel").addClass("error");
        }
    
    
        if (error){
            e.preventDefault();
        }
        
       
    }