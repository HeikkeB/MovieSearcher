import styles from './Main.module.scss'
import React from 'react'
import { Movies } from '../../components/Movies/Movies'
import { Preloader } from '../../components/Preloader/Preloader'
import { Search } from '../../components/Search/Search'

const API_KEY = process.env.REACT_APP_API_KEY
export class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  }

  componentDidMount() {
    try {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=`)
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search, loading: true }))
    } catch (err) {
      console.log(err)
    }
  }

  searchMovies = (str, type = 'all') => {
    try {
      this.setState({ loading: true })
      fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
          type !== 'all' ? `&type=${type}` : ''
        }`
      )
        .then((res) => res.json())
        .then((data) => this.setState({ movies: data.Search }))
      this.setState({ loading: false })
    } catch (err) {
      console.log(err)
    }
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
          <div className={styles.loadingContainer}>
            <Preloader />
          </div>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    )
  }
}
