import styles from './Main.module.scss'
import React from 'react'
import { Movies } from '../../components/Movies/Movies'
import { Preloader } from '../../components/Preloader/Preloader'
import { Search } from '../../components/Search/Search'

export class Main extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=9708daa8&s=Matrix')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?apikey=9708daa8&s=${str}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies } = this.state
    return (
      <main className={styles.container}>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? (
          <Movies movies={this.state.movies} />
        ) : (
          <div className={styles.loadingContainer}>
            <Preloader />
            {/* {<h3 className={styles.loading}>Loading...</h3>} */}
          </div>
        )}
      </main>
    )
  }
}
