"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var order_controller_1 = __importDefault(require("../controllers/order_controller"));
var orderRoutes = /** @class */ (function () {
    function orderRoutes() {
        this.router = express_1.Router();
        this.route();
    }
    orderRoutes.prototype.route = function () {
        this.router.get('/order/allorder', order_controller_1.default.getOrder);
        this.router.post('/order/create', order_controller_1.default.createOrder);
    };
    return orderRoutes;
}());
exports.default = new orderRoutes().router;
