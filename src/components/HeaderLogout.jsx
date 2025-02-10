import {Link, useNavigate} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function HeaderLogout({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        setIsLoggedIn(false);
        navigate("/travaux/cosmetique/");
    };

    return <div className="login">
        <Link to="/travaux/cosmetique/cart" className="btn btn-light mx-3 " href=""><img className="w-25" src="images/shopping-bag.png" alt=""/></Link>
        <button className="btn btn-outline-light px-4" onClick={handleLogout}>Logout</button>
    </div>
}