"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var cartSchema = new mongoose_1.default.Schema({
    user_id: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
    product_id: { type: mongoose_1.default.Types.ObjectId, ref: 'productSchema' },
    productName: { type: String },
    imagePath: { type: String, required: true },
    price: { type: Number, required: true },
    total_price: { type: Number, default: 0 },
    quantity: { type: Number }
});
var Cart = mongoose_1.default.model('cartSchema', cartSchema);
exports.Cart = Cart;
