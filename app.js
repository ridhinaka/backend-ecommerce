"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var db_1 = __importDefault(require("./configs/db"));
var index_1 = __importDefault(require("./routes/index"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugin();
        this.routes();
    }
    App.prototype.plugin = function () {
        this.app.use(express_1.default.urlencoded({ extended: true }));
        db_1.default();
    };
    App.prototype.routes = function () {
        this.app.use(index_1.default);
    };
    return App;
}());
// const port = process.env.PORT
var app = new App().app;
app.listen(process.env.PORT, function () { return console.log("Server running on port http://localhost:" + process.env.PORT); });
exports.default = new App().app;
