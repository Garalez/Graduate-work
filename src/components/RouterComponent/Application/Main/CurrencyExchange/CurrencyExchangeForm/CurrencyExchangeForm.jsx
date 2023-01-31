import style from './CurrencyExchangeForm.module.scss';
import { useState } from 'react';

export const CurrencyExchangeForm = () => {
  const [openSelect, setOpenSelect] = useState(false);

  return (
    <section className={style.currencyExchange}>
      <h3 className={style.currencyExchangeTitle}>Обмен валюты</h3>
      <form className={style.currencyExchangeForm} action='#'>
        <ul className={style.currencyExchangeList}>
          <li className={style.currencyExchangeItem}>
            <p className={style.currencyExchangeLabel}>Откуда</p>
            <div className={style.currencyExchangeCustomSelect}>BTC</div>
            <ul
              className={`${style.currencyExchangeSelectList} ${
                openSelect ? style.opened : style.closed
              }`}
            >
              <li className={style.currencyExchangeSelectItem}>BTC</li>
              <li className={style.currencyExchangeSelectItem}>BTC</li>
              <li className={style.currencyExchangeSelectItem}>BTC</li>
              <li className={style.currencyExchangeSelectItem}>BTC</li>
              <li className={style.currencyExchangeSelectItem}>BTC</li>
            </ul>
          </li>
          <li
            className={style.currencyExchangeItem}
            onClick={() => setOpenSelect(!openSelect)}
          >
            <p className={style.currencyExchangeLabel}>Куда</p>
            <div className={style.currencyExchangeCustomSelect}>ETH</div>
            <ul
              className={`${style.currencyExchangeSelect} ${
                openSelect ? style.opened : style.closed
              }`}
            >
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
              <li className={style.currencyExchangeSelectItem}>ETH</li>
            </ul>
          </li>
          <li className={style.currencyExchangeItem}>
            <label className={style.currencyExchangeLabel} htmlFor='sum'>
              Сумма
            </label>
            <input
              className={style.currencyExchangeInput}
              type='number'
              id='sum'
              name='sum'
            />
          </li>
        </ul>
        <div className={style.currencyExchangeSubmitWrapper}>
          <button className={style.currencyExchangeSubmit}>Обменять</button>
        </div>
      </form>
    </section>
  );
};
