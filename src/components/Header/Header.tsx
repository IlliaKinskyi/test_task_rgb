import styles from './header.module.scss'

export default function Header() {
  return (
    <div className={styles.header}>
        <img src='/img/logo.svg' alt='logo' className={styles.header__logo} />
        <div className={styles.header__right}>
        <div className={styles.header__right__item}>
        <img src='/img/calendar.svg' alt='calendar' className={styles.header__right__item__calendar}/>
            <span className={styles.header__right__item__text}>28 декабря</span>
        </div>
        <div className={styles.header__right__item}>
        <img src='/img/clock.svg' alt='clock' className={styles.header__right__item__clock}/>
        <span className={styles.header__right__item__text}>3,5 часа</span>
        </div>
        </div>
    </div>
  )
}
