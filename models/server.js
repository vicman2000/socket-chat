const express = require("express");

class Server {
  constructor() {
    this.app = express();
        this.port = process.env.PORT;
      
    //Middlewares -- Aplicaciones que se ejecutan cuando se levanta el servidor
      this.middlewares();
      
      //Rutas del APP 
    this.routes();
    }
    
    middlewares() {
        this.app.use(express.static('public'));
    }

  routes() {
    this.app.get("/api", (req, res) => {
      res.send("Hola desde Api");
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto:${this.port}`);
    });
  }
}

module.exports = Server;
