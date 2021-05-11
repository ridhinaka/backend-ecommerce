"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var product_controller_1 = __importDefault(require("../controllers/product_controller"));
var productRoutes = /** @class */ (function () {
    function productRoutes() {
        this.router = (0, express_1.Router)();
        this.route();
    }
    productRoutes.prototype.route = function () {
        this.router.get('/product', product_controller_1.default.get_product);
        this.router.post('/product/create', product_controller_1.default.add_product);
    };
    return productRoutes;
}());
exports.default = new productRoutes().router;
