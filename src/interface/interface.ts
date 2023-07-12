import { Image as Iimage } from "sanity";

export type IProducts = {
  title: string;
  image: Iimage;
};

export type CartProduct = {
  title: string;
  image: Iimage;
  price: number;
  category: string;
  _id: string;
};

export type IProductsDetail = {
  title: string;
  price: string;
  image: Iimage;
  category: string;
  details: string;
  care: string[];
  _id: string;
};

export type CartItem = {
  id: number;
  user_id: string;
  product_id: string;
  quantity: number;
  size: string;
  price: string;
};

export type CartList = {
  res: CartItem[];
};

export type noUser = {
  res: string[];
};

export type reduxProductAction = {
  id: string;
  size: string;
  price: number;
};
export type reduxProductState = {
  id: string;
  size: string;
  quantity: number;
  totalPrice: number;
};

export type cartPageItem = {
  title: string;
  clothType: { clothTypeName: string };
  price: string;
  image: Iimage;
};
