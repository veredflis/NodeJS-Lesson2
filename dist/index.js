"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
console.log("My App 4");
app_1.app.set("port", process.env.PORT || 3000);
app_1.app.listen(app_1.app.get("port"));
//# sourceMappingURL=index.js.map