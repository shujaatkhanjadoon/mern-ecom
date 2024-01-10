import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsType = {
    cartItem: any;
}

const CartItem = ({ cartItem }:CartItemsType ) => {
    const {productId, photo, name, quanity, price} = cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>${price}</span>
      </article>
      <div>
        <button>-</button>
        <p>{quanity}</p>
        <button>+</button>
      </div>
      <button><FaTrash /></button>
    </div>
  )
}

export default CartItem
