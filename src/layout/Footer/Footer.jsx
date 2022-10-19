import styles from './Footer.module.scss'

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.date}>{new Date().getFullYear()} years</p>
      <a className={styles.githubLink} href="!#">
        GitHub
      </a>
    </div>
  )
}
