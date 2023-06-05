import React, { Component } from "react";
// import axios from "axios";
import { SearchBar } from './SearchBar/SearchBar';
import css from './Styles.module.css'
import { fetchImages } from "./api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";

// const key = "34935392-24250165e01040adac8554f89";
// axios.defaults.baseURL = `https://pixabay.com/api/?key=${key}`;


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    query: "",
    pageNr: 1,
    error: null,
    modalOpen: false,
    modalImg: "",
    modalAlt: "",
  };

   handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearchQuerySubmit = (evt) => {
    evt.preventDefault();
    // this.setState({ isLoading: true });
    this.getImages(this.state.query);
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
    const { images, isLoading, modalOpen, modalImg} = this.state;


    return (
      <div>
        {isLoading
          ? (<Loader />)
          : (
            <React.Fragment>
              <SearchBar onSubmit={this.handleSearchQuerySubmit} onChange={this.handleInputChange } />
              <ImageGallery onClick={this.handleImageClick} images={images} />
              {this.state.images.length > 0 ? (<Button onClick={this.handleClickMore} /> ) : null}
            </React.Fragment>
         )}
        {modalOpen
          ? (<Modal src={this.state.modalImg} alt={this.state.modalAlt} handleClose={this.handleModalClose} />)
          : null}
      </div>
    );
  }
}
