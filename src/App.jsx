import {createBrowserRouter, RouterProvider, Link, NavLink} from 'react-router-dom';
import {HeroImage} from './components/HeroImage';
import './App.css'
import {Header} from './components/Header'
import {DernierArticle} from './components/dernierArticle';
import {BestSeller} from './components/BestSeller';
import {Article} from "./pages/Article.jsx";
import {SignIn} from "./pages/SignIn.jsx";
import {Login} from "./pages/login.jsx";
import {useState} from "react";
import {Panier} from "./pages/panier.jsx";

const articles = [
    {
        id: 1,
        nom: "KissKiss",
        prix: '22€99',
        description: "Un rouge à lèvres crémeux et élégant, offrant une couvrance parfaite et une hydratation optimale. Disponible en teintes vibrantes pour sublimer votre sourire.",
        type: "RougeALevre",
        image: '/images/rouge_a_levre1.jpg'
    },
    {
        id: 2,
        nom: "Tom Ford",
        prix: '99€99',
        description: "Un parfum audacieux aux notes florales et boisées, incarnant le luxe et l'élégance intemporelle pour une allure irrésistible.",
        type: "Parfum",
        image: '/images/tomford.jpg'
    },
    {
        id: 3,
        nom: "Chanel Lipstick",
        prix: '78€99',
        description: "Ce rouge à lèvres iconique Chanel combine sophistication et confort, offrant une tenue impeccable et des couleurs lumineuses pour chaque occasion.",
        type: "RougeALevr",
        image: '/images/best_seller.png'
    },
    {
        id: 4,
        nom: "Tom Ford Lipstick",
        prix: '87€99',
        description: "Laissez-vous séduire par ce rouge à lèvres luxueux, alliant texture soyeuse et pigments riches pour un fini éclatant.",
        type: "RougeALevre",
        image: '/images/rougeALevreCoulant.jpg'
    },
    {
        id: 5,
        nom: "Chanel Velvet",
        prix: '65€99',
        description: "Une touche de velours sur vos lèvres grâce à ce rouge Chanel, alliant couleurs intenses et sensation de légèreté.",
        type: "RougeALevre",
        image: '/images/rougeALevreChanel.jpg'
    },
    {
        id: 6,
        nom: "Fossula Cream",
        prix: '34€99',
        description: "Une crème hydratante ultra-légère pour une peau douce, éclatante et revitalisée. Convient à tous les types de peau.",
        type: "Skincare",
        image: '/images/skincarePetiteBoite.jpg'
    },
    {
        id: 7,
        nom: "Fossula Toner",
        prix: '26€99',
        description: "Un toner rafraîchissant enrichi en extraits naturels pour purifier et rééquilibrer votre peau tout en douceur.",
        type: "Skincare",
        image: '/images/skincareBoiteAlignee.jpg'
    },
    {
        id: 8,
        nom: "Missha Cream",
        prix: '45€99',
        description: "Offrez à votre peau une hydratation intense avec cette crème Missha, idéale pour restaurer l'élasticité et l'éclat naturel.",
        type: "Skincare",
        image: '/images/skincarBoiteSuperposee.jpg'
    },
    {
        id: 9,
        nom: "Black Opium",
        prix: '129€99',
        description: "Un parfum envoûtant et moderne, aux notes de café et de vanille, parfait pour révéler votre côté audacieux et mystérieux.",
        type: "Parfum",
        image: '/images/blackOpium.jpg'
    },
    {
        id: 10,
        nom: "Dior J'adore",
        prix: '89€99',
        description: "Un parfum floral raffiné et intemporel, parfait pour sublimer chaque moment avec une touche de grâce et de féminité.",
        type: "Parfum",
        image: '/images/dior.jpg'
    }
];

function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    console.log(setIsLoggedIn)

    const router = createBrowserRouter([
        {
            path: '/',
            element: (
                <div>
                    <div className='accueil'>
                        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
                        <HeroImage/>
                    </div>

                    <div className=" d-flex justify-content-around dernierArticle bg-white px-1 py-1" id="new">
                        <DernierArticle article={articles[0]}/>
                        <div className="div">
                            <img className="img-fluid" src="images/femme_de_dos.png"/>
                        </div>
                        <DernierArticle article={articles[1]}/>
                    </div>

                    <div>
                        <img className="logo py-2" src="images/logo.png" alt="logo"/>
                    </div>

                    <BestSeller article={articles[2]}/>

                </div>
            ),
        },
        {
            path: '/new/:id',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn}/>
                    <Article articles={articles}/>
                </div>
            ),
        },
        {
            path: '/makeup',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <div className="d-flex justify-content-center border-top border-4 border-white">
                        <h1 className="fs-1 pt-2">Makeup</h1>
                    </div>

                    <div className="d-flex justify-content-around dernierArticle bg-white px-1 py-1">
                        {articles
                            .filter(article => article.type === "RougeALevre") // Filtrer les articles par catégorie
                            .map(article => ( // Générer un composant DernierArticle pour chaque article
                                <DernierArticle key={article.id} article={article}/>
                            ))
                        }
                    </div>
                </div>
            ),
        },
        {
            path: '/skincare',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <div className="d-flex justify-content-center border-top border-4 border-white">
                        <h1 className="fs-1 pt-2">SKINCARE</h1>
                    </div>

                    <div className="d-flex justify-content-around dernierArticle bg-white px-1 py-1">
                        {articles
                            .filter(article => article.type === "Skincare") // Filtrer les articles par catégorie
                            .map(article => ( // Générer un composant DernierArticle pour chaque article
                                <DernierArticle key={article.id} article={article}/>
                            ))
                        }
                    </div>
                </div>
            ),
        },
        {
            path: '/perfume',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <div className="d-flex justify-content-center border-top border-4 border-white">
                        <h1 className="fs-1 pt-2">PERFUM</h1>
                    </div>

                    <div className="d-flex justify-content-around dernierArticle bg-white px-1 py-1">
                        {articles
                            .filter(article => article.type === "Parfum") // Filtrer les articles par catégorie
                            .map(article => ( // Générer un composant DernierArticle pour chaque article
                                <DernierArticle key={article.id} article={article}/>
                            ))
                        }
                    </div>
                </div>
            ),
        },
        {
            path: '/signin',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <div className="d-flex justify-content-center border-top border-4 border-white">
                        <h1 className="fs-1 pt-2">SIGN IN</h1>
                    </div>
                    <SignIn firstName={firstName} lastName={lastName} setLastName={setLastName} setFirstName={setFirstName}/>

                </div>
            ),
        },
        {
            path: '/login',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    <div className="d-flex justify-content-center border-top border-4 border-white">
                        <h1 className="fs-1 pt-2">LOGIN</h1>
                    </div>

                    <Login setIsLoggedIn={setIsLoggedIn}/>

                </div>
            ),
        },
        {
            path: '/cart',
            element: (
                <div>
                    <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

                    {/* eslint-disable-next-line no-undef */}
                    <Panier firstName={firstName} lastName={lastName}/>

                </div>
            ),
        }
    ])
    return <RouterProvider router={router}/>
}


export default App
