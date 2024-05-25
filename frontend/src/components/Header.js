import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShop } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

import { useAuth } from "../context/auth";
import toast from "react-hot-toast";
import SearcInput from "./Form/SearcInput";

import useCategory from "./hooks/useCategory";
import { useCart } from "../context/cart";
import { Badge } from "antd";

function Header() {
  const [auth, setAuth] = useAuth();
  const categories = useCategory();
  const [cart] = useCart();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("LogOut Successfuly");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink to="/" className="navbar-brand">
              <FaShop /> Mawella Super
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/all product"
                  className="nav-link "
                  aria-current="page"
                >
                  All Products
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <Link className="dropdown-item" to={"/categories"}>
                    All category
                  </Link>
                  {categories?.map((c) => (
                    <li key={c.id}>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* <li className="nav-item">
          <NavLink to="/dashbord" className="nav-link" >Order</NavLink>
        </li>  */}
              {/* <li className="nav-item">
          <NavLink to="/dashbord" className="nav-link" >Admin</NavLink>
        </li> */}
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link">
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {auth?.user?.name}
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item "
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={handleLogout}
                          to="/login"
                          className="dropdown-item"
                        >
                          LogOut
                        </Link>
                      </li>
                    </ul>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Badge count={cart.length} showZero>
                  <NavLink to="/cart" className="nav-link">
                     <FaShoppingCart /> Cart 
                  </NavLink>
                </Badge>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SearcInput />
      {/* <form className="header-form d-flex justify-content-center align-items-center bg-dark" role="search">
        <input className="form-control " type="search" placeholder="Search products" aria-label="Search"/>
        <button className="btn-search " type="submit">Search </button>
      </form> */}
    </>
  );
}

export default Header;
