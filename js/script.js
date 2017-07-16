
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

function habilitar(){
	document.getElementById("input1").disabled = false;
	document.getElementById("input2").disabled = false;
	document.getElementById("input3").disabled = false;
	$("#input1").val("");
	$("#input2").val("");
	$("#input3").val("");
}

function cargar_datos_req_fun_1_A2(){
	$("#datepicker").val("20/07/2017");
	$("#observaciones").val("aqui van las observaciones");
}

function cargar_datos_req_fun_2_A2(){
	$("#nombre").val("Directriz 1");
	$("#def").val("Definicion de la directriz...");
}

function cargar_datos_req_fun_2_A22(){
	document.getElementById("input1").disabled = false;
	document.getElementById("input2").disabled = false;
	document.getElementById("input3").disabled = false;
	$("#input1").val("Nombre Criterio");
	$("#input2").val("texto");
	$("#input3").val("texto");
}


function cargar_datos_req_fun_3(){
	var grupo = document.getElementById("grupo");
	$("#numero").text(grupo.options[grupo.selectedIndex].value);
	$("#nombre").text("Administración del SGIC");
	$("#definición").text("Es la forma que se identifica, planifican y gestionan los procesos educativos");
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
	document.getElementById("nombre").disabled = false;
	document.getElementById("puesto").disabled = false;
	$("#nombre").val("Nombre");
	$("#puesto").val("Puesto");
}

function cargar_datos_req_fun_7_A1(){
	$("#codigo").val("0001");
}

function cargar_datos_req_fun_7_A2(){
	document.getElementById("nombre").disabled = false;
	document.getElementById("cui").disabled = false;
	document.getElementById("correo").disabled = false;
	document.getElementById("select1").disabled = false;
	document.getElementById("select2").disabled = false;
	$("#nombre").val("Nombre del Técnico");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("correo1@gmail.com");
	$('#select1').children('option:first').text('Técnico');
	$('#select2').children('option:first').text('Dirección #');
}

function cargar_datos_req_fun_7_A3(){
	$("#nombre").val("Nombre del Técnico");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("correo1@gmail.com");
	$('#select1').children('option:first').text('Técnico');
	$('#select2').children('option:first').text('Dirección #');
}

function cargar_datos_req_fun_11(){
	$("#lugar").val("Guatemala");
  	$('#fecha').val("12/08/2017");
  	$('#hora').val("6:00 p.m.");
}

function cargar_datos_req_fun_19(){
	var grupo = document.getElementById("dep");
	var text = grupo.options[grupo.selectedIndex].value;
	var text1 = $("#agregados").text();
	if(text1 == ""){
		$("#agregados").text(text);
	}else{
		$("#agregados").text(text1+", "+text);
	}
}

function cargar_mensaje_req_fun_19(){
	var grupo = document.getElementById("select");
	var text = grupo.options[grupo.selectedIndex].value;
	if(text == ""){
		$("#vista_previa").text('Por favor, seleccione un tipo de mensaje por iniciar');
	}else{
		$("#vista_previa").text("Se le informa que el tiempo de la fase actual del proceso de Acreditación y certificación ha concluido y se inicia la fase de " + text);
	}
}

function cargar_datos_req_fun_23(){
	document.getElementById("tecnico").disabled = false;
	document.getElementById("fecha").disabled = false;
	document.getElementById("hora").disabled = false;
	$("#tecnico").val("Tecnico asignado");
  	$('#fecha').val("12/08/2017");
  	$('#hora').val("6:00 p.m.");
}

function cargar_datos_req_fun_30(){
	document.getElementById("justificacion").disabled = false;
	document.getElementById("file").disabled = false;
	$("#nombre").val("Nombre centro educativo");
  	$('#depto').val("Guatemala");
  	$('#muni').val("Guatemala");
	$("#estado").val("En Proceso");
}

function cargar_datos_req_fun_20_A2(){
	document.getElementById("nombre").disabled = false;
	document.getElementById("cui").disabled = false;
	document.getElementById("correo").disabled = false;
	document.getElementById("depto").disabled = false;
	document.getElementById("cel").disabled = false;
	$("#nombre").val("Nombre del Técnico");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("correo1@gmail.com");
	$('#cel').val('55555555');
	$('#depto').children('option:first').text('Departamento #');
}

function cargar_datos_req_fun_20_A3(){
	$("#nombre").val("Nombre del Técnico");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("correo1@gmail.com");
	$('#cel').val('55555555');
	$('#depto').children('option:first').text('Departamento #');
}