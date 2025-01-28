type TAuthor = {
  firstName: string,
  lastName: string,
  email: string,
  _id: string,
}
export type TCategory = {
   name: string,
   description: string,
   feature: string,
   email: string,
   _id: string,
}

export type TDataTableItem = {
   key: string;
   title: string;
   author: TAuthor;
   description: string;
   price: number;
   discount: number;
   quantity: number;
   sku: string;
   category: TCategory;
   brand: string;
   feature: string;
   _id: string;
}

export type TProducts = {
   key: string;
   title: string;
   author: TAuthor;
   description: string;
   price: number;
   discount: number;
   quantity: number;
   sku: string;
   category: TCategory;
   brand: string;
   feature: string;
   _id: string;
}