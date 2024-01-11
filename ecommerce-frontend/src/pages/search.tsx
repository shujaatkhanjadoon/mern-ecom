import { useState } from "react"
import ProductCard from "../components/product-card";

const Search = () => {


  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("")
  const [maxPrice, setMaxPrice] = useState(1000);
  const [Category, setCategory] = useState("");
  const [page, setPage] = useState(1);

  const isPrevpage = page > 1;
  const isNextPage = page < 5;

  const addToCardhandler = () => {

  }

  return (
    <div className="search">
      <aside>
        <h2>Filters</h2>
        <div>
        <h4>Sort</h4>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
          <option value="asc">Price (Low to High)</option>
          <option value="dsc">Price (High to Low)</option>
        </select>
        </div>

        <div>
        <h4>Max Price {maxPrice || ""}</h4>
        <input 
        type="range"
        min={10}
        max={1000}
        value={maxPrice} 
        onChange={(e) => setMaxPrice(Number(e.target.value))} /> 
        </div>

        <div>
        <h4>Category</h4>
        <select value={Category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="a">Sample</option>
          <option value="b">Sample 1</option>
          <option value="c">Sample 2</option>
        </select>
        </div>
        
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="Search by name..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <ProductCard 
          photo="src/assets/images/camera-1.jpeg"
          name="camera"
          // productId="1"
          // stock="3"s
          price="230"
          handler={addToCardhandler}
          />
        </div>
        <article>
          <button onClick={() => setPage( (prev) => prev - 1 )} disabled={!isPrevpage}>Prev</button>
          <span>{page} of 5</span>
          <button onClick={() => setPage( (prev) => prev + 1 )} disabled={!isNextPage}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search
