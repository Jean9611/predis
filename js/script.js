
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

function mostrarMensaje2(mensaje){
	alert(mensaje);
	reDirect('req_fun_1.html');
}

function mostrarMensaje3(mensaje){
	alert(mensaje);
	reDirect('req_fun_2.html');
}

function reDirect(url){
	window.location.href = url;
}

function habilitar(){
	document.getElementById('divOculto').style.display ='inherit';
	$("#input1").val("");
	$("#input2").val("");
	$("#input3").val("");
}

function deshabilitar(){
	document.getElementById('divOculto2').style.display ='inherit';
	document.getElementById('divOculto').style.display ='none';
	$("#input1").val("");
	$("#input2").val("");
	$("#input3").val("");
}

function departamentos_req_fun_1(){
	document.getElementById("No.departamentos").disabled = false;
}

function cargar_datos_req_fun_1_A2(){
	document.getElementById("No.departamentos").disabled = false;
	$("#datepicker").val("20/07/2017");
	$("#observaciones").val("observaciones...");
	$("#No.departamentos").val("2");
}

function cargar_datos_req_fun_1_A3(){
	$("#datepicker").val("20/07/2017");
	$("#observaciones").val("observaciones...");
	$("#No.departamentos").val("9");
}

/*

 y plan de mejora

pedir codigo de centro escolar en el reporte, desplegar encabezado y luego ir a la tabla
*/
function cargar_datos_req_fun_2_A2(){
	document.getElementById("nombre").disabled = false;
	document.getElementById("def").disabled = false;
	$("#nombre").val("Administración del SGIC");
	$("#def").val("Es la forma en que se identifican, planifican, gestionan, aplican y mejoran los procesos educativos.");
}

function carga_datos_reporte_analisis(){
	document.getElementById('datos').style.display ='inherit';
}

function cargar_datos_req_fun_2_A3(){
	$("#nombre").val("Administración del SGIC");
	$("#def").val("Es la forma en que se identifican, planifican, gestionan, aplican y mejoran los procesos educativos.");
	document.getElementById('none1').style.display ='inherit';
}

function mostrarDiv1(){
	document.getElementById('none1').style.display ='inherit';
	document.getElementById('none2').style.display ='none';
	//document.getElementById('completar_revision').disabled =false;
	//document.getElementById('anterior').disabled =false;
}

function eliminar2A2(){
	var r = confirm('Seguro que desea eliminar el criterio?');
	if (r == true) {
		document.getElementById('none3').style.display ='inherit';
		$("#a").val("");
		$("#b").val("");
		$("#c").val("");

	}
}

function guardar2A2(){
	document.getElementById('none3').style.display ='inherit';
}

function mostrarDiv2(){
	document.getElementById('none2').style.display ='inherit';
	document.getElementById('none3').style.display ='inherit';
}

function guardarCriterio(){
	document.getElementById('none2').style.display ='none';
	document.getElementById('none3').style.display ='inherit';
}

/*
function siguiente_directriz_req_fun_18(){
	document.getElementById('directriz-2_req_fun_10').style.display ='inherit';
	document.getElementById('directriz_requ_fun_10').style.display ='none';
	document.getElementById('completar_revision').disabled =false;
	document.getElementById('anterior').disabled =false;
}*/

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
	document.getElementById('directriz').style.display ='inherit';
	$("#numero").text(grupo.options[grupo.selectedIndex].value);
	//$("#nombre").text("Administración del SGIC");
	//$("#definición").text("Es la forma que se identifica, planifican y gestionan los procesos educativos");
} 

var estado3 = 1;
function siguiente_directriz_req_fun_3(){
	if((estado3 > 0)&&(estado3 < 9)){
		estado3++;
		document.getElementById('imagen').src = "css/images/1" + estado3 + ".png";
	}
}

function anterior_directriz_req_fun_3(){
	if((estado3 > 1)&&(estado3 < 10)){
		estado3--;
		document.getElementById('imagen').src = "css/images/1" + estado3 + ".png";
	}
}


/*
function siguiente_directriz_req_fun_3(){
	document.getElementById('directriz-2').style.display ='inherit';
	document.getElementById('directriz').style.display ='none';
	document.getElementById('vista_previa').disabled =false;
} */

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
	$("#nombre").val("Manuel Alfonzo Tobillas");
	$("#puesto").val("Tecnico");
}

function cargar_datos_req_fun_7_A1(){
	$("#codigo").val("0001");
}

function rf7_A1(){
	var aceptacion = document.getElementById("rf71");
	if ((aceptacion.options[aceptacion.selectedIndex].value)=="A") 
		document.getElementById("depa").disabled = true;
	else
		document.getElementById("depa").disabled = false;
}

