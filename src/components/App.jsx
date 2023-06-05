import React, { Component } from "react";
import axios from "axios";
import { SearchBar } from './SearchBar/SearchBar';
import css from './Styles.module.css'
import { fetchImages } from "./api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";

// const key = "34935392-24250165e01040adac8554f89";
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    pageNr: 1,
    error: null,
  };

  // async componentDidMount() {
  //   // const response = await axios.get("&image_type=photo&orientation=horizontal&per_page=12");
  //   // const response = await axios.get(`https://pixabay.com/api/?key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
  //   const response = await axios.get(`https://pixabay.com/api/?key=34935392-24250165e01040adac8554f89&image_type=photo&pretty=true&per_page=12`);
  //   this.setState({ images: response.data.hits });
  // }

   handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearchQuerySubmit = async evt => {
    evt.preventDefault();
    this.getImages(this.state.query);
    // this.setState({ isLoading: true });
    // const inputForSearch = evt.target.elements.inputForSearch;
    // console.log(inputForSearch);
    // if (inputForSearch.value.trim() === '') {
    //   return;
    // }
    // const response = await fetchImages("dog", 1);
    // this.setState({
    //   images: response,
    //   isLoading: false,
    //   input: input.value,
    //   // currentSearch: inputForSearch.value,
    //   pageNr: 1,
    // });
  };

  getImages = async (query) => {
    this.setState({ loading: true });
    try {
      const images = await fetchImages(query);
      this.setState({ images });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleImageClick = (evt) => {
    this.setState({
      modalOpen: true,
      modalAlt: evt.target.alt,
      modalImg: evt.target.name,
    })
  }


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
