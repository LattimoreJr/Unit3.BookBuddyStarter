const Welcome = ({user, setUser}) => {

    const logout = () => {
        window.localStorage.removeItem("token")
        setUser({})

    }

  return (
    <div>
        <h1>Welcome back {user.username}</h1>
        <button onClick={() => logout()}>Logout</button>
    </div>
  )

}
export default Welcome