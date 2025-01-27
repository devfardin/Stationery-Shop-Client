type TAuthor = {
    name: string,
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