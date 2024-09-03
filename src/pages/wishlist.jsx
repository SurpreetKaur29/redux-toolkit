import React from "react";
import { Layout } from "@/components/layout";
import { useSelector } from "react-redux";
import { ProductGrid } from "@/components/product-grid";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.products.wishlist);

  return (
    <Layout>
      <div>
        {wishlist.length > 0 ? (
          <ProductGrid products={wishlist} />
        ) : (
          <>No Product in the wishlist.</>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
