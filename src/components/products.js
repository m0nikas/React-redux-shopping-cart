import React, { useEffect,useState} from "react";
import { connect } from "react-redux";
import { fetchProducts,addToCart} from "../actions/product-actions";
import formatCurrency from "../utils";
import {Link} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = (props) => {

    const notify = () => toast("Added to cart!");
    const [st, sst] = useState("");
    var [searchResults, setSearchResults] = useState([]);
    // const [searchResults, setSearchResults] = useState([]);
    var {fetchProducts,products,addToCart}=props;
   
    useEffect(()=>{
      fetchProducts()
      setSearchResults(products);
      
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    useEffect(() => {
      var results = products.filter(product =>product.name.toLowerCase().includes(st.toLowerCase()));
      setSearchResults(results);
      console.log(searchResults);
      if(!st){
        setSearchResults(products);
      }
      //dispatch here

  },[st]);
    
   
    const handleChange = event =>{
       sst(event.target.value);
     }
    return (
        <>
        <ToastContainer />
        <ul className="products">  
          <input type="text" value={st} onChange={handleChange} placeholder="Search for a name"></input>

            {searchResults.map((product)=>( 
                <li key={product.name}>
                <div className="product">
                <Link to={"/product/" + product.id}>
                    <img src={product.imageURL} alt={product.name}  style={{ width: "200px", height: "200px" }}></img>
                    <p>{product.name}</p>
                  </Link>
                  <div className="product-price">
                  <button
                        onClick={() => { addToCart(product); notify();}}
                        className="button primary"
                      >
                        Add To Cart
                      </button>
                      <div>{formatCurrency(product.price)}</div>
                    
                    </div>
                </div>
              </li>
            
                               
            ))}
           </ul>
            </>
    );
}

export default connect(
    (state) => ({ products: state.products.items }),
    {
      fetchProducts,addToCart
    }
  )(Products);