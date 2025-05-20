import { useState, useEffect } from "react"
import Books from "./components/Books/Books"
import axios from "axios"
import SingleBook from "./components/Books/SingleBook"
import { Routes, Route, Link, useLocation } from "react-router-dom"
import Search from "./components/Books/Search"
import LoginForm from "./components/Auth/Login"
import RegisterForm from "./components/Auth/Register"
import Welcome from "./components/Auth/Welcome"





function App() {
  const [token, setToken] = useState(null)
  const [allBooks, setAllBooks] = useState([])
  const [user, setUser] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const {data} = await axios.get("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books")
    


        setAllBooks(data)

      } catch (error) {
        console.error(error)
      }
    }
    fetchBooks()
  },[])


  const authenticate = async (token) => {
    try {
      if(token){
        throw Error("No token found")
      }
      const response = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",{
        headers:{
          "Authorization": `Bearer ${window.localStorage.getItem("token")}`
        }
      })
      setUser(response.data)
      setToken(window.localStorage.getItem("token"))
    } catch (error) {
      console.error(error)
      
    }
}


useEffect(() => {
  const loggedInUser = window.localStorage.getItem("token")
  if(loggedInUser){
    authenticate(loggedInUser)
  }
},[user.id])

  return (
    
    <div>
      {
        location.pathname === "/register" ? (null) : (
          <div>
                  {
        user.id ? <Welcome user={user} setUser={setUser}/> : 
        <div>
          Please login to see your account
          <LoginForm authenticate={authenticate} setToken={setToken}/>
          <Link to="/register"><h3>Make an account</h3></Link>
        </div>
      }
            <hr/>
          </div>

        )
      }


  
      <h1>Welcome to the Library!</h1>
      
      <Routes>
        <Route path="/" element={<Books allBooks={allBooks} setAllBooks={setAllBooks}/>} />
        <Route path="/books" element={<Books allBooks={allBooks} setAllBooks={setAllBooks}/>} />
        <Route path="/books/:id" element={<SingleBook allBooks={allBooks} setBooks={setAllBooks}/>} />
        <Route path="/books/search/?" element={<Search allBooks={allBooks}/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
      </Routes> 
    </div>
  )
}

export default App
