/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import "./books.css"

const Books = ({books, setBooks}) => {
  return (
    <div className="booksContainer">
      <h1>Here is our Catalog:</h1>
      {
        books.map((book) => {
          return (
            <div key={book.id} className="bookCard">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
            </div>
          )
        })
      }

    </div>
  );
}

export default Books;