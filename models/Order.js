"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var orderSchema = new mongoose_1.default.Schema({
    user_id: { type: mongoose_1.default.Types.ObjectId, ref: 'User' },
    cart_id: { type: mongoose_1.default.Types.ObjectId, ref: 'cartSchema' },
});
var Order = mongoose_1.default.model('orderSchema', orderSchema);
exports.Order = Order;
