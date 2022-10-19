import styles from './Movies.module.scss'
import { Movie } from '../Movie/Movie'

export function Movies(props) {
  const { movies } = props

  return (
    <ul className={styles.movies}>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </ul>
  )
}
