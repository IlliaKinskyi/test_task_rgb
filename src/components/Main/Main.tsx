import styles from './main.module.scss'

export default function Main() {
  return (
    <div className={styles.main}>
<div className={styles.main__header}>
    <img src='/img/planet.svg' alt='planet' className={styles.main__header__planet}/>
    <span className={styles.main__header__text}>Вебинар</span>
</div>

<span className={styles.main__title}>front-end</span>

<div className={styles.main__subtitle}>
  <div className={styles.main__subtitle__left}>
    <span className={styles.main__subtitle__left__bg} />
    <span className={styles.main__subtitle__left__text}>с нуля</span>
  </div>
  <span className={styles.main__subtitle__right}>легкий старт в IT профессии</span>
</div>
<span className={styles.main__text}>Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как начать карьеру в востребованной профессии</span>

<div className={styles.main__caption}>
  <img src="/img/author.svg" alt="author"  className={styles.main__caption__image}/>
  <div className={styles.main__caption__block}>
    <span className={styles.main__caption__block__title}>Кирилл <span className={styles.main__caption__block__title_right}>КАСАТОНОВ</span></span>
    <span className={styles.main__caption__block__text}>6 лет коммерческого опыта с такими  компаниями как Mercedes-Benz и другими крупными корпорациями</span>
  </div>
</div>

<div className={styles.main__subcaption}>
<img src="/img/bonus.svg" alt="author"  className={styles.main__subcaption__image}/>
<div className={styles.main__subcaption__block}>
    <span className={styles.main__subcaption__block__title}>Бонус за регистрацию</span>
    <span className={styles.main__subcaption__block__text}>PDF-файл "5 преимуществ профессии фронтенд разработчика" </span>
  </div>
</div>
    </div>
  )
}
