import { useState, useEffect } from "react"
import Books from "./components/Books"
import axios from "axios"

function App() {
  const [token, setToken] = useState(null)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
        setBooks(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  },[])

  return (
    <div>
      <h1>Welcome to the Library</h1>
      <Books books={books} setBooks={setBooks}/>
    </div>
  )
}

export default App
