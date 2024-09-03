import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {
  const wishlist = useSelector((state) => state.products.wishlist);
  const cart = useSelector((state) => state.products.cart);

  return (
    <header className="bg-white border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="lg:flex lg:flex-1 text-black text-xl text-bold">
          <h2>Logo</h2>
        </div>
        <div className="lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            href="/product"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Products
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact
          </Link>
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end gap-5">
          <Link
            href="/wishlist"
            className="text-xl font-semibold leading-6 text-gray-900 relative"
          >
            <FaRegHeart />
            {wishlist.length > 0 && (
              <span className="absolute -right-2 -top-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>
          <Link
            href="/cart"
            className="text-2xl font-semibold leading-6 text-gray-900 relative"
          >
            <IoCartOutline />
            {cart.length > 0 && (
              <span className="absolute -right-2 -top-2 bg-black text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};
