import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.date}>{new Date().getFullYear()} years</p>
      <a
        className={styles.githubLink}
        href="https://github.com/HeikkeB?tab=repositories"
        target="_blank"
      >
        GitHub
      </a>
    </footer>
  )
}
