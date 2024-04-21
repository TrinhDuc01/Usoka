import { Link } from "react-router-dom";
import '../css/layout.css';

const Layout = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown px-lg-2">
                <div className="nav-link dropdown-toggle text-light under-line-hover" style={{ height: 64 }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Sections
                </div>
                <ul className="dropdown-menu bg-dark drop-d">
                    <li><Link className="dropdown-item text-light" to="general">General</Link></li>
                    <li><Link className="dropdown-item text-light" to="bronze">Bronze</Link></li>
                    <li><Link className="dropdown-item text-light" to="bronze">Silver</Link></li>
                    <li><Link className="dropdown-item text-light" to="bronze">Gold</Link></li>
                    <li><Link className="dropdown-item text-light" to="bronze">Platinum</Link></li>
                    <li><Link className="dropdown-item text-light" to="bronze">Advanced</Link></li>
                </ul>
            </li>
            <li className="nav-item px-lg-2">
                <a className="nav-link under-line-hover text-light" style={{ height: 64 }} href="#">Problems</a>
            </li>
            <li className="nav-item dropdown px-lg-2">
                <a className="nav-link dropdown-toggle under-line-hover text-light " style={{ height: 64 }} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Resources
                </a>
                <ul className="dropdown-menu drop-d">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item px-lg-2">
                <Link className="nav-link under-line-hover text-light" style={{ height: 64 }} to="/contact">Contact Us</Link>
            </li>
        </ul>
    )
}

export default Layout;