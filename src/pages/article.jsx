import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export function Article({articles}){
    const navigate = useNavigate();
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userId = currentUser?.userId;

    const [panier, setPanier] = useState(() => {
        // Récupérer le panier de l'utilisateur depuis le localStorage
        return JSON.parse(localStorage.getItem(`panier_${userId}`)) || [];
    });


    const handlePanier = (e)=>{
        if(!currentUser){
            navigate("/login");
        }else{
            e.preventDefault();

            const articleDansPanier = {
                id: article.id,
                nomArticle: article.nom,
                imgArticle: article.image,
                prixArticle: article.prix,
            };

            setPanier((prevPanier) => {
                const nouveauPanier = [...prevPanier, articleDansPanier];
                localStorage.setItem(`panier_${userId}`, JSON.stringify(nouveauPanier));
                return nouveauPanier;
            });

            console.log('ajouter');
        }

    }


    const { id } = useParams();
    // eslint-disable-next-line react/prop-types
    const article = articles.find((item) => item.id === parseInt(id));

    if (!article) {
        return <p>Article introuvable.</p>;
    }

    return <div className="d-flex justify-content-between pt-4">
        <div className="w-50 d-flex justify-content-start imgArticle">
            <img className="w-75 h-100 " src={article.image} alt={article.nom}/>
        </div>
        <div className="w-50 d-flex flex-column align-items-start justify-content-center pe-5 me-5">
            <h1 className="fs-2 nomArticle fw-light">{article.nom}</h1>
            <p className="fs-4">{article.prix}</p>
            <p className="text-start">{article.description}</p>

            {article.type === "RougeALevre" && (
                <div className="couleur d-flex justify-content-start mb-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )}

            <div className="d-flex justify-content-around w-100">
                <button
                    className="btn btn-outline-light px-5 py-2"
                    onClick={handlePanier}
                >Add to bag</button>
            </div>
        </div>
    </div>
}