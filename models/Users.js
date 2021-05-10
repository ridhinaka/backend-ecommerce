"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var userSchema = new mongoose_1.default.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    default_address: { type: String, required: true },
    amount: { type: Number, default: 0 },
    cart_id: { type: mongoose_1.default.Types.ObjectId, ref: 'Cart' }
});
var User = mongoose_1.default.model('userSchema', userSchema);
exports.User = User;
