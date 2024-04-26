import express from "express";
import {
  getlogout,
  editarPerfil,
  eliminacionPerfil,
  subcategorias,
  servicios,
  getAllEmpresas,
  getuser,
} from "../controllers/user.controller.js";
import jwt from 'jsonwebtoken'

// esto es para poner rutas
const router = express.Router();

const verificarToken=(req,res, next)=>{
  const token = req.headers['authorization'];
  if (!token){
      return res.status(401).json({message: 'Token no proporcionado'})
  }
  jwt.verify(token,'secreto',(err,decodedToken)=>{
  if (err){
      return res.status(403).json({message: 'Token inválido'})
  }
  req.userCOD = decodedToken.userCOD;
  req.rol= decodedToken.rol;
  next()
  });
}

// ruta para cerrar sesion
// router.post("/loginout",getlogout);
// ruta para editar el perfil del usuario
router.put("/editarPerfil", verificarToken ,editarPerfil);
// ruta para eliminar el perfil del usuario
router.delete("/eliminarPerfil", verificarToken, eliminacionPerfil);
// ruta para obtener la subcategorias de la categoria seleccionada
router.get("/subcategorias", subcategorias);
// ruta para obtener empresa depende de la subcategoria
router.get("/servicios",verificarToken, servicios)
// ruta para obtener a todas las empresas
router.get("/getAllEmpresas",verificarToken, getAllEmpresas);
// ruta para obtener la informacion del usuario con el token
router.get("/getusuario",verificarToken,getuser);
// ruta para crear una reserva
export default router;
