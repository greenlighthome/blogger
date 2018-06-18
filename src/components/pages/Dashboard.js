import React from 'react'

class Dashboard extends React.Component {
    state = {
        currentUserName: ''
    };

    componentDidMount() {
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserName: idToken.idToken.claims.name
        })
    }
    render() {
        const {currentUserName} = this.state;
        const name = currentUserName.replace(/ .*/,'');

        return(
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Dashboard</h1>
                    {name}
                </div>
            </div>
        )
    }
}

export default Dashboard