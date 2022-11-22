/* const express = require('express'); -> lo mismo pero antigua*/
import express from "express";
import router from "./routes/index.js";
import db from './config/db.js'


const app = express();

//conectar base de datos
db.authenticate()
  .then(()=>console.log('Base de datos Conectada'))
  .catch(error=>console.log(error))

//crear variable para  el puerto
const port = process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine', 'pug')

//Obtener año actual- creando un middlware
app.use(( req, res, next )=>{
/*   res.locals.unaVariable = 'Una Variable Nueva'
  console.log(res.locals); */
  const year=new Date();
  res.locals.actualYear=year.getFullYear();
  res.locals.nombreSitio= 'Agencia de Viajes'
   next();
})

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}))


//Definir la carpeta publica
app.use(express.static('public'))

//Agregar router
app.use('/', router);


// req - lo que enviamos : res - lo que express nos responde

/* app.get('/',(req,res)=>{
  res.send('Hola Naty')
})
app.get('/nosotros',(req,res)=>{
  res.send('Nosotros')
})
app.get('/contacto',(req,res)=>{
  res.send('Contactanos')
}) */
/* app.get('/contacto',(req,res)=>{
  res.json([{
    id:1,
    nombre: 'Natalia',
    apellido: 'Saavedra',
    saludo:'Hola Naty'},
    {
      id:2,
      nombre: 'Luisa',
      apellido: 'Sanmartin',
      saludo:'Hola Luisa'}])
}) */

/* app.get('/',(req,res)=>{// render muestra una vista
  res.render('hola.js')
}) */

app.listen(port, ()=>{
  console.log(`El servidor esta funcionando en el puerto ${port}`);
  
})