import styles from './Preloader.module.scss'

export function Preloader() {
  return (
    <div className={styles.containerPreload}>
      <h2 className={styles.titlePreload}>start searching something</h2>
      <div className={styles.loader}></div>
    </div>
  )
}
