import React, { Component } from "react";
// import axios from "axios";
import { SearchBar } from './SearchBar/SearchBar';
import css from './Styles.module.css'
import { fetchImages } from "./api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";

// const key = "34935392-24250165e01040adac8554f89";
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    pageNr: 1,
    error: null,
    modalOpen: true,
    modalImg: "",
    modalAlt: "",
  };

   handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearchQuerySubmit = (evt) => {
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

  handleClickMore = async() => {
    const response = await fetchImages(
      this.state.query,
      this.state.pageNr + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNr: this.state.pageNr + 1,
    });
  }

   handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

   handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.handleModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { images, query } = this.state;
    // const query = "";

    return (
      <div>
        <SearchBar onSubmit={this.handleSearchQuerySubmit} onChange={this.handleInputChange } />
        <ImageGallery onClick={this.handleImageClick} images={images} />
        <Button onClick={this.handleClickMore} />
        <Modal src={this.state.modalImg} alt={this.state.modalAlt} handleClose={this.handleModalClose} />
      </div>
    );
  }
}
