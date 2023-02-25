"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigProvider {
    static host() {
        if (process.env.MYSQL_HOST == undefined) {
            throw new Error('MYSQL_HOST must be specified as a string in .env file');
        }
        return process.env.MYSQL_HOST;
    }
    static port() {
        if (process.env.MYSQL_PORT == undefined) {
            throw new Error('MYSQL_PORT must be specified as an integer in .env file');
        }
        return parseInt(process.env.MYSQL_PORT);
    }
    static user() {
        if (process.env.MYSQL_USER == undefined) {
            throw new Error('MYSQL_USER must be specified as a string in .env file');
        }
        return process.env.MYSQL_USER;
    }
    static password() {
        if (process.env.MYSQL_PASSWORD == undefined) {
            throw new Error('MYSQL_PASSWORD must be specified as a string in .env file');
        }
        return process.env.MYSQL_PASSWORD;
    }
    static database() {
        if (process.env.MYSQL_DATABASE == undefined) {
            throw new Error('MYSQL_DATABASE must be specified as a string in .env file');
        }
        return process.env.MYSQL_DATABASE;
    }
}
exports.default = ConfigProvider;
