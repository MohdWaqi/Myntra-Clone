import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import WishlistPage from "../Pages/WishlistPage";
import BagPage from "../Pages/BagPage";
import Login from "../Pages/Login";
import Product from "../Pages/Product";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/wishlist" element={<WishlistPage />} />
      <Route path="/bag" element={<BagPage />} />
      <Route path="/products/:id" element={<Product/>}/>
    </Routes>
  );
};

export default AllRoutes;
