import React from 'react';
import SearchBar from './SearchBar';
import Videolist from './VideoList';
import VideoDetail from './VideoDetail';

import youtube from '../API/Youtube';

class App extends React.Component {

    state = { videos: [], selectedVideo: null };

    render() {
        return (
            <div className='ui container' style={{ 'marginTop': '2%' }}>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <Videolist videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    onTermSubmit = async term => {
        let response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }
}

export default App;