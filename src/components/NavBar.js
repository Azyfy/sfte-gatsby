import { Link } from 'gatsby'
import React from 'react'

export default function NavBar() {
    return (
        <nav>
            <div className="link" >
                <Link to="/" 
                    activeClassName="active"> Početna  </Link>
            </div>

            <div className="link" >
                <Link to="/o-nama" 
                    activeClassName="active"> O nama  </Link>
            </div>

            <div className="link" >
                <Link to="/udomljavanje" 
                    activeClassName="active"> Udomljavanje </Link>   
            </div>

            <div className="link" >
                <Link to="/kontakt" 
                    activeClassName="active"> Kontakt </Link>
            </div>
        </nav>
    )
}