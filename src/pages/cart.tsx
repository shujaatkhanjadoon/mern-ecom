import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc"
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "aasdasd",
    photo: "src/assets/images/camera-1.jpeg",
    name: "MacBook",
    price: 233123,
    quanity: 5,
    stock: 10,
  }
];
const subTotal = 4000;
const tax = Math.round(subTotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const totals = subTotal + tax + shippingCharges - discount;



const Cart = () => {
  const [couponCode, setCouponCode] = useState("");
  const [isValidCouponCode, setIsvalidCouponCode] = useState(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {

      if(Math.random() > 0.5) setIsvalidCouponCode(true);
      else setIsvalidCouponCode(false);

    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsvalidCouponCode(false);
    }
    },[couponCode]);


  return (
    <div className="cart">
      <main>
        {
          cartItems.length > 0 ? cartItems.map((i, idx) => (
            <CartItem key={idx} cartItem={i}/>
          )) : <h1>No items added!</h1>
        }
      </main>
      <aside>
        <p>Subtotals: ${subTotal}</p>
        <p>Tax: $ {tax}</p>
        <p>Shipping Changes: ${shippingCharges}</p>
        <p>Discount: <em className="red"> - ${discount}</em></p>
        <p><b>Totals: ${totals}</b></p>
        <input type="text" placeholder="BLESSEDFRIDAY" value={couponCode} onChange={(e) => setCouponCode(e.target.value) }/>
        {couponCode && (
          couponCode && isValidCouponCode ? 
          <span className="green">${discount} off using the <code>{couponCode}</code></span> : 
          <span className="red">Invalid Coupon Code! <VscError /></span>
        )}
        {cartItems.length > 0 && (
          <Link to="/shipping" >Checkout</Link>
        )}
      </aside>
    </div>
  )
}

export default Cart
