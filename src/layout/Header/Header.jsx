import styles from './Header.module.scss'

export function Header() {
  return (
    <nav>
      <div className={styles.navWrapper}>
        <a href="!#" className={styles.brand}>
          Movie Searcher
        </a>
        <a className={styles.repo} href="!#">
          Repo
        </a>
      </div>
    </nav>
  )
}
