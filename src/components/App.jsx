import React, { Component } from "react";
import { SearchBar } from './SearchBar/SearchBar';
import { fetchImages } from "./api/api";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Modal } from "./Modal/Modal";
import { Loader } from "./Loader/Loader";
// import api from './api/api';



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

  componentDidMount() {
    this.setState({ loading: true });
    window.addEventListener('keydown', this.handleKeyDown);
     try {
      const images = fetchImages("dog");
      this.setState({ images });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ loading: false });
    }
}

   handleInputChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSearchQuerySubmit = (evt) => {
    evt.preventDefault();
    this.getImages(this.state.query);

    // if (query === this.state.query) {
    //   return;
    // }
    // this.setState({ query, pageNr: 1 });
  };

  // getImages = async (query) => {
  //   this.setState({ loading: true });
  //   try {
  //     const images = await fetchImages(query);
  //     this.setState({ images });
  //   } catch (err) {
  //     this.setState({ error: err });
  //   } finally {
  //     this.setState({ loading: false });
  //   }
  // }



  

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
    const { images, isLoading, modalOpen} = this.state;


    return (
      <div>
        {isLoading
          ? (<Loader />)
          : (
            <React.Fragment>
              <SearchBar onSubmit={this.handleSearchQuerySubmit} onChange={this.handleInputChange } />
              <ImageGallery onClick={this.handleImageClick} images={images} />
              {this.state.images.length > 0 && (<Button onClick={this.handleClickMore} /> )}
            </React.Fragment>
         )}
        {modalOpen && (<Modal src={this.state.modalImg} alt={this.state.modalAlt} handleClose={this.handleModalClose} />)}
      </div>
    );
  }
}
