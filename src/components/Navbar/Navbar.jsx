import { NavLink, Link } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
            <Link to="/" className="navbar-brand fs-3 ubuntu">
                Rick & Morty <span className="text-primary">API</span>
            </Link>
            <style>{`
            button[aria-expanded="false"] > .close {
                display: none;
            }
            button[aria-expanded="true"] > .open {
                display: none;
            }
            `}</style>
            <button
                className="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="fas fa-bars open text-dark"></span>
                <span className="fas fa-times close text-dark"></span>
            </button>
            <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNavAltMarkup"
            >
                <div className="navbar-nav fs-5">
                    <NavLink to="/" className="nav-link">
                        Personajes
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-link"
                        to="/about"
                    >
                        Acerca de
                    </NavLink>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar