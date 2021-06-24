import express from 'express';
import Product from '../models/productModel';

const router = express.Router();

router.get('/', async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findOne({ _id: req.params.id });
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: "Produto não encontrado" })
    }
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

//por causa da edição de produto que tem o método put tb
router.put('/:id', async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (product) {
        product.name = req.body.name;
        product.category = req.body.category;
        product.image = req.body.image;
        product.price = req.body.price;
        product.brand = req.body.brand;
        product.countInStock = req.body.countInStock;
        product.description = req.body.description;
        const updateProduct = await product.save();
        if (updateProduct) {
            return res.status(200).send({ message: 'Produto atualizado', data: updateProduct })
        }
    }
    return res.status(500).send({ message: 'Erro na atualização do produto' })
});

router.delete("/:id", async (req, res) => {
    const deletedProduct = await Product.findById(req.params.id);
    if (deletedProduct) {
        await deletedProduct.remove();
        res.send({ message: "Produto excluído" })
    } else {
        res.send("Erro na exclusão")
    }
});

export default router;