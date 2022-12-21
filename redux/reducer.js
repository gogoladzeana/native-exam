const initialState = {
    allProducts:[],
    cartProducts:[],
    product:'product'
}


export const storeReducer = (state = initialState, action) => {
    switch (action.type) {
      case  'SET_PRODUCTS':
        return action.payload;
     case 'ADD_TO_CART':
        return {...state, cartProducts:[...state.cartProducts, action.payload]}
    case 'REMOVE_PRODUCT_FROM_CART':
        const productIndex = action.payload;
        const updatedCart = state.cartProducts.filter((el, index)=>index!==productIndex)
        return {...state, cartProducts:updatedCart}    
      default:
        return state;
    }
  };