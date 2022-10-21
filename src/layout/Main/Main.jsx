import styles from './Main.module.scss'
import React from 'react'
import { Movies } from '../../components/Movies/Movies'
import { Preloader } from '../../components/Preloader/Preloader'
import { Search } from '../../components/Search/Search'

export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=9708daa8&s=Batman')
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
  }

  searchMovies = (str, type = 'all') => {
    this.setState({ loading: true })
    fetch(
      `http://www.omdbapi.com/?apikey=9708daa8&s=${str}${
        type !== 'all' ? `&type=${type}` : ''
      }`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search }))
  }

  render() {
    const { movies, loading } = this.state
    return (
      <main className={styles.container}>
        <Search
          searchMovies={this.searchMovies}
          searchFilter={this.searchFilter}
        />
        {loading ? (
          <Movies movies={movies} />
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
