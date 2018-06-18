import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react';


export default withAuth(
    class Home extends Component {
        state = { authenticated: null };

        checkAuthentication = async () => {
            const authenticated = await this.props.auth.isAuthenticated();
            if (authenticated !== this.state.authenticated) {
                this.setState({ authenticated });
            }
        };

        async componentDidMount() {
            this.checkAuthentication();
        }

        async componentDidUpdate() {
            this.checkAuthentication();
        }

        render() {
            return (
                <div className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="img1.jpg" alt="Toledo, Spain"/>
                        </div>
                    </div>
                </div>
            )
        }
    }
)