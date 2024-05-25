import React,{useState,useEffect} from 'react'
import Layout from '../Layout/Layout'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCart } from "../../context/cart";


const CategoryProduct = () => {
    const params =useParams()
    const navigate =useNavigate()
    const [products,setProducts] =useState([])
    const [category,setCategory] =useState([])

    const [cart,setCart]=useCart()


    useEffect(()=>{
        if(params?.slug) getProductByCat()
    },[params?.slug])

    const getProductByCat = async() =>{
        try {
            const {data} = await axios.get(`/api/v1/product/product-category/${params.slug}`)
            setProducts(data?.products);
            setCategory(data?.category);
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <Layout>
      <div className="container mt-3">
        <h4 className="text-center"> Catergory - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found</h6>

        <div className="row">
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <div className="card m-2" style={{ width: "10rem" }}>
                <a
                    href="#"
                    className=" btn  m-1"
                    onClick={(e) => navigate(`/product/${p.slug}`)}
                  >
                    <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                  </a>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text"> Rs.{p.price}.00</p>
                  
                  <button  className=" add-cart-btn"
                  onClick={() => {
                    setCart([...cart, p]);
                    localStorage.setItem("cart",JSON.stringify([...cart,p]))
                    toast.success("Item Added to Cart");
                  }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* <div className='m-2 p-3'>
          {products && products.length < total &&(
            <button 
            className='btn btn-warning'
            onClick={(e)=>{
              e.preventDefault();
              setPage(page+1);}}>
              {loading ? "Loading..." : "Loadmore"}
            </button>
          )}
        </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default CategoryProduct