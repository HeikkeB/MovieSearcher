import styles from './Movies.module.scss'
import { Movie } from '../Movie/Movie'

export function Movies(props) {
  const { movies = [] } = props

  return (
    <ul className={styles.movies}>
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <div className={styles.containerNF}>
          <h2 className={styles.nothingFound}>Nothing found</h2>
        </div>
      )}
    </ul>
  )
}
