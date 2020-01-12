import React, { Component, Fragment } from 'react';
import GalleryItem from './GalleryItem/GalleryItem';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

import './Gallery.css';
class Gallery extends Component {
  state = {
    movies: [],
    sortAscending: true
  };

  componentDidMount() {
    fetch('https://api.myjson.com/bins/i2w52')
      .then(response => response.json()) // Getting the actual response data
      .then(response => {
        console.log(response);
        let movies = response;
        this.setState({ movies });
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleSortMovies() {
    let movies;
    let sortAscending = this.state.sortAscending;
    if (this.state.sortAscending) {
      movies = this.state.movies.sort((a, b) =>
        a.title > b.title ? 1 : b.title > a.title ? -1 : 0
      );
    } else {
      movies = this.state.movies.sort((a, b) =>
        a.title < b.title ? 1 : b.title < a.title ? -1 : 0
      );
    }
    this.setState({ movies, sortAscending: !sortAscending });
  }
  render() {
    const movies = this.state.movies.map(movie => {
      return <GalleryItem image={movie.image} title={movie.title} />;
    });

    return (
      <Fragment>
        <Button variant='secondary' onClick={() => this.handleSortMovies()}>
          {this.state.sortAscending ? 'A - Z' : 'Z - A'}
        </Button>
        <div className='Gallery'>
          {movies.length !== 0 ? (
            movies
          ) : (
            <Spinner className='GallerySpinner' animation='border' size='lg' />
          )}
        </div>
      </Fragment>
    );
  }
}

export default Gallery;
