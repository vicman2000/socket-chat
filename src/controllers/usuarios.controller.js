
const { response } = require('express');

const usuariosGet = (req, res) => {
   
      res.json({
          msg: 'get API - Controlador'
      })
}

const usuariosGetbyParams = (req, res) => {
    
    const  { q, nombre = 'No name', page = 1, limit=10 } = req.params;

   
      res.json({
          msg: 'getbyParams API - Controlador con parametros en la Url',
          q,
          nombre,
          page,
          limit
      })
}

const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.status(200).json({
            msg: 'put API - Controlador',
            id
        })
};

  
const usuariosPost = (req, res) => {
    //const body = req.body;

    const { nombre , edad } = req.body;
    
      res.status(201).json({
          msg: 'post API desde controlador',
          nombre: nombre,
          edad: edad
      })
};
  

const usuariosDelete = (req, res) => {
      res.json({
          msg: 'delete API desde controlador'
      })
  };
  
const usuariosPatch = (req, res) => {
      res.json({
          msg: 'patch API - desde controlador'
      })
};






module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosGetbyParams
}