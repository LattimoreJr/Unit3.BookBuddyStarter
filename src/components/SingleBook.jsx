/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { Link, useParams } from "react-router-dom";
import "./singleBook.css"





const SingleBook = ({allBooks, setAllBooks}) => {
    const params = useParams()
    const id = params.id*1
    const book = allBooks.find((book) => {
      return book.id === id
    })

    console.log(book)
    return (
        <div className="singleBookContainer">
        <h1>{book.title}</h1>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <img src={book.coverimage ? book.coverimage : null} alt={book.name}/>
        <br/>
        <Link to="/books">Back to Library</Link>
        </div>
    );
}


export default SingleBook;