"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_1 = __importDefault(require("../routes/user_route"));
var product_route_1 = __importDefault(require("../routes/product_route"));
var cart_route_1 = __importDefault(require("../routes/cart_route"));
var order_route_1 = __importDefault(require("../routes/order_route"));
var Routes = /** @class */ (function () {
    function Routes() {
        this.router = express_1.Router();
        this.routes();
        this.user();
        // this.auth()
        this.product();
        this.cart();
        this.order();
    }
    Routes.prototype.routes = function () {
        this.router.get("/", function (req, res) {
            res.status(200).json({ msg: "welcome to mobile legend" });
        });
    };
    Routes.prototype.user = function () {
        this.router.use(user_route_1.default);
    };
    // public auth() :void{
    //   this.router.use(auth_Jwt.authentication)
    // }
    Routes.prototype.product = function () {
        this.router.use(product_route_1.default);
    };
    Routes.prototype.cart = function () {
        this.router.use(cart_route_1.default);
    };
    Routes.prototype.order = function () {
        this.router.use(order_route_1.default);
    };
    return Routes;
}());
exports.default = new Routes().router;
