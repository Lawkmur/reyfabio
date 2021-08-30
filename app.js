// Llamamos a express
const { resolveSoa } = require('dns');
const express = require('express');
const app = express();
//Configuramos el puerto 
const port = 3000;

// Template Engine EJS / Motor de Plantilla EJS
app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // specify the views directory


//middleware
//In simple words it's an action that executes before our route fuction
app.use(express.static(__dirname + "/assets"));


//index
app.get('/', (req, res) => {
  res.render("index", {tituloindex : "EmpowerED - Expo Virtual ¡Supérate! ADOC"})
})

// subpaginas 
app.get('/devteam', (req, res) => {
  res.render("devteam", {tituloDev: "DevTeam - EmpowerED"})
})

app.get('/horario', (req, res) => {
  res.render("horario", {tituloHorario: "Horario - EmpowerED"})
})

app.get('/galeria', (req, res) => {
  res.render("Galeria", {tituloGaleria: "Galería - EmpowerED"})
})

app.get('/how-its-going-work', (req, res) => {
  res.render("how-its-going-work", {tituloWork: "¿Cómo funcionará la Expo? - EmpowerED"})
})

app.get('/whatisexpo', (req, res) => {
  res.render("whatisexpo", {tituloWhat: "¿Qué es la Expo? - EmpowerED"})
})

app.use((req, res, next) => {
  res.status(404).render("404", {titulo404: "Error: Página No Encontrada"})
})


//
app.listen(port, () => {
  console.log(`Website working on localhost:${port}`)
})

