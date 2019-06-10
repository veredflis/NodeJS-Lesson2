import { Application } from "express";
import * as controller from "../controllers/products";

function setupProductsRoutes(app: Application) {
  app.get("/api/products", controller.getProducts);
  app.get("/api/products/:id", controller.getProductById);
  app.post("/api/products", controller.addProduct);
  app.put("/api/products/:id", controller.updateProduct);
  app.delete("/api/products/:id", controller.deleteProduct);
}

export { setupProductsRoutes };
