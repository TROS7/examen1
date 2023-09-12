
function mostrarInformacionUsuario() {
    const usuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#contraseña").value;
  
    console.log("Usuario: " + usuario);
    console.log("Contraseña: " + contraseña);
  }
  
  /
  document.querySelector("#btn-login").addEventListener("click", mostrarInformacionUsuario);
  document.querySelector("#btn-sign-up").addEventListener("click", function() {
    window.location.href = "sign.html";
  });
  document.querySelector("#btn-cancel").addEventListener("click", function() {
    window.location.href="index.html";
  });