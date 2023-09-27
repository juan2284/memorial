document.addEventListener('DOMContentLoaded', () => {

  // Funcionalidad para el botón eliminar de Mensajes y Fotos
  const btnEliminarMensaje = document.querySelectorAll('button#eliminarMensaje');
  const btnEliminarFoto = document.querySelectorAll('button#eliminarFoto');

  if (btnEliminarMensaje !== null) {
    btnEliminarMensaje.forEach(boton => {
      boton.addEventListener('click', (e) => {      
        const confirmar = confirm('¿Deseas eliminar este registro?');        
      
        if (confirmar) {
          window.location = `/admin/mensaje/${(e.target.dataset.cliente)}/del`;
        } else {
          window.location = `/admin/testimoniales`;
        }
      });
    });
  }
  
  if (btnEliminarFoto !== null) {
    btnEliminarFoto.forEach(boton => {
      boton.addEventListener('click', (e) => {      
        const confirmar = confirm('¿Deseas eliminar este registro?');       

        if (confirmar) {
          window.location = `/admin/foto/${(e.target.dataset.cliente)}/del`;
        } else {
          window.location = `/admin/fotos`;
        }
      });
    });
  }

  // Funcionalidad para el botón publcar de Mensajes
  const btnPublicar = document.querySelectorAll('button#publicar');

  btnPublicar.forEach(boton => {
    boton.addEventListener('click', (e) => {
    
      const confirmar = confirm('¿Deseas publicar este registro?');
      
      if (confirmar) {
        window.location = `/admin/mensaje/${(e.target.dataset.cliente)}/pub`;
      } else {
        window.location = `/admin/testimoniales`;
      }
    });    
  });

  // Menú hamburguesa
  const menu = document.querySelector('.menu');
  const botonMenu = document.querySelector('#boton-menu');
  const botonCerrar = document.querySelector('#boton-cerrar');

  if (botonMenu !== null) {
    botonMenu.addEventListener('click', () => {
      botonMenu.classList.add('d-none');
      botonCerrar.classList.remove('d-none');
      menu.classList.add('transicion');
    });
  
    botonCerrar.addEventListener('click', () => {
      botonMenu.classList.remove('d-none');
      botonCerrar.classList.add('d-none');
      menu.classList.remove('transicion');
    });    
  }

  // Sección de validación del formulario de historias
  // Seleccionar los elementos de la interfaz
  const pagina = document.querySelector('.contacto');  
  if (pagina !== null) {
    const inputNombre = document.querySelector('#name');
    const inputEmail = document.querySelector('#email');
    const inputMensaje = document.querySelector('#message');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');
  
    // Objeto de carga a la BDD
    const nuevoEmail = {
      name: '',
      email: '',
      message: ''
    }
  
    // Limpiar los campos del formulario
    inputNombre.value = '';
    inputEmail.value = '';
    inputMensaje.value = '';
    
    // Añadir EventListeners, validar los campos y habilitar o deshabilitar los botones del formulario según la validación
    inputNombre.addEventListener('blur', (e) => {
      validar(e, nuevoEmail, btnSubmit, pagina);
    });
    habilitarSubmit(nuevoEmail, btnSubmit, pagina);
    inputEmail.addEventListener('blur',  (e) => {
      validar(e, nuevoEmail, btnSubmit, pagina);
    });
    habilitarSubmit(nuevoEmail, btnSubmit, pagina);
    inputMensaje.addEventListener('blur',  (e) => {
      validar(e, nuevoEmail, btnSubmit, pagina);
    });
    habilitarSubmit(nuevoEmail, btnSubmit, pagina);
    btnReset.addEventListener('click', () => {
      resetFormulario(nuevoEmail, btnSubmit, formulario, pagina);
    });
    
    habilitarSubmit(nuevoEmail, btnSubmit, pagina);
  }

  // Sección de validación del formulario de login
  // Seleccionar los elementos de la interfaz
  const paginaLogin = document.querySelector('.login');
  if (paginaLogin !== null) {
    const inputUser = document.querySelector('#user');
    const inputPassword = document.querySelector('#pass');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');

    // Objeto de carga a la BDD
    const nuevoEmail = {
      user: '',
      pass: ''
    }
  
    // Limpiar los campos del formulario
    inputUser.value = '';
    inputPassword.value = '';

    // Añadir EventListeners, validar los campos y habilitar o deshabilitar los botones del formulario según la validación
    inputUser.addEventListener('blur', (e) => {
      validar(e, nuevoEmail, btnSubmit, paginaLogin);
    });
    habilitarSubmit(nuevoEmail, btnSubmit, paginaLogin);
    inputPassword.addEventListener('blur', (e) => {
      validar(e, nuevoEmail, btnSubmit, paginaLogin);
    });
    habilitarSubmit(nuevoEmail, btnSubmit, paginaLogin);
    btnReset.addEventListener('click', () => {
      resetFormulario(nuevoEmail, btnSubmit, formulario, paginaLogin);
    });
    
    habilitarSubmit(nuevoEmail, btnSubmit, paginaLogin);
  }



  // Sección de validación del formulario de editar mensajes
  // Seleccionar los elementos de la interfaz
  const paginaEditarMensaje = document.querySelector('.edit-mensaje');
  if (paginaEditarMensaje !== null) {
    const textMessage = document.querySelector('#message');
    const textParrafo1 = document.querySelector('#parrafo_1');
    const textParrafo2 = document.querySelector('#parrafo_2');
    const textParrafo3 = document.querySelector('#parrafo_3');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');
    
    // Rellenar los campos para editar
    textMessage.value = message.dataset.message;
    textParrafo1.value = parrafo_1.dataset.message;
    textParrafo2.value = parrafo_2.dataset.message;
    textParrafo3.value = parrafo_3.dataset.message;

    // Esto es para la validación del formulario
    const nuevoMensaje = {
      message: message.dataset.message,
      parrafo_1: parrafo_1.dataset.message,
      parrafo_2: parrafo_2.dataset.message,
      parrafo_3: parrafo_3.dataset.message
    }

    // Añadir EventListeners, validar los campos y habilitar o deshabilitar los botones del formulario según la validación
    btnReset.addEventListener('click', () => {
      resetFormulario(nuevoMensaje, btnSubmit, formulario, paginaEditarMensaje);
    });
    
    habilitarSubmit(nuevoMensaje, btnSubmit, paginaEditarMensaje);

  }

  // Sección de validación del formulario de editar fotos
  // Seleccionar los elementos de la interfaz
  const paginaEditarFoto = document.querySelector('.edit-foto');
  if (paginaEditarFoto !== null) {
    const tipo = document.querySelector('#tipo');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#alt');
    const ruta = document.querySelector('#ruta');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');

    // Rellenar los campos para editar
    tipo.value = tipo.dataset.tipo;
    nombre.value = nombre.dataset.nombre;
    descripcion.value = descripcion.dataset.alt;
    ruta.value = ruta.dataset.ruta;

    // Esto es para la validación del formulario
    const nuevaFoto = {
      tipo: tipo.dataset.tipo,
      nombre: nombre.dataset.nombre,
      alt: descripcion.dataset.alt,
      ruta: ruta.dataset.ruta
    }

    // Añadir EventListeners, validar los campos y habilitar o deshabilitar los botones del formulario según la validación
    tipo.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaEditarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaEditarFoto);
    nombre.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaEditarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaEditarFoto);
    descripcion.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaEditarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaEditarFoto);
    ruta.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaEditarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaEditarFoto);
    btnReset.addEventListener('click', () => {
      resetFormulario(nuevaFoto, btnSubmit, formulario, paginaEditarFoto);
    });
    
    habilitarSubmit(nuevaFoto, btnSubmit, paginaEditarFoto);
  }

  // Sección de validación del formulario de agregar foto
  // Seleccionar los elementos de la interfaz
  const paginaAgregarFoto = document.querySelector('.agrega-foto');
  if (paginaAgregarFoto !== null) {
    const tipo = document.querySelector('#tipo');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#alt');
    const ruta = document.querySelector('#ruta');
    const archivo = document.querySelector('#archivo');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#enviar-mail button[type="submit"]');
    const btnReset = document.querySelector('#enviar-mail button[type="reset"]');

    // Limpiar los campos del formulario
    tipo.value = '';
    nombre.value = '';
    descripcion.value = '';
    ruta.value = '';
    archivo.value = '';

    // Esto es para la validación del formulario
    const nuevaFoto = {
      tipo: '',
      nombre: '',
      alt: '',
      ruta: ''
    }

    // Añadir EventListeners, validar los campos y habilitar o deshabilitar los botones del formulario según la validación
    tipo.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaAgregarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
    nombre.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaAgregarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
    descripcion.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaAgregarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
    ruta.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaAgregarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
    archivo.addEventListener('blur', (e) => {
      validar(e, nuevaFoto, btnSubmit, paginaAgregarFoto);
    });
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
    btnReset.addEventListener('click', () => {
      resetFormulario(nuevaFoto, btnSubmit, formulario, paginaAgregarFoto);
    });
    
    habilitarSubmit(nuevaFoto, btnSubmit, paginaAgregarFoto);
  }


  // Funciones de la validación del formulario

  // Habilita o deshabilita el botón enviar según se pase o no la validación
  function habilitarSubmit(objeto, boton, pagina){
    if (pagina !== undefined && pagina.classList.contains('edit-mensaje')) {
      boton.classList.remove('opacity-50');
      boton.classList.remove('no-hover');
      boton.disabled = false;
      return;
    }

    if (Object.values(objeto).includes('')) {
      boton.classList.add('opacity-50');
      boton.classList.add('no-hover');
      boton.disabled = true;
      return;
    }
    boton.classList.remove('opacity-50');
    boton.classList.remove('no-hover');
    boton.disabled = false;
  }

  // Función que verifica los campos del formulario para habilitar o deshabilitar el botón de enviar
  function validar(e, objeto, boton, pagina) {
    const campo = e.target.id;
  
    objeto[campo] = e.target.value;
    limpiarAlerta(e.target.parentElement);
  
    if (e.target.value.trim() === '') {
      mostrarAlerta(`Este campo no debe estar vacío.`, e.target.parentElement);
      habilitarSubmit(objeto, boton, pagina);
      return;
    }  
    if (e.target.id === 'email' && !validarEmail(e.target.value)) {
      mostrarAlerta('Por favor ingrese un email válido.', e.target.parentElement);
      objeto[campo] = '';
      habilitarSubmit(objeto, boton, pagina);
      return;
    }
    habilitarSubmit(objeto, boton, pagina);
  }

  // Función que crea una alerta en caso de que el campo obligatorio no esté lleno
  function mostrarAlerta(mensaje, referencia){
    limpiarAlerta(referencia);
  
    // Generar el HTML de la alerta
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-danger', 'text-white', 'p-2', 'text-center', 'mt-2');
  
    referencia.appendChild(error);
  }

  // Función que elimina la alerta en caso de que el campo haya sido rellenado debidamente 
  function limpiarAlerta(referencia){
    // Comprueba si ya existe una alerta
    const alerta = referencia.querySelector('.bg-danger');
    if (alerta) {
      alerta.remove();
    }
  }
  
  // Función que verifica que el email tenga un formato válido
  function validarEmail(email){
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  // Función para resetear el formulario completo
  function resetFormulario(objeto, boton, formulario, pagina){
    // Reiniciar el objeto
    Object.entries(objeto).forEach(([key, value]) => {
      objeto[key] = '';
    });
    
    formulario.reset();
    habilitarSubmit(objeto, boton, pagina);
  }
  
});