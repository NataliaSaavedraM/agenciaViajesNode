import express from "express";
import {
  paginaInicio,
  paginaViajes,
  paginaTestimoniales,
  paginaNosotros,
  paginaDetalleViaje,
} from "../controllers/paginasControllers.js";

import {
  guardarTestimonial
} from "../controllers/testimonialController.js"

const router = express.Router();
/* router.get('/',(req,res)=>{
  res.send('Hola Naty')
}) */
/* router.get('/nosotros',(req,res)=>{
  res.send('Nosotros desde Router')
}) */

router.get("/", paginaInicio);

router.get("/viajes", paginaViajes);

router.get("/viajes/:slug", paginaDetalleViaje);

router.get("/testimoniales", paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial)

router.get("/nosotros", paginaNosotros);

export default router;
