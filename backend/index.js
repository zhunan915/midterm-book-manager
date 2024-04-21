import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

//middlewres
app.use(express.json());
app.use(cors());

app.get("/books", (req, res) => {
    const query = "SELECT * FROM books";
    db.query(query, (err, result) => {
        if (err) {
            return res.json(err);
        } else {
           return  res.json(result);
        }
    });
})
app.post ("/books", (req, res) => {
    const query = "INSERT INTO books (`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [ req.body.title, req.body.desc, req.body.price, req.body.cover];

    db.query(query, [values], (err, data) => {
        if(err)
            return res.json(err);

        return res.json("Book has been created successfuly");
    })
    
})

app.delete("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const query = "DELETE FROM books WHERE id = ?";

    db.query(query, bookId, (err, result) => {
        if(err)
            return res.json(err);

        return res.json("Book has been deleted successfuly");
    })

})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const query = "UPDATE books SET title = ?, `desc` = ?, price = ?, cover = ? WHERE id = ?";

    const values = [ req.body.title, req.body.desc, req.body.price, req.body.cover];

    db.query(query, [...values,bookId], (err, result) => {
        if(err)
            return res.json(err);

        return res.json("Book has been updated successfuly");
    })

})

app.get("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const query = "SELECT * FROM books WHERE id = ?";

    db.query(query, [bookId], (err, result) => {
        if(err)
            return res.json(err);

        const bookData = result[0]; 
        return res.json(bookData);
    })

})

app.listen(8800, () => {
    console.log("Backend server is running!");
})
