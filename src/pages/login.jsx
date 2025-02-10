import {useState} from "react";
import {Link} from "react-router-dom";
export function Login({ setIsLoggedIn}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Récupérer les utilisateurs existants
        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Vérifier les identifiants
        const user = users.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
             setMessage(`Bienvenue, ${user.firstName} !`);
             setIsLoggedIn(true);
            localStorage.setItem("currentUser", JSON.stringify({ userId: user.email }));
        } else {
            setMessage("Identifiants incorrects.");
        }
    };

    return <form onSubmit={handleLogin} className="d-flex flex-column align-items-center border border-4 border-white py-5">
        <div className="d-flex justify-content-center">
            {message && <p className="bg-light-subtle w-100 px-5 py-2 rounded-3 text-dark-emphasis fw-bold">{message}</p>}
        </div>
        <div className="d-flex flex-column align-items-start py-2  w-25">
            <label htmlFor="email" className="form-label">E-mail*</label>
            <input
                type="email"
                id="email"
                className="form-control"
                placeholder="john.doe@gmail.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </div>
        <div className="d-flex flex-column align-items-start py-2 w-25">
            <label htmlFor="password" className="form-label">Password*</label>
            <input
                type="password"
                id="password"
                className="form-control"
                placeholder="********"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
        </div>
        <p className="mt-3">
            Vous n'avez pas de compte ?{" "}
            <Link to="/travaux/cosmetique/signup" className="fw-bold">Créez-en un ici</Link>
        </p>
        <button className="btn btn-light my-3 px-4">LOGIN</button>
    </form>
}