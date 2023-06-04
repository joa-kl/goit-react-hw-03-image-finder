// import css from './App.module.css'
import { SearchBar } from './SearchBar/SearchBar';
import css from './Styles.module.css'


// const key = `34935392-24250165e01040adac8554f89`
// const api = `https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12`


// export const App = () => {
//   return (
//     <div className={css.container}>
//       <SearchBar/>
//     </div>
//   );
// };

import React, { Component } from "react";
import axios from "axios";

const key = "34935392-24250165e01040adac8554f89";
axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;

const ImagesList = ({ images }) => (
  <ul className={css.ImageGallery}>
    {images.map(({ id, webformatURL, tags}) => (
      <li key={id} className={css.ImageGalleryItem}>
        <img src={webformatURL} className={css.ImageGalleryItemImage } target="_blank" rel="noreferrer noopener" alt={tags} />
      </li>
    ))}
  </ul>
);

export class App extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    // const response = await axios.get("&image_type=photo&orientation=horizontal&per_page=12");
    // const response = await axios.get(`https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    const response = await axios.get(`https://pixabay.com/api/?key=34935392-24250165e01040adac8554f89&image_type=photo&pretty=true&per_page=12`);
    this.setState({ images: response.data.hits });
  }

  submitSearchQuery() {

  }

  render() {
    const { images } = this.state;
    const query = "";

    return (
      <div>
        <SearchBar onSubmit={this.submitSearchQuery } />
        <ImagesList images={images} query={query} />
      </div>
    );
  }
}
