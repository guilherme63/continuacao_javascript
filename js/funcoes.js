function trocaImagem() {
	document.getElementById("myImage").src="img/aberta.jpg"; 				
}
function imagemTroca() {
	document.getElementById("myImage").src="img/fechada.jpg";
}	

function trocaFonteMaior() {
	document.getElementById("demo").style.fontSize="35px";
}	

function trocaFonteMenor() {
	document.getElementById("demo").style.fontSize="16px";
}	

function olcutarElemento() {
	document.getElementById("demo").style.display="none";
}	

function naoOlcutarElemento() {
	document.getElementById("demo").style.display="block";
}	

function calcular() {
	var total = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);
	window.alert(total);
}

