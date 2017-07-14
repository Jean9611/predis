
function mostrarMensajeConfirmacion(mensaje,mensajeConfirmacion){
	var r = confirm(mensaje);
	if (r == true) {
	    mostrarMensaje(mensajeConfirmacion);
	} 
}
function mostrarMensajeConfirmacion2(mensaje,mensajeConfirmacion){
	var r = confirm(mensaje);
	if (r == true) {
	    alert(mensajeConfirmacion);
	} 
}

function mostrarMensaje(mensaje){
	alert(mensaje);
	reDirect('menu.html');
}

function reDirect(url){
	window.location.href = url;
}

function cargar_datos_req_fun_11(){
	$("#lugar").val("Guatemala");
  	$('#fecha').val("12/08/2017");
  	$('#hora').val("6:00 p.m.");
}

function cargar_datos_req_fun_4_A1(){
	$("#codigo").text("AYCCE-00001-2017");
}

function cargar_datos_req_fun_4_A2(){
	$("#datepicker1").val("20/07/2017");
	$("#datepicker2").val("23/07/2017");
	$("#datepicker3").val("24/07/2017");
	$("#datepicker4").val("26/07/2017");
	$("#datepicker5").val("28/07/2017");
	$("#datepicker6").val("30/07/2017");
	$("#datepicker7").val("01/07/2017");
	$("#datepicker8").val("02/08/2017");
	$("#datepicker9").val("03/08/2017");
}

function cargar_datos_req_fun_5(){
	cargar_datos_req_fun_4_A2();
	$("#estado").text("Creado");
}

function cargar_datos_req_fun_6(){
	$("#nombre").val("Nombre");
	$("#puesto").val("Puesto");
}

function cargar_datos_req_fun_1_A2(){
	$("#datepicker").val("20/07/2017");
	$("#observaciones").val("aqui van las observaciones");
}

function cargar_datos_req_fun_2_A2(){
	$("#nombre").val("Directriz 1");
	$("#def").val("Definicion de la directriz...");
}

function habilitar(){
	document.getElementById("input1").disabled = false;
	document.getElementById("input2").disabled = false;
	document.getElementById("input3").disabled = false;
	$("#input1").val("");
	$("#input2").val("");
	$("#input3").val("");
}

function cargar_datos_req_fun_2_A22(){
	document.getElementById("input1").disabled = false;
	document.getElementById("input2").disabled = false;
	document.getElementById("input3").disabled = false;
	$("#input1").val("Nombre Criterio");
	$("#input2").val("texto");
	$("#input3").val("texto");
}
