import styles from './Header.module.scss'

export function Header() {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <h1 className={styles.brand}>Movie Searcher</h1>
        <a className={styles.repo} href="!#">
          Repo
        </a>
      </div>
    </nav>
  )
}
