const express = require("express");
const app = express();
app.use(express.static("public"));

app.listen(3300, () => {
    console.log("Servidor funcionando");
});

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get('/detalleProducto', (req,res)=>{
    res.sendFile(__dirname + '/views/detalleProducto.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/carri', (req,res)=>{
    res.sendFile(__dirname + '/views/carri.html');
});