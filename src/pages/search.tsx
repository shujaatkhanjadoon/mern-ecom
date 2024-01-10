import { useState } from "react"

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("")
  const [maxPrice, setMaxPrice] = useState(100);
  const [Category, setCategory] = useState("");
  const [page, setPage] = useState(1)

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
          <option value="">Sample</option>
          <option value="">Sample 1</option>
          <option value="">Sample 2</option>
        </select>
        </div>
        
      </aside>
    </div>
  )
}

export default Search
