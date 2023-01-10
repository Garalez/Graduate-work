
import style from './CurrencyExchange.module.scss';
import CurrencyExchangeForm from './CurrencyExchangeForm';
import CurrencyExchangeInfo from './CurrencyExchangeInfo';
import MyCurrencies from './MyCurrencies';

export const CurrencyExchange = () => {

  return (
    <section className={style.exchange}>
      <h2 className={style.exchangeTitle}>Обмен валюты</h2>
      <div className={style.exchangeContentWrapper}>
        <CurrencyExchangeInfo />
        <div className={style.accountCurrencies}>
          <CurrencyExchangeForm />
          <MyCurrencies />
        </div>
      </div>
    </section>
  );
};
