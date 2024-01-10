import React from "react"
import { FaPlus } from "react-icons/fa";

interface ProductCardProps {
    productId?: string;
    photo: string;
    name: string;
    price: string;
    stock?: string;
    handler: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    productId,
    photo,
    name,
    price,
    stock,
    handler
}) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name} />
      <p>{name}</p>
      <span>$ {price}</span>
      <span>{stock}</span>
      <span>{productId}</span>
      <div>
        <button onClick={() => handler() }>
            <FaPlus />
        </button>
      </div>
    </div>
  )
}

export default ProductCard
