const { io } = require('../server');
const { Usuarios } = require('../classes/usuarios');
const { crearMensaje } = require('../utilidades/utilidades');



const usuarios = new Usuarios();

io.on('connection', (client) => {

    /** */
    client.on('entrarChat', ( data, callback ) =>{


        if( !data.nombre || !data.sala ){
            return callback({
                error: true,
                mensaje: 'Nombre/sala es requerido'
            });
        }

        client.join( data.sala ); /**Se conecta a una sala */

        usuarios.agregarPersona( client.id, data.nombre, data.sala );

        //client.broadcast.emit('listaPersonas', usuarios.getPersonas() ); // emite mensaje a todas las pesonas conectadas al chat
        client.broadcast.to(data.sala).emit('listaPersonas', usuarios.getPersonasPorSala(data.sala) );

        callback( usuarios.getPersonasPorSala( data.sala ));

    });


    /**Crear mensaje a todos los participantes */
    client.on('crearMensaje', ( data )=>{

        let persona = usuarios.getPersona( client.id );
        let mensaje = crearMensaje( persona.nombre, data.mensaje);
        client.broadcast.to(persona.sala).emit('crearMensaje', mensaje );
    })

    /** */
    client.on('disconnect', () =>{
        let personaBorrada = usuarios.borrarPersona( client.id );
        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('administrador', `${personaBorrada.nombre} abandono el chat`))
        client.broadcast.to(personaBorrada.sala).emit('listaPersonas', usuarios.getPersonasPorSala(personaBorrada.sala) );
    });


    /**Mensaje privado */
    client.on('mensajePrivado',  data =>{
        let persona = usuarios.getPersona( client.id );
        client.broadcast.to(data.para).emit( 'mensajePrivado', crearMensaje(persona.nombre, data.mensaje ));
    });


});