import {NavLink} from "react-router-dom";

export function Nav() {
    return <nav>
        <ul className="d-flex justify-content-around fs-5">
            <li><NavLink to="/travaux/cosmetique/perfume">Perfume</NavLink></li>
            <li><NavLink to="/travaux/cosmetique/makeup">Makeup</NavLink></li>
            <li><NavLink to="/travaux/cosmetique/skincare">Skincare</NavLink></li>
        </ul>
    </nav>
}