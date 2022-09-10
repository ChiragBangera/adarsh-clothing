import { Outlet, Link } from "react-router-dom"
import { Fragment } from "react"
import { ReactComponent as CrownSVG } from "../../assets/sweater-clothes-svgrepo-com (1) (1).svg"
import './navigation.styles.scss'

const NavBar = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'><CrownSVG/></Link>
                <div className="links-container">
                    <Link className="nav-link" to="/shop">Shop</Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}



export default NavBar