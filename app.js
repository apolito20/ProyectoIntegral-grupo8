const express = require("express");
const app = express();
app.use(express.static("public"));
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");

<<<<<<< HEAD

app.listen(3300, () => {
    console.log("Servidor funcionando");
});

app.use("/", mainRoutes);
app.use("/detalleProducto", mainRoutes);
app.use("/carrito", mainRoutes);

app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
=======
app.get("/", (req,res) => {
    res.sendFile(__dirname + "/src/views/index.html");
});

app.get('/detalleProducto', (req,res)=>{
    res.sendFile(__dirname + '/src/views/detalleProducto.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/src/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/src/views/register.html');
});

app.get('/carri', (req,res)=>{
    res.sendFile(__dirname + '/src/views/carri.html');
});
>>>>>>> 1df60d89a21947063be46853f42da4c8f3f79c48
