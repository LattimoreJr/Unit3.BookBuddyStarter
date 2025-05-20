import { useState, useEffect } from "react"
import Books from "./components/Books"
import axios from "axios"
import SingleBook from "./components/SingleBook"
import { Routes, Route } from "react-router-dom"





function App() {
  const [token, setToken] = useState(null)
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
        console.log(data)


        setAllBooks(data)

      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  },[])

  return (
    <div>
      <h1>Welcome to the Library</h1>
      <Routes>
        <Route path="/" element={<Books allBooks={allBooks} setAllBooks={setAllBooks}/>} />
        <Route path="/books" element={<Books allBooks={allBooks} setAllBooks={setAllBooks}/>} />
        <Route path="/books/:id" element={<SingleBook allBooks={allBooks} setBooks={setAllBooks}/>} />
      </Routes>
    </div>
  )
}

export default App
