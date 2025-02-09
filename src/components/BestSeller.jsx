import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function BestSeller({article}){
    return <div className="bg-blanc">
        <div className="bg-foncé d-flex justify-content-between border border-5">
            <div><img src="images/best_seller.png" className="bestImage " alt="best seller"/></div>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className="h2Lipstick m-0">{article.nom}</h2>
                <h3 className="h3Lipstick">Best Seller</h3>
                <p className="w-75">{article.description}</p>
                <Link to={`/new/${article.id}`} key={article.id} className="btn btn-light">View article</Link>
            </div>
        </div>
    </div>
}