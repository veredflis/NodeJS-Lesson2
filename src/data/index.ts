import * as products from "./products.json";
import { Product } from "../models";

interface productsList {
  products: Product[];
}

const productsList: productsList = {
  products
};

export { productsList };
