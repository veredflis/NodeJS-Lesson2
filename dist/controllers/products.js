"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const productsData = require("../data");
const products = productsData.productsList.products;
exports.getProducts = (req, res) => {
    return res.send(products);
};
exports.getProductById = (req, res) => {
    const argId = req.params.id;
    const item = products.find(product => product.id === argId);
    if (!item)
        res.sendStatus(404); //not found
    res.status(200).send(item);
};
exports.addProduct = (req, res) => {
    const product = req.body;
    if (product) {
        if (product.name.length >= 3) {
            product.id = (Math.random() * 10000).toString();
            products.push(product);
            res.status(201).send(products);
        }
        else {
            res.sendStatus(409);
        }
    }
};
//# sourceMappingURL=products.js.map