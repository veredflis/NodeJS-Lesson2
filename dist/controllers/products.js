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
    console.log(product, product.name);
    if (product) {
        if (product.name.length >= 3) {
            product.id = Math.round(Math.random() * 10000).toString();
            products.push(product);
            res.status(201).send(products);
        }
        else {
            res.sendStatus(409);
        }
    }
};
exports.updateProduct = (req, res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.sendStatus(400);
        return;
    }
    const product = req.body;
    if (!product) {
        res.sendStatus(400);
        return;
    }
    if (product.name.length < 3) {
        res.sendStatus(409);
        return;
    }
    const existing = products.find(productItem => productItem.id === id);
    if (!existing) {
        res.sendStatus(404);
        return;
    }
    product.id = existing.id;
    Object.assign(existing, product);
    res.status(201).send(products);
};
exports.deleteProduct = (req, res) => {
    const id = req.params.id;
    if (!id || isNaN(id)) {
        res.sendStatus(404);
        return;
    }
    const index = products.findIndex(product => product.id === id);
    if (index < 0) {
        res.sendStatus(404);
        return;
    }
    products.splice(index, 1);
    res.status(204);
};
//# sourceMappingURL=products.js.map