function cargar_datos_req_fun_7nuevo(){
	var grupo = document.getElementById("depa");
	var text = grupo.options[grupo.selectedIndex].text;
	var text1 = $("#agregados").text();
	if(text1 == ""){
		$("#agregados").text(text);
	}else{
		$("#agregados").text(text1+", "+text);
	}
}

function cargar_datos_req_fun_7_A2(){
	document.getElementById("nombre").disabled = false;
	document.getElementById("cui").disabled = false;
	document.getElementById("correo").disabled = false;
	document.getElementById("select1").disabled = false;
	document.getElementById("select2").disabled = false;
	$("#nombre").val("Manuel Alfonzo Tobillas");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("tobillas@gmail.com");
	$('#select1').children('option:first').text('Técnico');
	$('#select2').children('option:first').text('Guatemala Sur');
}

function cargar_datos_req_fun_7_A3(){
	$("#nombre").val("Manuel Alfonzo Tobillas");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("tobillas@gmail.com");
	$('#select1').children('option:first').text('Técnico');
	$('#select2').children('option:first').text('Guatemala Sur');
}

function cargar_datos_req_fun_11(){
	$("#lugar").val("Guatemala");
  	$('#fecha').val("12/08/2017");
  	$('#hora').val("6:00 p.m.");
}

var estado = 1;
function siguiente_directriz_req_fun_18(){
	if((estado > 0)&&(estado < 9)){
		estado++;
		document.getElementById('imagen').src = "css/images/" + estado + ".PNG";
	}
	
	/*document.getElementById('directriz-2_req_fun_10').style.display ='inherit';
	document.getElementById('directriz_requ_fun_10').style.display ='none';
	document.getElementById('completar_revision').disabled =false;
	document.getElementById('anterior').disabled =false;*/
}

function anterior_directriz_req_fun_18(){
	if((estado > 1)&&(estado < 10)){
		estado--;
		document.getElementById('imagen').src = "css/images/" + estado + ".PNG";
	}
	/*document.getElementById('directriz_requ_fun_10').style.display ='inherit';
	document.getElementById('directriz-2_req_fun_10').style.display ='none';
	document.getElementById('completar_revision').disabled =true;
	document.getElementById('anterior').disabled =true;*/
}

function observaciones_req_fun_18(){
	var aceptacion = document.getElementById("aceptacion");
	if ((aceptacion.options[aceptacion.selectedIndex].value)=="N") 
	document.getElementById('observaciones_req_fun_18').style.display ='inherit';
	else
		document.getElementById('observaciones_req_fun_18').style.display ='none';	
}

function cargar_datos_req_fun_19(){
	var grupo = document.getElementById("depa");
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
	$("#tecnico").val("Manuel Alfonzo Tobillas");
  	$('#fecha').val("12/08/2017");
  	$('#hora').val("6:00 p.m.");
}

function cargar_datos_req_fun_30_A1(){
	document.getElementById("justificacion").disabled = false;
	document.getElementById("file").disabled = false;
	$("#nombre").val("Escuela Oficial Rural Mixta");
  	$('#depto').val("Guatemala");
  	$('#muni').val("Guatemala");
	$("#estado").val("CE con certificación suspendida");
}

function cargar_datos_req_fun_30_A2(){
	document.getElementById("justificacion").disabled = false;
	document.getElementById("file").disabled = false;
	$("#nombre").val("Escuela Oficial Rural Mixta");
  	$('#depto').val("Guatemala");
  	$('#muni').val("Guatemala");
	$("#estado").val("CE certificado");
}

function cargar_datos_req_fun_20_A2(){
	document.getElementById("nombre").disabled = false;
	document.getElementById("cui").disabled = false;
	document.getElementById("correo").disabled = false;
	document.getElementById("depto").disabled = false;
	document.getElementById("cel").disabled = false;
	$("#nombre").val("Manuel Alfonzo Tobillas");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("correo1@gmail.com");
	$('#cel').val('55555555');
	$('#depto').children('option:first').text('Guatemala Sur');
}

function cargar_datos_req_fun_20_A3(){
	$("#nombre").val("Manuel Alfonzo Tobillas");
	$("#cui").val("2950 13000 0101");
	$("#correo").val("tobillas@gmail.com");
	$('#cel').val('55555555');
	$('#depto').children('option:first').text('Guatemala Sur');
}

function cargar_datos_req_fun_32_A2(){
	document.getElementById("des").disabled = false;
	document.getElementById("orden").disabled = false;
	$("#des").val("Descripción del tema");
	$("#orden").val("Orden de publicación...");
}

function cargar_datos_req_fun_32_A3(){
	$("#des").val("Descripción del tema");
	$("#orden").val("Orden de publicación...");
}