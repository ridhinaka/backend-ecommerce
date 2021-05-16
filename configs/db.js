"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var mongoDB = /** @class */ (function () {
    function mongoDB() {
    }
    mongoDB.prototype.connectDB = function () {
        var pathURL = "mongodb://ridhinaka:pangpang1!@cluster0-shard-00-00.zbd7c.mongodb.net:27017,cluster0-shard-00-01.zbd7c.mongodb.net:27017,cluster0-shard-00-02.zbd7c.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-11sg7h-shard-0&authSource=admin&retryWrites=true&w=majority";
        // const pathURL = "mongodb:http://localhost/assgntyp2"
        var connectOption = { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false };
        mongoose_1.default.connect(pathURL, connectOption, function () {
            console.log("rihjsdioaiod");
        });
        var db = mongoose_1.default.connection;
        db.on('error', console.error.bind(console, 'Connection error :'));
        db.once('open', function () {
            console.log("ridhinaka");
            console.log("kocak");
        });
    };
    return mongoDB;
}());
exports.default = new mongoDB().connectDB;
