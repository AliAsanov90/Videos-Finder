import './SearchBar.css';
import React, { Component } from 'react';

class SearchBar extends Component {
  state = { query: '' };

  onInputChange = (e) => {
    this.setState({ query: e.target.value });
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <div className="ui segment" style={{ marginTop: '10px' }}>
        <h3>Search videos</h3>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui action input">
            <input 
              value={this.state.query}
              onChange={this.onInputChange}
              type="text" 
              placeholder="Search..." 
            />
            <button className="ui button">Search</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
