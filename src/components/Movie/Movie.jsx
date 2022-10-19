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
      <div className="card-image">
        <img className="poster" src={poster} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </li>
  )
}
