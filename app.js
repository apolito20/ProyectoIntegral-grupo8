const express = require("express");
const app = express();
app.use(express.static("public"));
const mainRoutes = require("./routes/mainRoutes");

app.set("view engine", "ejs");


app.listen(3300, () => {
    console.log("Servidor funcionando");
});

app.use("/", mainRoutes);
app.use("/detalleProducto", mainRoutes);
app.use("/carrito", mainRoutes);

app.use("/login", mainRoutes);
app.use("/register", mainRoutes);
