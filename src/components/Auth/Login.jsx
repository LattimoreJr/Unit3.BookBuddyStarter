/* TODO - add your code to create a functional React component that renders a login form */
import axios from "axios"
import { Link } from "react-router-dom"


const LoginForm = ({authenticate, setToken}) => {


  const login = async (formData) => {
    const email = formData.get("email")
    const password = formData.get("password")
    const user = {
      email: email,
      password: password  
    }
    try {
      const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", user)
      console.log(data)
      setToken(window.localStorage.setItem("token", data.token))
      authenticate(window.localStorage.getItem("token"))

    } catch (error) {
      console.error(error)
      
    }
  }



  return (
    <div>
      <form action={login}>

        <label>
              Email:
              <input type="text" name="email" />
        </label>
        <label>
              Password:
              <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <Link to="/">Return to Homepage</Link>
      </div>
  )
}
export default LoginForm