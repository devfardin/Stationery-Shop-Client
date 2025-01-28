import React from "react";
import Loading from "../../components/share/Loading";
import { useGetProductsQuery } from "../../redux/features/product/productApi";
import { TProducts } from "../../types/product";
import ProductCard from "../../components/share/ProductCard";

interface ProductsProps {
  category: string;
  searchResult: string;
}
const Products: React.FC<ProductsProps> = ({ category, searchResult }) => {
  const { data: productData, isLoading } = useGetProductsQuery(undefined);
  const productFilter = productData?.data?.filter((item: TProducts) => {
    const matchesSearch =
      searchResult === "" || item.title.toLowerCase().includes(searchResult);
    const matchesCategory = category === "" || item.category.name === category;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    <div className="h-screen flex justify-center items-center">
      <Loading />
    </div>
  }
  return (
    <div>
      <ProductCard products={productFilter} />
    </div>
  );
};

export default Products;
