/* eslint-disable max-len */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currencyRequestAsync } from '../../../../../store/currencyRequest/currencyRequestActions';
import { currencyTypeRequestAsync } from '../../../../../store/currencyTypeRequest/currencyTypeRequestActions';
import style from './CurrencyExchange.module.scss';
import CurrencyExchangeForm from './CurrencyExchangeForm';
import CurrencyExchangeInfo from './CurrencyExchangeInfo';
import MyCurrencies from './MyCurrencies';

export const CurrencyExchange = () => {
  const dispatch = useDispatch();
  const currencyTypes = useSelector((state) => state.currencyTypes);
  const userCurrencies = useSelector((state) => state.userCurrencies.data);

  useEffect(() => {
    dispatch(currencyTypeRequestAsync());
    dispatch(currencyRequestAsync());
  }, []);

  return (
    <section className={style.exchange}>
      <h2 className={style.exchangeTitle}>Обмен валюты</h2>
      <div className={style.exchangeContentWrapper}>
        <CurrencyExchangeInfo />
        <div className={style.accountCurrencies}>
          {currencyTypes.data && (
            <CurrencyExchangeForm currencyTypes={currencyTypes.data} />
          )}
          {userCurrencies && <MyCurrencies userCurrencies={userCurrencies} />}
        </div>
      </div>
    </section>
  );
};
