import styles from './Footer.module.scss'

export function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.date}>{new Date().getFullYear()}</p>
      <a href="!#">GitHub</a>
    </div>
  )
}
