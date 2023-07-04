import './index.css'

const OrderItem = props => {
  const {item} = props
  const {orderedDate, data, orderId} = item
  const dateTime = String(orderedDate)
  console.log(data)

  const getItem = each => {
    const {brand, title, price, quantity, imageUrl} = each
    return (
      <tr>
        <td>
          <img src={imageUrl} className="recent-image" />
        </td>
        <td>
          <p>{title}</p>
        </td>
        <td>
          <p>{brand}</p>
        </td>
        <td>
          <p>{price}</p>
        </td>
        <td>
          <p>{quantity}</p>
        </td>
        <td>
          <p>{quantity * price}</p>
        </td>
      </tr>
    )
  }

  return (
    <div>
      <h1 className="orderId">OrderID:{orderId + 1}</h1>
      <p className="time">OrderDate and Time : {dateTime}</p>
      <table className="order-table">
        <th>Item</th>
        <th>Name</th>
        <th>Brand</th>
        <th>Price </th>
        <th>Quantity</th>
        <th>Total cost</th>
        {data.map(each => getItem(each))}
      </table>
    </div>
  )
}

export default OrderItem
