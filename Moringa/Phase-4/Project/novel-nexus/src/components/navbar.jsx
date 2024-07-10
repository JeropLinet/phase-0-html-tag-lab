import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"
function NavBar(){
    return(
        <>
        <nav>
            <li><a href=""></a>Home</li>
            <li><a href=""></a>About</li>
            <li><a href=""></a>Contact</li>
            <div className="login-container">
             <FontAwesomeIcon icon={faUser} className="user-icon"/>
             <button className="login-button">Author Login</button>
            </div>
        </nav>
        </>
    )
}

export default NavBar
