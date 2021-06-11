import express from 'express';
import data from './data';
import dotenv from 'dotenv';
import config from './config.js';
import mongoose from 'mongoose';
import userRoute from '../routes/userRoute';
const cors = require('cors');

dotenv.config();

const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(cors({
    origin: 'http://localhost:3000', //habilitando somente o front a consumir nossa API
}));//habilitando nossa API para receber requisições de qualquer origem

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId);
    if (product)
        res.send(product);
    else
        res.status(404).send({ msg: "Product Not Found." })
});

app.get("/api/products", (req, res) => {
    res.json(data.products);
});

app.listen(5000, () => { console.log("Server started at http://localhost:5000") })