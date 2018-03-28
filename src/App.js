import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SearchForm from './components/SearchForm/SearchForm';
import Images from './components/Images/Images';
import ShowImage from './components/ShowImage/ShowImage';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      isEmptyInput: false,
      images: [],
      imgIndex: null,
    };

    this.search = this.search.bind(this);
    this.onClickImage = this.onClickImage.bind(this);
    this.onCloseSlideShow = this.onCloseSlideShow.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  onCloseSlideShow() {
    this.setState({
      imgIndex: null,
    });
  }

  onClickImage(id) {
    this.state.images.forEach((currentValue, index) => {
      if (currentValue.imageId === id) {
        this.setState({
          imgIndex: index,
        });
        console.log(id, index);
      }
    });
  }

  search(searchValue) {
    if (!searchValue) {
      this.setState({ isEmptyInput: true });
      return;
    }

    this.setState({ loading: true, isEmptyInput: false });

    fetch(
      `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchValue}&count=30`,
      { headers: { 'Ocp-Apim-Subscription-Key': 'b763eddd694345cfaa411d94dc428a4c' } },
    )
      .then(response => response.json())
      .then(json => json.value)
      .then((images) => {
        console.log(images);
        return this.setState({ images, loading: false });
      });
  }

  nextImage() {
    this.setState({
      imgIndex: this.state.imgIndex >= this.state.images.length - 1 ?
        this.state.images.length - 1 :
        this.state.imgIndex + 1,
    });
  }

  prevImage() {
    this.setState({ imgIndex: this.state.imgIndex <= 0 ? 0 : this.state.imgIndex - 1 });
  }

  render() {
    const {
      loading, images, isEmptyInput, imgIndex,
    } = this.state;

    if (isEmptyInput) {
      return (
        <section className="collection">
          <SearchForm search={this.search} />
          <p className="error-empty">Задан пустой поисковый запрос</p>
        </section>
      );
    }

    if (loading) {
      return (
        <section className="collection">
          <SearchForm search={this.search} />
          <div className="loader loader-fullscreen">
            <div className="loader__spin" />
          </div>
        </section>
      );
    }
    return (
      <section className="collection">
        <SearchForm search={this.search} />
        <div className="images-grid">
          <Images images={images} onClick={this.onClickImage} />
        </div>
        {imgIndex !== null &&
        <ShowImage
          images={this.state.images}
          imgIndex={this.state.imgIndex}
          onClose={this.onCloseSlideShow}
          nextImage={this.nextImage}
          prevImage={this.prevImage}
        />
                      }
      </section>
    );
  }
}


export default App;
