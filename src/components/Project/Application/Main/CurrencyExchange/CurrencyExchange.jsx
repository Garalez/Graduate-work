import style from './CurrencyExchange.module.scss';
import { ReactComponent as UpArrow } from './img/upArrow.svg';
import { ReactComponent as DownArrow } from './img/downArrow.svg';

export const CurrencyExchange = () => {
  return (
    <section className={style.exchange}>
      <h2 className={style.exchangeTitle}>Обмен валюты</h2>
      <div className={style.exchangeContentWrapper}>
        <section className={style.rate}>
          <h3 className={style.rateTitle}>
            Изменение курса в режиме реального времени
          </h3>
          <ul className={style.rateList}>
            <li className={style.rateItem}>
              <p className={style.rateName}>AUD/BTC</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>+4,754</p>
                <div className={style.rateRatioImgWrapper}>
                  <UpArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>BTC/BYR</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>+23,2383</p>
                <div className={style.rateRatioImgWrapper}>
                  <UpArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>BYR/AUD</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>-7,34</p>
                <div className={style.rateRatioImgWrapper}>
                  <DownArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>CAD/AUD</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>+84,33333</p>
                <div className={style.rateRatioImgWrapper}>
                  <UpArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>CHF/ETH</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>+9,1</p>
                <div className={style.rateRatioImgWrapper}>
                  <UpArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>JPY/BYR</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>-12,349</p>
                <div className={style.rateRatioImgWrapper}>
                  <DownArrow />
                </div>
              </div>
            </li>
            <li className={style.rateItem}>
              <p className={style.rateName}>ETH/AUD</p>
              <div className={style.rateUnderline} />
              <div className={style.rateRatio}>
                <p className={style.rateRatioNumber}>+40,03</p>
                <div className={style.rateRatioImgWrapper}>
                  <UpArrow />
                </div>
              </div>
            </li>
          </ul>
        </section>
        <div>
          <section>
            <h3>Обмен валюты</h3>
          </section>
          <section>
            <h3>Мои валюты</h3>
          </section>
        </div>
      </div>
    </section>
  );
};
