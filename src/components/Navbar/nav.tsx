import React from 'react';
import { Link } from 'react-router-dom'
import logo from './Logo_name.png'
import '../../css/index.css'

export default function Nav() {
    const [isActive, setisActive] = React.useState(false)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item logo">
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                </div>

                <a
                    onClick={() => {
                        setisActive(!isActive)
                    }}
                    role="button"
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    )
}