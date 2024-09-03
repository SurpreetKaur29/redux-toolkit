import { CartItem } from "@/components/cart-item";
import { Layout } from "@/components/layout";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.products.cart);

  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <div>
        {cart.length > 0 ? (
          <>
            <CartItem cart={cart} />
            <p>Subtotal : ${subTotal.toFixed(2)}</p>
          </>
        ) : (
          <>No Product in the Cart.</>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
