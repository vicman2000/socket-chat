

class Usuarios {

    constructor(){
        this.personas = []
    }

    agregarPersona( id, nombre, sala){
        let persona = { id, nombre, sala};
        this.personas.push( persona );

        return this.personas;
    }

    getPersona( id ){
        let persona = this.personas.filter( persona => persona.id === id)[0]; // El [0] indica que solo trae un registro .. es como el top de sql
        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala ( sala ){
        let personasEnSala = this.personas.filter( persona => persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona( id ){
        let personaBorrada = this.getPersona( id );
        this.personas = this.personas.filter( persona => persona.id != id ); // Recarga el arreglo sin la persona borrada
        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}