import CartContext from '../../context/CartContext'
import OrderItem from '../OrderItem'
import './index.css'

const Orders = () => (
  <CartContext.Consumer>
    {value => {
      const {orderList, user} = value
      let sortedOrderList = orderList.filter(each => each.user === user)
      sortedOrderList = sortedOrderList.reverse()
      return (
        <div className="recent-orders-page">
          <h1>Recent Orders</h1>
          {sortedOrderList.map(each => (
            <OrderItem item={each} />
          ))}
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Orders
