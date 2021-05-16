"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cart_controller_1 = __importDefault(require("../controllers/cart_controller"));
var cartRoutes = /** @class */ (function () {
    function cartRoutes() {
        this.router = express_1.Router();
        this.route();
    }
    cartRoutes.prototype.route = function () {
        this.router.get('/allcart', cart_controller_1.default.allCart);
        // this.router.use(authJwt.authentication)
        this.router.delete('/cart/delete', cart_controller_1.default.deleteAll);
        this.router.post('/cart/push', cart_controller_1.default.addToCart);
        this.router.patch('/cart/update/:id', cart_controller_1.default.updateCart);
        this.router.delete('/cart/:id', cart_controller_1.default.deleteCart);
    };
    return cartRoutes;
}());
exports.default = new cartRoutes().router;
