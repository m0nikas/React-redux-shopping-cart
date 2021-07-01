import { FETCH_PRODUCTS , GET_PRODUCT, ADD_TO_CART,REMOVE_CART,FILTER_PRODUCTS} from "../constants/types";

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch('http://localhost:3000/products');
  const data = await res.json();
  console.log(data);
  console.log("fetchProducts")
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};

export const getProductById = (id) => async (dispatch) => {
	let resp = await fetch('http://localhost:3000/products/' + id) 
	let data  = await resp.json() ;
  console.log(data);
	dispatch (
    {type:GET_PRODUCT, 
    payload: data,
  });
};



//add cart action
export const addToCart= (data)=>{
  return{
      type: ADD_TO_CART,
      data
  }
}

export const removeFromCart= (data)=>{
  console.log(data)
  return {
    type:REMOVE_CART, 
    data
  }
}