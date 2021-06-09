import express from 'express';
import data from './data';
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3001', //habilitando somente o front a consumir nossa API
}));//habilitando nossa API para receber requisições de qualquer origem

app.get("/api/products", (req, res) => {
    res.json(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") })