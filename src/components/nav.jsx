import {NavLink} from "react-router-dom";

export function Nav() {
    return <nav>
        <ul className="d-flex justify-content-around fs-5">
            <li><NavLink to="/perfume">Perfume</NavLink></li>
            <li><NavLink to="/makeup">Makeup</NavLink></li>
            <li><NavLink to="/skincare">Skincare</NavLink></li>
        </ul>
    </nav>
}