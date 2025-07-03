const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const db = require("./db");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  db.query("SELECT * FROM produtos", (err, results) => {
    res.render("index", { produtos: results });
  });
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", upload.single("imagem"), (req, res) => {
  const { nome, descricao, preco } = req.body;
  const imagem = req.file.filename;
  db.query("INSERT INTO produtos (nome, descricao, preco, imagem) VALUES (?, ?, ?, ?)", [nome, descricao, preco, imagem], () => {
    res.redirect("/");
  });
});

app.get("/edit/:id", (req, res) => {
  db.query("SELECT * FROM produtos WHERE id = ?", [req.params.id], (err, results) => {
    res.render("edit", { produto: results[0] });
  });
});

app.post("/edit/:id", upload.single("imagem"), (req, res) => {
  const { nome, descricao, preco } = req.body;
  const id = req.params.id;

  if (req.file) {
    const imagem = req.file.filename;
    db.query("UPDATE produtos SET nome=?, descricao=?, preco=?, imagem=? WHERE id=?", [nome, descricao, preco, imagem, id], () => {
      res.redirect("/");
    });
  } else {
    db.query("UPDATE produtos SET nome=?, descricao=?, preco=? WHERE id=?", [nome, descricao, preco, id], () => {
      res.redirect("/");
    });
  }
});

app.get("/delete/:id", (req, res) => {
  db.query("DELETE FROM produtos WHERE id = ?", [req.params.id], () => {
    res.redirect("/");
  });
});

app.listen(3000, () => console.log("Servidor rodando em http://localhost:3000"));
