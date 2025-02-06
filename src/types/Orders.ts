export type TOrder = {
    _id: string,
    porducts: {
        title: string,
        price: string,
        sku: string,
        feature: string,
    }[],
    shiping: {
        Apartment: string,
        address: string,
        city: string,
        firstName: string,
        lastName: string,
        phone: string,
    },
    user: {
        email: string,
        id: string,
    },
    status: string,
    transation?: {
        id: string,
        transationStatus: string,
    }
}