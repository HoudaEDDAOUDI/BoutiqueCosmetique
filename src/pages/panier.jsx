import {PanierArticle} from "../components/PanierArticle.jsx";
import {useEffect, useState} from "react";

// eslint-disable-next-line react/prop-types
export function Panier({firstName, lastName}) {
    const [panier, setPanier] = useState([]);
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const userId = currentUser?.userId;
        const panierLocalStorage = JSON.parse(localStorage.getItem(`panier_${userId}`)) || [];
        setPanier(panierLocalStorage)
    }, []);

    const enleverArticle = (idArticle) => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const userId = currentUser?.userId;
        const nouveauPanier = panier.filter((item) => item.id !== idArticle);
        setPanier(nouveauPanier);
        localStorage.setItem(`panier_${userId}`, JSON.stringify(nouveauPanier));
    };

    return <>
        <div className="d-flex justify-content-center border-top border-bottom border-4 border-white">
            <h1 className="fs-1 pt-2">Panier</h1>
        </div>
        <table className="w-100 border-start border-end border-bottom border-4 border-white">
            <thead >
            <tr>
                <th></th>
                <th>Nom</th>
                <th>Total</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {panier.length === 0 ? (
                <tr>
                    <td colSpan="4" className="text-center">
                        <p>Vous n'avez aucun article dans votre panier.</p>
                    </td>
                </tr>
            ) : (
                panier.map((article, index) => (
                    <PanierArticle
                        key={index}
                        article={article}
                        onSupprimer={enleverArticle}
                    />
                ))
            )}
            </tbody>
        </table>
    </>
}
