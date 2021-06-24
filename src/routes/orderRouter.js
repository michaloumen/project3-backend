import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import { isAuth } from '../util.js';

const orderRouter = express.Router();

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        if (req.body.orderItems.length === 0) {
            res.status(400).send({ message: 'Carrinho está vazio' });
        } else {
            const order = new Order({
                orderItems: req.body.orderItems,
                shippingAddress: req.body.shippingAddress,
                paymentMethod: req.body.paymentMethod,
                itemsPrice: req.body.itemsPrice,
                taxPrice: req.body.taxPrice,
                totalPrice: req.body.totalPrice,
                user: req.user._id,
            });
            const createdOrder = await order.save();
            res
                .status(201)
                .send({ message: 'Novo pedido criado', order: createdOrder });
        }
    })
);

orderRouter.get(
    '/:id',
    isAuth,
    expressAsyncHandler(async (req, res) => {
        const order = await Order.findById(req.params.id);
        if (order) {
            res.send(order);
        } else {
            res.status(404).send({ message: 'Pedido não encontrado' });
        }
    })
);

export default orderRouter;