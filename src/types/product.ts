type TAuthor = {
  name: string,
  email: string,
  _id: string,
}
type TCategory = {
   name: string,
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