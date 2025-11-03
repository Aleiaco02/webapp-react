import { Link } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand mx-5 my-3 h1" to="/">
                    Boolflix
                </Link>
            </div>
        </nav >
    )
}

export default Header
