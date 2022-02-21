const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session");
const usuarios = require("./middlewares/usuarios");
const cookies = require("cookie-parser");

app.use(express.static("public"));
app.use(session({
    secret: "esto es secreto",
    resave : false,
    saveUninitialized: false,
}));
app.use(cookies());
app.use(usuarios);

const mainRoutes = require("./routes/mainRoutes");
const userRoutes = require("./routes/userRoutes");


app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(3000, () => {
    console.log("Servidor funcionando");
});

app.use("/", userRoutes);
app.use("/login", userRoutes);
app.use("/register", userRoutes);
app.use("/perfilUsuario", userRoutes);

app.use("/", mainRoutes);
app.use("/home", mainRoutes);
app.use("/detalleProducto", mainRoutes);
app.use("/carrito", mainRoutes);
app.use("/productos", mainRoutes);
app.use("/productos-create", mainRoutes);

