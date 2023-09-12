function validarPalabra() {
    const palabraInput = document.getElementById("palabra").value;
    const resultadoElement = document.getElementById("resultado");
  
    
  
    if (/^[A-Z]/.test(palabraInput)) {
      resultadoElement.textContent = "La palabra comienza con Mayuscula.";
    } else if (/^[a-z]/.test(palabraInput)) {
      resultadoElement.textContent = "La palabra comie6  nza con minuscula.";
    } else if (/^\d/.test(palabraInput)) {
      resultadoElement.textContent = "La palabra comienza con numero.";
    } else {
      resultadoElement.textContent = "La palabra no es valida.";
    }
  }
 
  
  
  
  
  