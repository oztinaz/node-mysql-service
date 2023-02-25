"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MySQLProvider_1 = __importDefault(require("../providers/MySQLProvider"));
class MySQLService {
    constructor(configuration) {
        this.mysql = MySQLProvider_1.default.createPool(configuration);
    }
    select(query) {
        return new Promise((resolve, reject) => {
            this.mysql.query(query, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(JSON.parse(JSON.stringify(results)));
            });
        });
    }
}
exports.default = MySQLService;
