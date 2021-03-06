import React, { Component } from 'react';
import {unsplash} from '../api/index';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  state = {
    images: []
  }

  onSubmitSearch = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });

   this.setState({images: response.data.results});
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmitSearch={this.onSubmitSearch}/>
        <ImageList images={this.state.images}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
