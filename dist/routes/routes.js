"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controller = require("../controllers/products");
function setupProductsRoutes(app) {
    app.get("/api/products", controller.getProducts);
    app.get("/api/products/:id", controller.getProductById);
    app.post("/api/products", controller.addProduct);
    app.put("/api/products/:id", controller.updateProduct);
    app.delete("/api/products/:id", controller.deleteProduct);
}
exports.setupProductsRoutes = setupProductsRoutes;
//# sourceMappingURL=routes.js.map