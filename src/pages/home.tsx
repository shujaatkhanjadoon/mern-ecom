import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCardhandler = () => {

  }
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Products
        <Link to="/search" className="findmore">More</Link>
      </h1>
      <main>
        <ProductCard 
        photo="src/assets/images/camera.jpeg"
        name="camera"
        productId="1"
        stock="3"
        price="230"
        handler={addToCardhandler}
        />
      </main>
    </div>
  )
}

export default Home
