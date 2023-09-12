
function validarNombre(nombre) {
    
    if (nombre.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres");
      return false;
    }
  
    
    if (/[0-9]/.test(nombre)) {
      alert("El nombre no debe contener números");
      return false;
    }
  
    return true;
  }
  
  function validarApellido(apellido) {
    
    if (apellido.length < 3) {
      alert("El apellido debe tener al menos 3 caracteres");
      return false;
    }
  
   
    if (/[0-9]/.test(apellido)) {
      alert("El apellido no debe contener números");
      return false;
    }
  
    return true;
  }
  
  function validarEmail(email) {
    
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}<span class="math-inline">/;
  return regex.test(email);
  
}
  function validarTelefono(telefono) {
  
  if (telefono.length !== 10) {
  alert("El teléfono debe tener 10 dígitos");
  return false;
  }

  
  
  function validarFechaNacimiento(fechaNacimiento) {
    
    const fecha = new Date(fechaNacimiento);
    if (fecha.getFullYear() < 1900 || fecha.getFullYear() > new Date().getFullYear()) {
      alert("La fecha de nacimiento no es válida");
      return false;
    }
  
    return true;
  }
  
  function validarGrupoSanguineo(grupoSanguineo) {

    const gruposSanguineos = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
    if (!gruposSanguineos.includes(grupoSanguineo)) {
      alert("El grupo sanguíneo no es válido");
      return false;
    }
  
    return true;
  }
  
  function validarGenero(genero) {
    
    const generos = ["masculino", "femenino"];
    if (!generos.includes(genero)) {
      alert("El género no es válido");
      return false;
    }
  
    return true;
  }
  
  function validarActividadesFavoritas(actividadesFavoritas) {
    
    const actividadesValidas = ["futbol", "baloncesto", "voleibol", "ciclismo"];
    const actividadesSeleccionadas = actividadesFavoritas.split(",");
  
   
    if (actividadesSeleccionadas.length === 0) {
      alert("Debe seleccionar al menos una actividad favorita");
      return false;
    }
  
    
    for (const actividad of actividadesSeleccionadas) {
      if (!actividadesValidas.includes(actividad)) {
        alert("La actividad " + actividad + " no es válida");
        return false;
      }
    }
  
    return true;
  }
  
  
  
  function registrar() {
   
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
}
}