import React, { Component } from "react";
import unsplash from "../../api/unsplash";
// import axios from 'axios';

import SearchBar from "../SearchBar";
import ImageList from "../ImageList";
import "./app.scss";

class App extends Component {
  state = {
    images: []
  };

  onSearchSubmit = async inputValue => {
    const response = await unsplash.get("/search/photos/", {
      params: { query: inputValue, page: 1, per_page: 50 }
    });
    // console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  // Easier way, where you import axios directly in this component
  // And you don't need the unspalash.js file any more
  // onSearchSubmit = async (inputValue) => {
  //   const API_KEY =
  //     '6627d1c7511a03b332b1fa77cbf009f8072f94427c64c34ec0f6436d3ad4cde5';

  //   const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${
  //     inputValue
  //     }&client_id=${API_KEY}`);

  //   // console.log(response.data.results);
  //   this.setState({ images: response.data.results });
  // };

  render() {
    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {/* There are {this.state.images.length} images. */}
        <ImageList images={this.state.images} />
      </>
    );
  }
}

export default App;
