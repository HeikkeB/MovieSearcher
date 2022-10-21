import styles from './Movie.module.scss'

export function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: id,
    Type: type,
    Poster: poster,
  } = props

  return (
    <li id={id} className={styles.movie}>
      {poster === 'N/A' ? (
        <img
          className={styles.poster}
          src="https://via.placeholder.com/275x426.png/1c1c1c/cfd8dc?text=NO IMAGE"
        />
      ) : (
        <img className={styles.poster} src={poster} />
      )}

      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardContent}>
        <p>{year} years</p>
        <p>type: {type}</p>
      </div>
    </li>
  )
}
