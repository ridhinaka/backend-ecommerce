"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("../models/Cart");
var Products_1 = require("../models/Products");
var Users_1 = require("../models/Users");
var cartController = /** @class */ (function () {
    function cartController() {
    }
    cartController.addToCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, product_id, quantity, userId, findProduct, findCart, createCart, updateProduct, updateUser, findCartId, pushToCart, updateStock, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, product_id = _a.product_id, quantity = _a.quantity;
                        userId = req.Id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 14, , 15]);
                        return [4 /*yield*/, Products_1.Product.findById(product_id)];
                    case 2:
                        findProduct = _b.sent();
                        if (!(findProduct.stock > 0)) return [3 /*break*/, 12];
                        return [4 /*yield*/, Cart_1.Cart.findOne({ user_id: userId })];
                    case 3:
                        findCart = _b.sent();
                        if (!(findCart === null)) return [3 /*break*/, 7];
                        return [4 /*yield*/, Cart_1.Cart.create({
                                user_id: userId,
                                product_id: req.body.product_id,
                                quantity: req.body.quantity,
                                total_price: quantity * findProduct.price
                            })];
                    case 4:
                        createCart = _b.sent();
                        return [4 /*yield*/, Products_1.Product.findByIdAndUpdate(product_id, { $inc: { stock: -quantity } }, { new: true })];
                    case 5:
                        updateProduct = _b.sent();
                        return [4 /*yield*/, Users_1.User.findByIdAndUpdate(userId, {
                                $push: { cart_id: createCart._id },
                                $inc: { amount: createCart.total_price }
                            }, { new: true })];
                    case 6:
                        updateUser = _b.sent();
                        res.status(201).json({ msg: "Congrats, your product was added to cart", data: createCart });
                        return [3 /*break*/, 11];
                    case 7: return [4 /*yield*/, Cart_1.Cart.findOne({ user_id: userId })];
                    case 8:
                        findCartId = _b.sent();
                        return [4 /*yield*/, Cart_1.Cart.findByIdAndUpdate(findCartId.id, { $push: { product_id: findProduct.id }, $inc: { quantity: quantity, total_price: quantity * findProduct.price } }, { new: true })];
                    case 9:
                        pushToCart = _b.sent();
                        return [4 /*yield*/, Products_1.Product.findByIdAndUpdate(product_id, { $inc: { stock: -quantity } }, { new: true })];
                    case 10:
                        updateStock = _b.sent();
                        res.status(200).json({ msg: "your product was added", data: pushToCart });
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        res.status(200).json({ msg: "stock is not available" });
                        _b.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        err_1 = _b.sent();
                        res.status(200).json({ msg: "your product have been added, please kindly go to your cart :)", err: err_1 });
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
    cartController.updateCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, quantity, product_id, id, selectCart, selectProduct, new_quantity, new_amount, new_totalPrice, cartAndUpdate, userUpdate, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, quantity = _a.quantity, product_id = _a.product_id;
                        id = req.params.id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, Cart_1.Cart.findById(id)];
                    case 2:
                        selectCart = _b.sent();
                        return [4 /*yield*/, Products_1.Product.findById(product_id)];
                    case 3:
                        selectProduct = _b.sent();
                        new_quantity = parseInt(quantity) + selectCart.quantity;
                        new_amount = (selectProduct.price * parseInt(quantity));
                        new_totalPrice = selectCart.total_price + new_amount;
                        return [4 /*yield*/, Cart_1.Cart.findByIdAndUpdate(id, { quantity: new_quantity, total_price: new_totalPrice }, { new: true })];
                    case 4:
                        cartAndUpdate = _b.sent();
                        return [4 /*yield*/, Users_1.User.findByIdAndUpdate(req.Id, { $inc: { amount: new_amount } })];
                    case 5:
                        userUpdate = _b.sent();
                        res.status(200).json({ message: "your product have been updated", data: cartAndUpdate });
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _b.sent();
                        res.status(500).json({ message: "your product havent been updated yet" });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    cartController.getAllCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var findCartUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Cart_1.Cart.find({})];
                    case 1:
                        findCartUser = _a.sent();
                        res;
                        res.status(200).json({ data: findCartUser });
                        return [2 /*return*/];
                }
            });
        });
    };
    cartController.deleteCart = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, quantity, product_id, findCartdelete, findProductPrice, userUpdate, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        _a = req.body, quantity = _a.quantity, product_id = _a.product_id;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, Cart_1.Cart.findById(id)];
                    case 2:
                        findCartdelete = _b.sent();
                        return [4 /*yield*/, Products_1.Product.findById(product_id)];
                    case 3:
                        findProductPrice = _b.sent();
                        if (!findCartdelete) return [3 /*break*/, 5];
                        return [4 /*yield*/, Cart_1.Cart.findByIdAndUpdate(id, { $pull: { product_id: product_id }, $inc: { quantity: -quantity, total_price: -(quantity * findProductPrice.price) } }, { new: true })];
                    case 4:
                        userUpdate = _b.sent();
                        res.status(200).json({ message: "your products have been removed" });
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        res.status(500).json({ message: "your products havent been removed" });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return cartController;
}());
exports.default = cartController;
