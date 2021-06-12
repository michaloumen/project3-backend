import express from 'express';
import Product from '../models/productModel';
import getToken from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        image: req.body.image,
        price: req.body.price,
        brand: req.body.brand,
        countInStock: req.body.countInStock,
        description: req.body.description,
    });
    const newProduct = await product.save();
    if (newProduct) {
        return res.status(201).send({ message: 'Novo produto criado', data: newProduct })
    }
    return res.status(500).send({ message: 'Erro na criação do produto' })
})

export default router;
