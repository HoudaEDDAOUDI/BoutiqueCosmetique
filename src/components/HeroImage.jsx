import {Link} from "react-router-dom";

export function HeroImage() {
    return <div className="container text-center heroImage">
        <div className="row position-relative">
            <div className="col-md-7 position-absolute ">
                <img src="images/heroImage2.png" alt="hero image" className="img-fluid a"/>
            </div>
            <div className="col position-absolute w-75 d-flex flex-column align-items-end title">
                <p>New Collection</p>
                <h1>FENTY BEAUTY x HUDA BEAUTY</h1>
                <Link to="/travaux/cosmetique/makeup" className="btn btn-light">See more</Link>
            </div>
            <div className="deco position-absolute"></div>
        </div>
    </div>
}