import styles from './Header.module.scss'

export function Header() {
  return (
    <nav>
      <div className={styles.wrapper}>
        <h1 className={styles.logoBrand}>Movie Searcher</h1>
        <a className={styles.repo} href="!#">
          Repo
        </a>
      </div>
    </nav>
  )
}
