import {useState} from "react";
import {Link} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export function SignIn({firstName, lastName, setLastName, setFirstName}){
    //const [firstName, setFirstName] = useState("");
    //const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignup = (e)=>{
        e.preventDefault();
        const users = JSON.parse(localStorage.getItem("users")) || []; ////////!!!!!!!!!!!!!!!!!!!!!!!!!!
        const userExists = users.some((users)=> users.email  === email );

        if(userExists){
            setMessage("Cet utilisateur existe déjà !")
            return;
        }

        users.push({firstName, lastName, email, password})
        localStorage.setItem("users", JSON.stringify(users));

        setMessage("Inscription réussie !");
        //setFirstName(firstName);
        //setLastName(lastName);
        //setEmail(email);
        //setPassword("");
        console.log({firstName, lastName});
    }

    return <form onSubmit={handleSignup}
              className="d-flex flex-column align-items-center justify-content-center border border-4 border-white py-5">
            <div className="d-flex justify-content-center">
                {message && <p className="bg-light-subtle w-100 px-5 py-2 rounded-3 text-dark-emphasis fw-bold">{message}<Link className="text-black fw-bold" to="/login">Veuillez vous connectez</Link> </p>}
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex flex-column align-items-start w-75 ms-5">
                    <label htmlFor="firstName" className="form-label">First name*</label>
                    <input
                        type="text"
                        id="firstName"
                        className="form-control w-75 pe-4"
                        placeholder="John"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="d-flex flex-column align-items-start w-75">
                    <label htmlFor="lastName" className="form-label">Last name*</label>
                    <input
                        type="text"
                        id="lastName"
                        className="form-control w-75 pe-4"
                        placeholder="Doe"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
            </div>

            <div className="d-flex flex-column align-items-start py-2  w-25">
                <label htmlFor="email" className="form-label">E-mail*</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="john.doe@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-light my-3 px-4">SIGN IN</button>
        </form>
}