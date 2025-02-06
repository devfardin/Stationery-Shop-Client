type TAuthor = {
    firstName: string,
    lastName: string,
    email: string,
    _id: string,
  }
  export type TCategoryTable = {
      _id: string,
      author: TAuthor,
      name: string,
      description: string,
      feature: string,
   };

   export type TUsers = {
    _id: string,
    firstName: string,
    lastName: string,
    email: string,
    role: 'admin' | 'customer'
   }