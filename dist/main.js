"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const app_config_1 = require("./app/app.config");
app_1.default.listen(app_config_1.APP_PORT, () => {
    console.log('服务启动啦啦啦！');
});
//# sourceMappingURL=main.js.map