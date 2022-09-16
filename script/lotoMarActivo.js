$(document).ready(function(){
    var jugada=[];
    
    $("#b_sorteo1").click(function() {
        if ($('#sorteo1').is(':visible')) {
            $('#sorteo1').hide();
        } else {
            $('#sorteo1').show();
        }
     });
    $("#b_sorteo2").click(function() {
        if ($('#sorteo2').is(':visible')) {
            $('#sorteo2').hide();
        } else {
            $('#sorteo2').show();
        }
    });
    $("#b_cerrar1").click(function() {
        $('#sorteo1').hide();
    });
    $("#b_jugar1").click(function() {
        $("#modal-jugada").empty();
        jugada.forEach(element => {
            var $el = $("img[name="+element+"]").clone();
            $("#modal-jugada").append($el);
        });
        
    });
    $("#b_cerrar2").click(function() {
        $('#sorteo2').hide();
    });

    //Seleccion del boton del animal
    $(".img-animal").click(function(){
        if(!$(this).hasClass("img-selected")) {
            $(this).addClass("img-selected");
            //tomar id para agregarlo a jugada
            jugada.push($(this).attr('name'));
        }
    });

});