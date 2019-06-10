"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();
exports.app = app;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//add routings
routes.setupProductsRoutes(app);
//# sourceMappingURL=app.js.map