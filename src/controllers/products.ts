import { Application, Request, Response, NextFunction } from "express";
import * as productsData from "../data";
import { Product } from "../models";
import { isNumber } from "util";

const products: Product[] = productsData.productsList.products;

export const getProducts = (req: Request, res: Response) => {
  return res.send(products);
};

export const getProductById = (req: Request, res: Response) => {
  const argId: string = req.params.id;

  const item: Product | undefined = products.find(
    product => product.id === argId
  );

  if (!item) res.sendStatus(404); //not found

  res.status(200).send(item);
};

export const addProduct = (req: Request, res: Response) => {
  const product = req.body as Product;
  console.log(product, product.name);
  if (product) {
    if (product.name.length >= 3) {
      product.id = Math.round(Math.random() * 10000).toString();
      products.push(product);
      res.status(201).send(products);
    } else {
      res.sendStatus(409);
    }
  }
};

export const updateProduct = (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id || isNaN(id)) {
    res.sendStatus(400);
    return;
  }

  const product = req.body as Product;

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

export const deleteProduct = (req: Request, res: Response) => {
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
