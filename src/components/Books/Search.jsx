import { useState, useEffect } from "react"
import { useSearchParams, Link, useNavigate } from "react-router-dom"


const Search = ({allBooks}) => {

const [searchResults, setSearchResults] = useState([])
const [searchParams, setSearchParams] = useSearchParams()
const nameSearch = searchParams.get("book")
const navigate = useNavigate()

useEffect(() => {
  const results = allBooks.filter((book) => {
    return book.title.toLowerCase().includes(nameSearch.toLowerCase())
  },)
  setSearchResults(results)
},[allBooks])

const clearSearch = () => {
  setSearchResults([])
  navigate("/books")
}

  return (
    <div>
        <h1>search results</h1>
        {   
            searchResults.map((book) => {
                return (
                    <div key={book.id} className="bookCard">
                        <ul>
                        <Link to={`/books/${book.id}`}>
                          <li>{book.title}</li> 
                        </Link>
                        </ul>
                       
                    </div>
                )
            }
            )}

        <button onClick={() => clearSearch()}>Clear Search Results</button>
    </div>
  )
}


export default Search