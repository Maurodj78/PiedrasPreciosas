const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 700;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}

// Obtén una referencia al formulario y al botón de conversión
const conversionForm = document.getElementById('conversionForm');
const convertButton = document.getElementById('convertButton');
const amountInput = document.getElementById('amountInput');

// Función de conversión
function convertToUSD(amountInARS) {
  const apiKey = 'ecb5cd4e452e4a82f7a01458eb3f79e9'; // Reemplaza 'TU_CLAVE_API' con tu clave de API

  // Construye la URL de la solicitud
  const apiUrl = `https://data.fixer.io/api/convert?access_key=${apiKey}&from=ARS&to=USD&amount=${amountInARS}`;

  // Realiza la solicitud GET
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        const convertedAmount = data.result; // El resultado de la conversión
        console.log(`${amountInARS} ARS equivale a ${convertedAmount} USD`);
        // Puedes mostrar el resultado en tu página web aquí
      } else {
        console.error('Error en la solicitud a la API de Fixer');
      }
    })
    .catch(error => {
      console.error('Error de red:', error);
    });
}

// Agrega un evento de envío del formulario
conversionForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Previene la acción predeterminada del formulario (recargar la página)
  
  const amountInARS = parseFloat(amountInput.value); // Obtén la cantidad ingresada por el usuario

  if (!isNaN(amountInARS)) {
    convertToUSD(amountInARS); // Llama a la función de conversión con la cantidad ingresada
  } else {
    console.error('Ingrese una cantidad válida en pesos argentinos.');
  }
});


