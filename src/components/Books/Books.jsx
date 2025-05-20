/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import "./books.css"
import { Link, useNavigate } from "react-router-dom";

const Books = ({allBooks, setAllBooks}) => {
    const navigate = useNavigate()

    const searchForBook = (formData) => {
        const target = formData.get("searchBar").toLowerCase()
        navigate(`/books/search/?book=${target}`)
    }


  return (
    <div className="booksContainer">
      <h1>Here is our Catalog:</h1>
      <br/>
      <h3>Search for a book by title</h3>
        <form action={searchForBook}>
            <input type="text" name="searchBar"/>
            <button type="submit">Search</button>
        </form>
      {
        allBooks.map((book) => {
          return (
            <div key={book.id} className="bookCard">
                <Link to={`/books/${book.id}`}>
                <h3>{book.title}</h3> 
                </Link>

                <p>By: {book.author}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default Books;