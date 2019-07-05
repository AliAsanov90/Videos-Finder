import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideosList from './VideosList';

class App extends Component {
  state = { videos: [] };

  onSearchSubmit = async query => {
    const KEY = 'AIzaSyD19aBrZ9Wde41EvHU5ugvQp8bx9via0xU';

    const res = await youtube.get('/search', {
      params: {
        q: query,
        key: KEY,
        part: 'snippet',
        type: 'video',
        maxResults: 5
      }
    });

    this.setState({ videos: res.data.items });
    // console.log(res.data);
  }

  render() {
    return (
      <div className="ui container" style={{ width: '50%' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <VideosList videos={this.state.videos} /> 
      </div>
    );
  }
}

export default App;
