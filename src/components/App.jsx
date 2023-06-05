// import css from './App.module.css'



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
import { SearchBar } from './SearchBar/SearchBar';
import css from './Styles.module.css'
import { fetchImages } from "./api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";

const key = "34935392-24250165e01040adac8554f89";
axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: "",
    pageNr: 1,
  };

  async componentDidMount() {
    // const response = await axios.get("&image_type=photo&orientation=horizontal&per_page=12");
    // const response = await axios.get(`https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    const response = await axios.get(`https://pixabay.com/api/?key=34935392-24250165e01040adac8554f89&image_type=photo&pretty=true&per_page=12`);
    this.setState({ images: response.data.hits });
  }

   handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearchQuerySubmit = evt => {
    evt.preventDefault();
    this.setState({ isLoading: true });
    const inputForSearch = evt.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      return;
    }
    const response = fetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: inputForSearch.value,
      pageNr: 1,
    });
  };

  handleImageClick = (evt) => {
    this.setState({
      modalOpen: true,
      modalAlt: evt.target.alt,
      modalImg: evt.target.name,
    })
  }
    // const id = nanoid();
    // const name = evt.name;
    // const number = evt.number;
  //   const images = [this.state.images];
  //   // const doesExist = contactsLists.findIndex(contact => name === contact.name) !== -1;

  //   // doesExist
  //   //   ? alert(`${name} is already in contacts.`)
  //   //   : contactsLists.push({  name, number });
    
  //   this.setState({ images: images });
  // };

  // submitSearchQuery() {

  // }

  render() {
    const { images } = this.state;
    const query = "";

    return (
      <div>
        <SearchBar onSubmit={this.handleSearchQuerySubmit}/>
        <ImageGallery onClick={this.handleImageClick} images={images}  />
      </div>
    );
  }
}
