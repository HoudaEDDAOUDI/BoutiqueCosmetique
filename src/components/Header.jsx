import {  Link, NavLink } from 'react-router-dom';
import {Nav} from "./Nav.jsx";
import {HeaderLogin} from "./HeaderLogin.jsx";
import {HeaderLogout} from "./HeaderLogout.jsx";
// eslint-disable-next-line react/prop-types
export function Header({ isLoggedIn, setIsLoggedIn }){
    return <header className="d-flex justify-content-between align-items-center px-4 ">
        <Link to="/" className="my-3"><img src="/images/logo.png" alt="Logo"/></Link>
        <Nav/>

        {isLoggedIn? (
            <HeaderLogout setIsLoggedIn={setIsLoggedIn} />
        ):(
            <HeaderLogin/>
        )}
    </header>
}