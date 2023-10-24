const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

function validarFormulario() {
	var nombre = document.getElementById("nombre").value;
	var email = document.getElementById("email").value;
	var mensaje = document.getElementById("mensaje").value;

	if (nombre === "" || email === "" || mensaje === "") {
		alert("Por favor, completa todos los campos.");
		return false;
	}

	var expresion = /^[a-zA-Z]+$/;  

    if (!expresion.test(nombre)) {
        alert("El campo 'nombre' no debe contener caracteres numéricos.");
        return false;
    }

	var expresionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!expresionEmail.test(email)) {
		alert("El correo electrónico no tiene un formato válido.");
		return false;
	}

	if (mensaje.trim() === "") {
		alert("El campo 'mensaje' no puede ser solo espacios en blanco.");
		return false;
	}

	return true;
}
