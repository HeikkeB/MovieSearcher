import styles from './Main.module.scss'
import React from 'react'
import { Movies } from '../../components/Movies/Movies'

export class Main extends React.Component {
  state = {
    movies: []
  }

 componentDidMount() {
  fetch('http://www.omdbapi.com/?apikey=9708daa8&s=Matrix')
   .then(res => res.json())
   .then(data => this.setState({movies: data.Search}))
 }

  render() {
    const {movies} = this.state
    return (
      <div className={styles.container}>
        {movies.length ? (<Movies movies={this.state.movies} />) : <h3>Loading...</h3>}
      </div>
    )

  }
  
}
