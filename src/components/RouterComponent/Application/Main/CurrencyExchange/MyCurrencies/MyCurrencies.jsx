import style from './MyCurrencies.module.scss';

export const MyCurrencies = () => (
  <section className={style.myCurrencies}>
    <h3 className={style.myCurrenciesTitle}>Мои валюты</h3>
    <ul className={style.myCurrenciesList}>
      <li className={style.myCurrenciesItem}>
        <p className={style.myCurrenciesName}>BTC</p>
        <p className={style.myCurrenciesName}>ETH</p>
        <p className={style.myCurrenciesName}>₽</p>
      </li>
      <li className={style.myCurrenciesItem}>
        <p className={style.myCurrenciesQuantity}>2405</p>
        <p className={style.myCurrenciesQuantity}>3620</p>
        <p className={style.myCurrenciesQuantity}>530 080 ₽</p>
      </li>
    </ul>
  </section>
);
