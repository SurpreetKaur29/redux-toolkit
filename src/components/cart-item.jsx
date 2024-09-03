import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/reducers/productSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { maxLimit } from "./data";

export const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      {cart?.map((item, idx) => {
        return (
          <div key={idx} className="flex py-6 items-center border-b">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                className="mx-auto h-full"
                src={item.image}
                alt={item.title}
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900 items-center">
                  <div>
                    <h3 className="text-2xl">
                      <a href="#"> {item.title}</a>
                    </h3>
                    <form>
                      <div className="relative flex items-center max-w-[8rem]">
                        <button
                          type="button"
                          id="decrement-button"
                          data-input-counter-decrement="quantity-input"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          className="border border-gray-400 w-6 h-6 flex items-center justify-center"
                        >
                          -
                        </button>
                        <h4 className="border-y border-gray-400 w-6 h-6 flex items-center justify-center">
                          {item.quantity}
                        </h4>
                        <button
                          type="button"
                          id="increment-button"
                          data-input-counter-increment="quantity-input"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          disabled={item.quantity === maxLimit}
                          className="border border-gray-400 w-6 h-6 flex items-center justify-center"
                        >
                          +
                        </button>
                      </div>
                    </form>
                    <p>${item.price * item.quantity}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemove(item)}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
