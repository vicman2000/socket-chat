const socket = io();

const params = new URLSearchParams( window.location.search );

if(!params.has('nombre') || !params.has('sala')){
    window.location= 'index.html';
    throw new Error('Server-Chat - El nombre y sala son requeridos');
}


const usuario = {
    nombre: params.get('nombre'),
    sala:   params.get('sala')
}


/** */
socket.on('connect', () => {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, ( resp )=> {
        console.log('usuarios conectados..: ', resp );
    });

});


// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', (mensaje) => {

    console.log('Servidor:', mensaje);

});

/**Escuchar cuando una persona entre y sale del Chat */
socket.on('listaPersonas', ( personas )=>{
    console.log( personas );
})


/**Mensajes privados */
socket.on('mensajePrivado', ( mensaje ) =>{
    console.log('Mensaje privado', mensaje);
})


