import { filterProducts } from "@/redux/reducers/productSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const Filter = ({ onChange }) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div id="dropdown" className="z-10 w-56 p-3 border">
        <h6 className="mb-3 text-sm font-medium text-gray-900">Category</h6>
        <select onChange={onChange}>
          <option value="">All</option>
          {category?.map((item, idx) => {
            return <option key={idx}>{item}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
