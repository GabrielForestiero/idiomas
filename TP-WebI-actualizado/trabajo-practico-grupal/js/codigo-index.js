

$(document).ready(()=>{
    $("#textos article").hide();
    $("#provincias , #establecimientos").change(()=>{
        filtrarDatos();
    });

});

function filtrarDatos(){
    const provincias=$("#provincias").val();
    const establecimientos=$("#establecimientos").val();

    $("#textos article").hide();


   
   $("#textos ."+provincias+"."+establecimientos).show();

   
}