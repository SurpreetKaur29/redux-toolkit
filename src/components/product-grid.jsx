import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "@/redux/reducers/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { Filter } from "./filter";
import { fetchProductsByCategories } from "@/pages/product";

export const ProductGrid = ({ products }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.products.wishlist);
  const cart = useSelector((state) => state.products.cart);
  const [category, setCategory] = useState("");
  const [productsByCateg, setProductBycateg] = useState([]);

  const handleWishlist = (item) => {
    dispatch(addToWishlist(item));
  };

  const handleCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (category) {
      fetchProductsByCategories(category).then((res) => {
        setProductBycateg(res);
      });
    }
  }, [category]);

  const router = useRouter();
  const prods = category && productsByCateg.length ? productsByCateg : products;
  console.log("category", category);
  return (
    <div className="flex gap-8 items-start">
      <Filter onChange={(e) => setCategory(e.target.value)} />
      <div className="grid grid-cols-3 gap-5">
        {prods?.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm relative"
          >
            <div className="h-56 w-full">
              <a href="#">
                <img
                  className="mx-auto h-full"
                  src={item.image}
                  alt={item.title}
                />
              </a>
            </div>
            <div className="pt-6">
              <div className="mb-4 flex items-center justify-between gap-4 absolute top-0 right-0">
                <div className="flex items-center justify-end gap-1">
                  <button
                    type="button"
                    className="rounded-lg p-2 text-gray-500"
                    onClick={() => handleWishlist(item)}
                  >
                    {wishlist && wishlist?.some((p) => p.id === item.id) ? (
                      <FaHeart color="#ff0000" />
                    ) : (
                      <FaRegHeart />
                    )}
                  </button>
                </div>
              </div>
              <h5 className="text-xs font-semibold leading-tight text-gray-900 hover:underline dark:text-black mb-3 capitalize">
                {item.category}
              </h5>
              <a
                href="#"
                className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-black line-clamp-1"
              >
                {item.title}
              </a>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-lg font-extrabold leading-tight text-gray-900 dark:text-black">
                  ${item.price}
                </p>
                {cart && cart?.some((p) => p.id === item.id) ? (
                  <Link
                    href="/cart"
                    className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    <IoCartOutline size={20} />
                    Go to cart
                  </Link>
                ) : (
                  <div>
                    <button
                      type="button"
                      onClick={() => handleCart(item)}
                      className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      <IoCartOutline size={20} />
                      Add to cart
                    </button>
                    {router.pathname === "/wishlist" && (
                      <button
                        type="button"
                        onClick={() => {
                          handleWishlist(item);
                          handleCart(item);
                        }}
                        className="mt-2 inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white bg-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        <IoCartOutline size={20} />
                        Move to cart
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
