import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                            <span className="icon-bar"> </span>
                        </button>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li className="active">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="/staff">
                                    Staff
                                </Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Link className="nav-link" to="/">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        )
    }
}

export default Navbar