import React from 'react';
import Grid from './Grid';

class GithubData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: 'loading...',
    };
    this.handleResponse = this.handleResponse.bind(this);
    this.handleJSONResponse = this.handleJSONResponse.bind(this);
  }
  handleResponse(response) {
    let contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      return this.handleJSONResponse(response);
    } else {
      throw new Error(`Sorry, content-type ${contentType} not supported.`);
    }
  }
  handleJSONResponse(response) {
    return response.json().then(json => {
      if (response.ok) {
        return json;
      } else {
        return Promise.reject(
          Object.assign({}, json, {
            status: response.status,
            statusText: response.statusText,
          })
        );
      }
    });
  }
  componentDidMount() {
    fetch('https://api.github.com/users/enriquezm/repos?sort=updated')
      .then(this.handleResponse)
      .then(data => {
        // map through first 3 items and push to state array
        let reposArray = [];
        for (let i = 0; i < 3; i++) {
          reposArray.push(data[i]);
        }
        this.setState({
          repos: reposArray,
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    // map through data and return first 3
    return (
      <Grid>
        {this.state.repos.map(repo => {
          return (
            <div css={'border: 1px solid #BAC7CE; padding: 5%;'}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <a href={`${repo.html_url}`}>Visit Repo</a>
              <p>Published: {repo.created_at}</p>
              <p>Last Push: {repo.pushed_at}</p>
            </div>
          );
        })}
      </Grid>
    );
  }
}

export default GithubData;
