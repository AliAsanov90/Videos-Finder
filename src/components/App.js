import React, { Component } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetails from './VideoDetails';

class App extends Component {
  state = { 
    videos: [],
    selectedVideo: null
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  onSearchSubmit = async query => {
    const KEY = 'AIzaSyD19aBrZ9Wde41EvHU5ugvQp8bx9via0xU';
    // const KEY = 'AIzaSyA04kaskDJcZHBsiLup8lBR1AVER4hM0t4';
    // const KEY = 'AIzaSyDKtHjDDzzG8SlELRrwh4bWNsDn1PF0OHE';

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
  }

  render() {
    return (
      <div className="ui container" style={{ width: '80%' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <div className="content-wrapper" style={{ display: 'flex' }}>
          <VideoDetails selectedVideo={this.state.selectedVideo} />
          <VideosList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /> 
        </div>
      </div>
    );
  }
}

export default App;
