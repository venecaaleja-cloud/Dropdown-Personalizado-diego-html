// 1. Seleccionamos los elementos del DOM
const contenedorDesplegable = document.querySelector('.contenedor-desplegable');
const botonDesplegable = document.getElementById('botonDesplegable');
const menuDesplegable = document.getElementById('menuDesplegable');
const textoSeleccionado = document.getElementById('textoSeleccionado');
const elementosLista = document.querySelectorAll('.elemento-lista');

// 2. Evento: Abrir/Cerrar el menú al hacer clic en el botón
botonDesplegable.addEventListener('click', (evento) => {
    // Evitamos que el clic se propague al documento 
    // (para que no se cierre inmediatamente)
    evento.stopPropagation();
    
    // Alternamos la clase 'abierto' en el contenedor
    contenedorDesplegable.classList.toggle('abierto');
});

// 3. Evento: Seleccionar un elemento de la lista
elementosLista.forEach(elemento => {
    elemento.addEventListener('click', () => {
        // Obtenemos el texto del elemento clickeado
        const valor = elemento.getAttribute('data-valor');
        
        // Actualizamos el texto del botón (Estado Seleccionado)
        textoSeleccionado.textContent = valor;
        
        // Quitamos la clase 'seleccionado' de todos los elementos
        elementosLista.forEach(i => i.classList.remove('seleccionado'));
        
        // Añadimos la clase 'seleccionado' al elemento clickeado (Muestra el check)
        elemento.classList.add('seleccionado');
        
        // Cerramos el menú
        contenedorDesplegable.classList.remove('abierto');
    });
});

// 4. Evento: Cerrar el menú si se hace clic fuera de él
document.addEventListener('click', (evento) => {
    // Si el clic NO fue dentro del contenedor del desplegable, lo cerramos
    if (!contenedorDesplegable.contains(evento.target)) {
        contenedorDesplegable.classList.remove('abierto');
    }
});