// eslint-disable-next-line react/prop-types
export function PanierArticle({ article, onSupprimer }) {

    return (
        <tr>
            <td className="w-25">
                <img className="w-25" src={article.imgArticle} alt={article.nomArticle} />
            </td>
            <td>{article.nomArticle}</td>
            <td>{article.prixArticle}</td>
            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onSupprimer(article.id)}
                >
                    Supprimez
                </button>
            </td>
        </tr>
    );
}