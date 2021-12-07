const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.listen(3000, () => {
    console.log("Servidor funcionando");
});

app.use("/", mainRoutes);
app.use("/detalleProducto", mainRoutes);
app.use("/carrito", mainRoutes);

app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
