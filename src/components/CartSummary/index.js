// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, checkoutCartItems} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      const checkOut = () => {
        alert('order successfully placed')
        checkoutCartItems()
      }

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartList.length} Items in cart</p>
            <button
              type="button"
              className="checkout-button d-sm-none"
              onClick={checkOut}
            >
              Checkout
            </button>
          </div>
          <button
            type="button"
            className="checkout-button d-lg-none"
            onClick={checkOut}
          >
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
