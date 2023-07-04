import {Link} from 'react-router-dom'
import './index.css'
import CartContext from '../../context/CartContext'

const Profile = props => {
  const {history} = props

  return (
    <CartContext.Consumer>
      {value => {
        const {user} = value
        const imageUrl =
          user === 'rahul'
            ? 'https://i.pinimg.com/originals/b5/08/57/b50857193578d548bbda87968a02281b.jpg'
            : 'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?pid=ImgDet&rs=1'
        const contact = user === 'rahul' ? 9876548712 : 7865496431
        return (
          <div className="main-container">
            <div className="Profile-section">
              <img src={imageUrl} alt="profile" className="profile-image" />

              <p>
                Name:{' '}
                <span>{user.charAt(0).toUpperCase() + user.substring(1)}</span>
              </p>
              <p>
                Email: <span>{user}@gmail.com</span>
              </p>
              <p>
                Phone no: <span>{contact}</span>
              </p>

              <p>Address</p>
              <hr />
              <ul>
                <li>Street: 222, Kherwadi Road, Nr Golden Bakery, Bandra</li>
                <li>Dno: 24/A</li>
                <li>City: Mumbai</li>
                <li>State/province/area: Maharashtra</li>
                <li>Country India</li>
              </ul>
              <Link
                to={{
                  pathname: '/cart',
                  state: {user},
                }}
              >
                <button type="button" className="cm-button">
                  your orders
                </button>
              </Link>
              <Link to="/orders">
                <button type="button" className="cm-button">
                  Previous orders
                </button>
              </Link>
            </div>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}

export default Profile
