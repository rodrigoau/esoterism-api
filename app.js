const express = require('express');
const app = express();
const port = 3000;

// Lista de palabras
const esoterism = [
    {
        "nombre": "Eliphas Lévi",
        "siglo": 18,
        "obras": ["Dogma y ritual de alta magia"]
    },
    {
        "nombre": "Jacques de Molay",
        "siglo": 14,
        "notas": "Su figura se volvió icónica en escritos esotéricos posteriores."
    },
    {
        "nombre": "Martín de Azpilicueta",
        "siglo": 18,
        "notas": "Abordó temas esotéricos y filosóficos."
    },
    {
        "nombre": "Helena Blavatsky",
        "siglo": 19,
        "obras": ["La Doctrina Secreta"],
        "notas": "Cofundadora de la Sociedad Teosófica."
    },
    {
        "nombre": "Éliphas Lévi",
        "siglo": 19,
        "notas": "Su obra siguió siendo relevante."
    },
    {
        "nombre": "Albert Pike",
        "siglo": 19,
        "obras": ["Morals and Dogma"],
        "notas": "Explora la filosofía esotérica dentro del contexto masónico."
    },
    {
        "nombre": "Rudolf Steiner",
        "siglo": 19,
        "notas": "Fundador de la antroposofía."
    },
    {
        "nombre": "Samael Aun Weor",
        "siglo": 20,
        "obras": ["El matrimonio perfecto"]
    },
    {
        "nombre": "Aleister Crowley",
        "siglo": 20,
        "obras": ["El Libro de la Ley"],
        "notas": "Fundador de la religión de Thelema."
    },
    {
        "nombre": "Dion Fortune",
        "siglo": 20,
        "obras": ["La práctica de la magia ceremonial"]
    },
    {
        "nombre": "G. I. Gurdjieff",
        "siglo": 20,
        "obras": ["Encuentros con hombres notables"]
    },
    {
        "nombre": "Manly P. Hall",
        "siglo": 20,
        "obras": ["Las enseñanzas secretas de todos los tiempos"]
    },
    {
        "nombre": "Franz Bardon",
        "siglo": 20,
        "obras": ["Iniciación a la magia"]
    },
    {
        "nombre": "Carlos Castaneda",
        "siglo": 20,
        "obras": ["Las enseñanzas de don Juan"]
    },
    {
        "nombre": "Jorge Luis Borges",
        "siglo": 20,
        "notas": "Contiene elementos esotéricos y filosóficos."
    }
];

// Ruta para obtener una palabra aleatoria
app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * esoterism.length);
    const randomEsoterism = esoterism[randomIndex];
    res.json(randomEsoterism);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
