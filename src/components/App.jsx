// import css from './App.module.css'
import { SearchBar } from './SearchBar/SearchBar';


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
  <ul>
    {images.map(({ id, webformatURL}) => (
      <li key={id}>
        <img src={webformatURL} target="_blank" rel="noreferrer noopener" alt=""/>
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
    const response = await axios.get(`https://pixabay.com/api/?key=${key}`);
    this.setState({ images: response.data.hits });
  }

  render() {
    const { images } = this.state;

    return (
      <div>
        <SearchBar/>
        <ImagesList images={images} />
      </div>
    );
  }
}
