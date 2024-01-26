import { useState } from "react"
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import "./Authentification.css"

function Authentification() {
  const [active, setActive] = useState("Login")

  const handleClick = () => {
    if (active === "Login") {
      setActive("SignUp")
    } else {
      setActive("Login")
    }
  }
  return (
    <div className="authentification">
      <div className="auth__left">
        <img src="https://i.imgur.com/P3Vm1Kq.png" alt="" />
      </div>
      <div className="auth__right">
        {active === "Login" ? (<Login />) : (<SignUp />)}
        <div className="auth__more">
          <span>
            {active === "Login" ? (
              <>
                Don't have an account ? <button onClick={() => handleClick()}> Sign Up </button>
              </>) :
              (<>
                Don't have an account ? <button onClick={() => handleClick()}> Login </button>
              </>
              )}
          </span>
        </div>

      </div>
    </div>
  )
}

export default Authentification
