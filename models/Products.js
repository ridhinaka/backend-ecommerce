"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var productSchema = new mongoose_1.default.Schema({
    productName: { type: String },
    imagePath: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: mongoose_1.default.Types.ObjectId, ref: 'Category' },
    stock: { type: Number, required: true },
    description: { type: String, required: true },
});
var Product = mongoose_1.default.model('productSchema', productSchema);
exports.Product = Product;
