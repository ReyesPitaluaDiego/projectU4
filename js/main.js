// Función menu tablet - movil
$("#icon_menu_movil").click(function() {
    $(".menu").toggleClass("abrirmenu");
});

// Función para slide de fotos - SLIDE,index
$(function() {
    $("#slide3").responsiveSlides({
      auto: true,
      pager: true,
      nav: true,
      speed: 500,
      timeout: 20000,
      namespace: "centered-btns"
    });
});

// Función para carrousel - SERVICES,index
$(document).ready(function()
		{
			$('#services_carrousel').tinycarousel();
		});
// Función para carrousel - NEWS,index
$(document).ready(function()
		{
			$('#news_carrousel').tinycarousel();
		});
// Función para carrousel - TESTIMONIAL,about
$(document).ready(function()
		{
			$('#testimonials_carrousel').tinycarousel();
		});

// Función de acordeon - SERVICIOS,services
$(".titulo_service").click(function(){
    var t = $(this);
    var tp = t.next();
    tp.slideToggle();
});
$("#s1").click(function(){
    $("#icon_more_service1").toggleClass("giraricon");
});
$("#s2").click(function(){
    $("#icon_more_service2").toggleClass("giraricon");
});
$("#s3").click(function(){
    $("#icon_more_service3").toggleClass("giraricon");
});
$("#s4").click(function(){
    $("#icon_more_service4").toggleClass("giraricon");
});
$("#s5").click(function(){
    $("#icon_more_service5").toggleClass("giraricon");
});
$("#s6").click(function(){
    $("#icon_more_service6").toggleClass("giraricon");
});

//Función para subir
$(document).ready(function () {
    $("#subir").click(function () { 
        $("html,body").animate(
            {
                scrollTop: "0px",
            },
            600
        );
    });
});


// Variables
var modal = document.getElementById("modal");
var abrir1 = document.getElementById("btn_header");
var abrir2 = document.getElementById("btn_footer");
var cerrar = document.getElementById("close_modal");

// funciones para el modal
abrir1.onclick = function(){
    modal.style.display = "block";
};
abrir2.onclick = function(){
    modal.style.display = "block";
};
cerrar.onclick = function(){
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// VALIDACIÓN FORM
function validacion_form() {
    if (document.formulario.nombre.value.length==0) {
      alert("Ingrese su nombre.")
      document.formulario.nombre.focus()
      return 0;
    }
    if (document.formulario.email.value.length==0) {
      alert("Ingrese su correo")
      document.formulario.email.focus()
      return 0;
    }
    if (document.formulario.telefono.value.length==0) {
      alert("Ingrese un télefono")
      document.formulario.telefono.focus()
      return 0;
    }
    if (document.formulario.mensaje.value.length==null) {
      alert("¿Te crees muy chistoso?, Pon algún comentario!")
      document.formulario.mensaje.focus()
      return 0;
    }
    document.formulario.submit();
  }
