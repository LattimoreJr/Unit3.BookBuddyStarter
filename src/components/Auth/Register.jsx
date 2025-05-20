/* TODO - add your code to create a functional React component that renders a registration form */
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"



const RegisterForm = () => {
    const navigate = useNavigate()

    const register = async (formData) => {
        const firstName = formData.get("firstName")
        const lastName = formData.get("lastName")
        const email = formData.get("email")
        const password = formData.get("password")
        const user = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password  
        }
        try {
            const {data} = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register", user)
            alert("Thanks for registering!")
            navigate("/")
            
        } catch (error) {
            console.error(error)
            
        }
    }



    return (
        <div>
            <h1>Register to become a member!</h1>
            <form action={register}>
                <label>
                    First Name:
                    <input type="text" name="firstName" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <button type="submit">Register</button>
            </form>
            <Link to="/">Return to Homepage</Link>
        </div>
    )
}

export default RegisterForm