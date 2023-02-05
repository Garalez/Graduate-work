/* eslint-disable max-len */
import style from './CurrencyExchangeInfo.module.scss';
import { ReactComponent as UpArrow } from '../img/upArrow.svg';
import { ReactComponent as DownArrow } from '../img/downArrow.svg';
import { useEffect, useState } from 'react';

export const CurrencyExchangeInfo = () => {
  const webSocket = new WebSocket('ws://localhost:4000/currency-feed');
  const [currencyFeed, setCurrencyFeed] = useState([]);

  const webSocketChannel = (e) => {
    setCurrencyFeed((state) => {
      const newCurrencyFeedArr = [...state, JSON.parse(e.data)];
      if (newCurrencyFeedArr.length > 7) {
        newCurrencyFeedArr.splice(0, 1);
      }
      return newCurrencyFeedArr;
    });
  };

  useEffect(() => {
    webSocket.addEventListener('message', webSocketChannel);
    return () => webSocket.removeEventListener('message', webSocketChannel);
  }, []);

  return (
    <section className={style.rate}>
      <h3 className={style.rateTitle}>
        Изменение курса в режиме реального времени
      </h3>
      <ul className={style.rateList}>
        {currencyFeed.map((item, index) => (
          <li key={index} className={style.rateItem}>
            <p className={style.rateName}>{`${item.from}/${item.to}`}</p>
            <div className={style.rateUnderlineWrapper}>
              <div className={style.rateUnderline} />
            </div>
            <div className={style.rateRatio}>
              <p className={style.rateRatioNumber}>
                {`${item.change === 1 ? '+' : '-'}${item.rate}`}
              </p>
              <div className={style.rateRatioImgWrapper}>
                {item.change === 1 ? <UpArrow /> : <DownArrow />}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
