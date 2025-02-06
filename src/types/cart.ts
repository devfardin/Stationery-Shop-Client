import { TProducts } from "./product";


  export type TCartItem = {
      _id: string,
      user: string,
      product: TProducts,
      quantity: number,
    };