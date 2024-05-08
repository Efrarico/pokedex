const express = require("express");
const app = express();

app.get("/", (req,res, next) => {
    console.log(req);
    res.send("Adios world");
});

app.get("/pokemon", (req, res, next) => {
    res.json({nombre: "Efrain", Edad: "19"});
});

app.listen(3000, () => {
    console.log("Server is running...")
});
