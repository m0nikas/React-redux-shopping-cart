import React,{useEffect} from "react";
import { connect } from "react-redux";
import formatCurrency from "../utils";
import {removeFromCart} from "../actions/product-actions";

const Cart = (props) => {
    const {Items} = props;
    var s=0;
    console.log(Items);
      return (
        <>
        <ul className="products"> 
        {Items.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">
            You have {Items.length} Items in the cart{" "}
          </div>
        )}  
        <div className="cart cart-header">
            {Items.map((Item) => s+=((Item.price))
          
            )
            }
            {parseInt((s),10)}
          </div>
          <div className="cart cart-items">
            {Items.map((Item)=>( 
                <li key={Item.name}>
                <div className="Item">
                  <a href={"/Items/" + Item.id} >
                    <img src={Item.imageURL} alt={Item.name}  style={{ width: "200px", height: "200px" }}></img>
                  </a>
                  <div className="Item-price">
                      <div>{formatCurrency(parseInt((Item.price),10))}</div>
                      <div>
                      <button
                        onClick={() => removeFromCart(Item)}
                        className="button primary"
                      >
                        Remove
                      </button>
                      </div>
                  </div>
                </div>
              </li>
           
                               
            ))}
            </div>
           </ul>
        </>

    );
}


export default connect(
  (state) => ({
    Items: state.products.addedItems
  }),{removeFromCart}
)(Cart);