const express = require("express");
const cors = require('cors');

class Server {
  constructor() {
    this.app = express();
      this.port = process.env.PORT;
      this.usuariosRouter = '/api/usuarios';
      
    //Middlewares -- Aplicaciones que se ejecutan cuando se levanta el servidor
      this.middlewares();
      
      
      //Rutas del APP 
    this.routes();
    }
    
    middlewares() {
        // Cors
        this.app.use(cors());
        
        //Lectura y parseo del body
        this.app.use(express.json());
        
        // Directorio público
        this.app.use(express.static('public'));

    }

  routes() {
      this.app.use(this.usuariosRouter, require('../src/routes/usuarios.route'));
      
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto:${this.port}`);
    });
  }
}

module.exports = Server;
