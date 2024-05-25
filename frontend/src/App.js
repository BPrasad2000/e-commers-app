import { Routes,Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Policy from "./components/pages/Policy";
import Pagenotfound from "./components/pages/Pagenotfound";
import Register from "./components/pages/Auth/Register";
import Login from "./components/pages/Auth/Login";
import Dashboard from "./components/pages/user/Dashboard";
import PrivateRoute from "./components/Route/Private";
import ForgotPassword from "./components/pages/Auth/ForgotPassword";
import AdminRoute from "./components/Route/AdminRoute";
import AdminDashboard from "./components/pages/Admin/AdminDashboard";
import CreateCatergory from "./components/pages/Admin/CreateCatergory";
import CreateProduct from "./components/pages/Admin/CreateProduct";
import Users from "./components/pages/Admin/Users";
import Order from "./components/pages/user/Order";
import Profile from "./components/pages/user/Profile";
import Products from "./components/pages/Admin/Products";
import UpdateProduct from "./components/pages/Admin/UpdateProduct";
import Allproduct from "./components/pages/user/Allproduct";
import Search from "./components/pages/Search";
import ProductDetails from "./components/pages/ProductDetails";
import Categories from "./components/pages/Categories";
import CategoryProduct from "./components/pages/CategoryProduct";
import CartPage from "./components/pages/CartPage";
import AdminOrders from "./components/pages/Admin/AdminOrders";




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:slug" element={<ProductDetails/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/category/:slug" element={<CategoryProduct/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/all product" element={<Allproduct/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        
        <Route path="/dashboard" element={<PrivateRoute/>}>
           <Route path="user" element={<Dashboard/>}/>
           <Route path="user/order" element={<Order/>}/>
           <Route path="user/profile" element={<Profile/>}/>
        </Route>
        
        <Route path="/dashboard" element={<AdminRoute/>}>
           <Route path="admin" element={<AdminDashboard/>}/>
           <Route path="admin/create-catergory" element={<CreateCatergory/>}/>
            <Route path="admin/create-product" element={<CreateProduct/>}/>
            <Route path="admin/product/:slug" element={<UpdateProduct/>}/>
            <Route path="admin/product" element={<Products/>}/>
           <Route path="admin/users" element={<Users/>}/> 
           <Route path="admin/orders" element={<AdminOrders/>}/> 
        </Route>


        <Route path="/login" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/policy" element={<Policy/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
      </Routes>

     
    </>
  );
}

export default App;
