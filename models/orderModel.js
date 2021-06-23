import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                red: 'Product',
                required: true,
            },
        },
    ],
    shippingAdress: {
        fullName: { type: String },
        address: { type: String },
        city: { type: String },
        postalCode: { type: String },
    },
    paymentMethod: { type: String },
    itemsPrice: { type: Number, required: true },
    taxPrice: { type: Number },
    TotalPrice: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
},
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;