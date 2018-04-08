import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import SearchForm from './components/SearchForm/SearchForm';
import Images from './components/Images/Images';
import SlideShow from './components/SlideShow/SlideShow';
import Infinite from './components/Infinite/Infinite';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      isEmptyInput: false,
      images: {},
      index: null,
      searchValue: '',
    };

    this.search = this.search.bind(this);
    this.onClickImage = this.onClickImage.bind(this);
    this.nextImages = this.nextImages.bind(this);
  }

  onClickImage(id) {
    this.state.images.value.forEach((currentValue, currentIndex) => {
      if (currentValue.imageId === id) {
        this.setState({
          index: currentIndex,
        });
      }
    });
  }

  async nextImages() {
    const { searchValue } = this.state;
    const { nextOffset, value } = this.state.images;
    if (value.length !== 150) {
      const response = await fetch(
        `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchValue}&count=${33 + nextOffset}`,
        { headers: { 'Ocp-Apim-Subscription-Key': 'b763eddd694345cfaa411d94dc428a4c' } },
      );
      const images = await response.json();
      this.setState({ images, index: null });
    }
  }

  search(searchValue) {
    if (!searchValue) {
      this.setState({ isEmptyInput: true });
      return;
    }
    if (this.state.searchValue === searchValue) return;

    this.setState({ loading: true, isEmptyInput: false, searchValue });
    fetch(
      `https://api.cognitive.microsoft.com/bing/v7.0/images/search?q=${searchValue}&count=33`,
      { headers: { 'Ocp-Apim-Subscription-Key': 'b763eddd694345cfaa411d94dc428a4c' } },
    )
      .then(response => response.json())
      .then((images) => {
        this.setState({ images, loading: false });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      loading, images, isEmptyInput,
    } = this.state;
    return (
      <section className="collection">
        <SearchForm search={this.search} />
        {
          isEmptyInput &&
            <p className="error-empty">Задан пустой поисковый запрос</p>
        }
        {
          loading &&
            <div className="loader loader-fullscreen">
              <div className="loader__spin" />
            </div>
        }
        {
          !isEmptyInput && !loading &&
          <Infinite nextImages={this.nextImages}>
            <Images images={images.value} onClick={this.onClickImage} />
            {Object.keys(images).length !== 0 &&
              <SlideShow
                images={this.state.images.value}
                index={this.state.index}
              />
            }
          </Infinite>
        }
      </section>
    );
  }
}


export default App;
