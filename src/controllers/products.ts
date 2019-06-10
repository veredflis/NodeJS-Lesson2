import { Application, Request, Response, NextFunction } from "express";
import * as productsData from "../data";
import { Product } from "../models";

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

  if (product) {
    if (product.name.length >= 3) {
      product.id = (Math.random() * 10000).toString();
      products.push(product);
      res.status(201).send(products);
    } else {
      res.sendStatus(409);
    }
  }
};
