"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_controller_1 = __importDefault(require("../controllers/user_controller"));
var userRoutes = /** @class */ (function () {
    function userRoutes() {
        this.router = (0, express_1.Router)();
        this.route();
    }
    userRoutes.prototype.route = function () {
        this.router.post('/user/create', user_controller_1.default.register_new_user);
        this.router.post('/user/login', user_controller_1.default.loginUser);
        // this.router.use(authJwt.authentication)
        this.router.get('/user', user_controller_1.default.getUser);
        this.router.get('/user:id', user_controller_1.default.getUser);
    };
    return userRoutes;
}());
exports.default = new userRoutes().router;
