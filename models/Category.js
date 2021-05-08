"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryExport = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var categorySchema = new mongoose_1.default.Schema({
    product_id: { types: mongoose_1.default.Types.ObjectId },
    category_name: { types: String, required: true, unique: true }
});
var categoryExport = mongoose_1.default.model('categorySchema', categorySchema);
exports.categoryExport = categoryExport;
