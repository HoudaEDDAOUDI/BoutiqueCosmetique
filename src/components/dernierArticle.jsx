import {Link} from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export function DernierArticle({article}) {
    return <>
        <Link to={`/new/${article.id}`} key={article.id} className="position-relative div2">
            <h2 className="position-absolute px-2 pt-2 prix2">{article.nom}</h2>
            <img className="img-fluid" src={article.image} alt={article.nom}/>
            <p className="position-absolute prix">{article.prix}</p>
        </Link>
    </>
}