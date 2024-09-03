import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout";
import { ProductGrid } from "@/components/product-grid";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <ProductGrid products={products} />
    </Layout>
  );
};

export default Product;

export const fetchProductsByCategories = async (cate) => {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${cate}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    return console.error(err);
  }
};
