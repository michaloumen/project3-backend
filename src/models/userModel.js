import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    address: { type: String, default: '' },
    city: { type: String, default: '' },
    postalCode: { type: String, default: '' }
}, {
    timestamps: true
});

const userModel = mongoose.model("User", userSchema);

export default userModel;