import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  orderList: [],
  removeAllCartItems: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  incrementCartItemQuantity: () => {},
  decrementCartItemQuantity: () => {},
  checkoutCartItems: () => {},
  user: 'rahul',
  updateUsername: () => {},
})

export default CartContext
