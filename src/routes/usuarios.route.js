
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch, usuariosGetbyParams } = require('../controllers/usuarios.controller');
const router = Router();

router.get("/", usuariosGet);
router.get("/params", usuariosGetbyParams);
router.put("/:id", usuariosPut);
router.post("/", usuariosPost);
router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);

  
    


module.exports = router;