import {Link} from "react-router-dom";

export function HeaderLogin() {
    return <div className="login">
        <Link to="/travaux/cosmetique/signin" className="btn btn-light mx-3 px-4" href="">Sign in</Link>
        <Link to="/travaux/cosmetique/login" className="btn btn-outline-light px-4" href="">Login</Link>
    </div>
}