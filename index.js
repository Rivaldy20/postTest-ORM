const express = require("express")
const app = express()
const { books } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//get semua data
app.get("/books", (req, res) => {
    books.findAll()
        .then(data => {
            res.status(200).json(data)
        })
})

//get data berdasar id
app.get("/books/:id", (req, res) => {
    books.findOne({
            where: { id: req.params.id }
        })
        .then(data => {
            res.status(200).json(data)
        })
})

app.post("/books", (req, res) => {
    books.create({
            id: req.body.id,
            isbn: req.body.isbn,
            judul: req.body.judul,
            sinopsis: req.body.sinopsis,
            penulis: req.body.penulis,
            genre: req.body.genre
        })
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(422).json("tidak bisa membuat buku")
        })
})

//melakukan update
app.put("/books/:id", (req, res) => {
    books.update({
            id: req.body.id,
            isbn: req.body.isbn,
            judul: req.body.judul,
            sinopsis: req.body.sinopsis,
            penulis: req.body.penulis,
            genre: req.body.genre
        }, {
            where: { id: req.params.id }
        })
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(422).json("tidak bisa melakukan update")
        })
})

//melakukan delete
app.delete("/books/:id", (req, res) => {
    books.destroy({
            where: { id: req.params.id }
        })
        .then(data => {
            res.status(201).json(data)
        }).catch(err => {
            res.status(422).json("tidak bisa dihapus")
        })
})


app.listen(3200, () => console.log("server ready"));