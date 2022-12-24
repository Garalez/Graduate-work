import style from './Profit.module.scss';
import { ReactComponent as Equalizer } from './img/Equalizer.svg';
import { ReactComponent as Lock } from './img/Lock.svg';
import { ReactComponent as Autorenew } from './img/Autorenew.svg';
import { ReactComponent as CheckCircle } from './img/CheckCircle.svg';

export const Profit = () => {
  return (
    <section className={style.profitSection}>
      <h2 className={style.profitTitle}>Почему с нами выгодно?</h2>
      <ul className={style.profitList}>
        <li className={`${style.profitItem} ${style.profitStatistics}`}>
          <div className={style.subtitleWrapper}>
            <Equalizer />
            <p className={style.subtitle}>Статистика</p>
          </div>
          <p className={`${style.profitText} ${style.profitStatisticsText}`}>
            можно быстро отследить статистику доходов и расходов
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitSafety}`}>
          <div className={style.subtitleWrapper}>
            <Lock />
            <p className={style.subtitle}>Надёжность</p>
          </div>
          <p className={`${style.profitText} ${style.profitSafetyText}`}>
            с нами ваши счета в безопасности
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitExchange}`}>
          <div className={style.subtitleWrapper}>
            <Autorenew />
            <p className={style.subtitle}>Обмен валюты</p>
          </div>
          <p className={`${style.profitText} ${style.profitExchangeText}`}>
            обмен валюты по самому выгодному курсу
          </p>
          <div className={style.profitUnderline}></div>
        </li>
        <li className={`${style.profitItem} ${style.profitComfort}`}>
          <div className={style.subtitleWrapper}>
            <CheckCircle />
            <p className={style.subtitle}>Удобство</p>
          </div>
          <p className={`${style.profitText} ${style.profitComfortText}`}>
            удобная платформа для отслежки счётов
          </p>
          <div className={style.profitUnderline}></div>
        </li>
      </ul>
    </section>
  );
};
