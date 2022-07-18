const { response } = require('express');
const express = require('express');
const server = express(); 
const port = 2020;
const start = () => console.log('Starting server... in http://localhost:2020');
server.listen(port, start());

const path = require('path');

//Decirle al proyecto donde está la carpeta public
server.use(express.static(path.resolve(__dirname, "../public")));

server.get('/home', function(request, response) {
    let file = path.join(__dirname, '../views/home.html');
    return response.sendFile(file);
})

server.get('/ingresa', function(request, response) {
    let file = path.join(__dirname, '../views/register.html');
    return response.sendFile(file);
})

server.post('/register', function(request, response) {
    return response.redirect("/home")
})

server.get('/login', function(request, response) {
    let file = path.join(__dirname, '../views/login.html');
    return response.sendFile(file);
})
