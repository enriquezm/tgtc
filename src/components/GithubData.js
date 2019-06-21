import React from 'react';

class GithubData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : "loading...",
        }
        this.handleResponse = this.handleResponse.bind(this);
        this.handleJSONResponse = this.handleJSONResponse.bind(this);
    }
    handleResponse(response) {
        let contentType = response.headers.get('content-type');
        if (contentType.includes('application/json')) {
            return this.handleJSONResponse(response);
        } else {
            throw new Error(`Sorry, content-type ${contentType} not supported.`)
        }
    }
    handleJSONResponse(response) {
        return response.json()
        .then(json => {
            if (response.ok) {
                return json
            } else {
                return Promise.reject(Object.assign({}, json, {
                    status: response.status,
                    statusText: response.statusText
                }));
            }
        })
    }
    componentDidMount() {
        fetch('https://api.github.com/users/enriquezm/repos?sort=updated')
            .then(this.handleResponse)
            .then(data => {
                // map through first 3 items and return to state
                this.setState({
                    data: data[0].name
                })
            })
            .catch(error => console.log(error));


        this.setState({
            data: "loaded",
        });
    }
    render() {
        // map through data and return first 3
       return  (
        <ul>{this.state.data}</ul>
       )
    }
}

export default GithubData;