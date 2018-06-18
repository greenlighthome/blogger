import React from 'react'
import { Link } from 'react-router-dom'
import {withAuth} from "@okta/okta-react/dist/index";

export default withAuth(
    class Navbar extends React.Component {

        state = {
            authenticated: null
        };

        checkAuthentication = async () => {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated })
            }
        };

        async componentDidMount() {
            this.checkAuthentication()
        }

        async componentDidUpdate() {
            this.checkAuthentication()
        }

        login = async () => {
            this.props.auth.login('/')
        };

        logout = async () => {
            this.props.auth.logout('/')
        };

        render() {
            if (this.state.authenticated === null) return null;

            const logButton = this.state.authenticated ? (
                <button className="btn btn-dark btn-md auth-button" onClick={this.logout}>
                    Logout
                </button> ) : (
                <button className="btn btn-dark btn-md auth-button" onClick={this.login}>
                    Login
                </button>
            );

            const Dashboard = this.state.authenticated ? (
                <Link className="nav-link" to="/staff">
                    Dashboard
                </Link>
            ):(
                null
            );

            return(
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            Blogger
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                        >
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    {Dashboard}
                                </li>
                                <li>
                                    {logButton}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
        }
    }
)
