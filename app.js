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