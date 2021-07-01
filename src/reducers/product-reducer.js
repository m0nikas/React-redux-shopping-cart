import {ADD_TO_CART,FETCH_PRODUCTS,GET_PRODUCT,REMOVE_CART} from "../constants/types";
  
const initState = {
    items: [],
    addedItems:[{"name":"Your Cart","price":"0"}],
    total: 0,
    quantity:0,
    item:[],
    count:1
}
  export const productsReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
          console.log(action.payload)
          return {...state, items: action.payload };
        case GET_PRODUCT:
          return {...state,item : action.payload};
        case ADD_TO_CART:
          console.log(state.addedItems)
          console.log(action.data)
          console.log(action.data.id)
          // let item = state.items.find(item=>item.id===action.data.id)
          var inCart = state.addedItems.find(item=>item.id === action.data.id)? true : false
          state = {...state, addedItems : inCart? state.addedItems:[...state.addedItems, action.data]}
          console.log(state.addedItems);
          state.count=state.addedItems.length;
          return {...state,addedItems:state.addedItems,count:state.count};
        case REMOVE_CART:
            console.log(action.data)
            console.log(state.addedItems)
            const items = state.addedItems.slice().filter((x) => x.id !== action.data.id);
            // let history = items.find(item=>item.id === action.id)? true: false;

            // if (history){
            //     items.splice(items.findIndex(item=>item.id===action.id), 1)
            //     state = {...state, addedItems: items}
            // }      
            state={...state,addedItems:items}   
            return{...state,addedItems:state.addedItems};

      default:
        return state;
  }
}

