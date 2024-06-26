import React from "react";
import Layout from "../Layout/Layout";
import { useSearch } from "../../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();

  return (
    <Layout title={"search-result"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1 ? "No product Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className='d-flex flex-wrap mt-4'>
        {values?.results.map((p)=>(
                    <div className="card m-2" style={{"width": "10rem"}} >
                      <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name}/>
                         <div className="card-body">
                         <h5 className="card-title">{p.name}</h5>
                         <p className="card-text">{p.description}</p>
                         <p className="card-text"> Rs. {p.price}.00</p>
                         <button className=" add-cart-btn">Add to Cart</button>
                        </div>
                    </div>
            ))}
        </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
