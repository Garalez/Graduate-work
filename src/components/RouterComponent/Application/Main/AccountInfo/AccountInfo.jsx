import style from './AccountInfo.module.scss';
import {ReactComponent as Arrow} from './img/arrow.svg'

export const AccountInfo = () => {
  console.log(style);
  return (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>Здравствуйте, Александр!</h1>
          <button className={style.accountBtn}>Открыть новый счет</button>
        </div>
        <div className={style.accountInfoWrapper}>
          <p className={style.accountSubtitle}>Мои счета</p>
          <div className={style.accountSortWrapper}>
            <p className={style.accountSortText}>Сортировка:</p>
            <button className={style.accountSort}>По дате <Arrow /></button>
          </div>
        </div>
        <ul className={style.accountList}>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>449488503980</p>
            <p className={style.accountAmount}>530 080 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>10.03.2016</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>23.04.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>16XxPdD3h9g5txJ7ZPeEabNRwswzWpKvWC</p>
            <p className={style.accountAmount}>3 620 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>30.11.2020</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>11.10.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>38TtUMD9tqV8SFiFgqeb9zTwP99Bp2QZvY</p>
            <p className={style.accountAmount}>2 405 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>01.08.2018</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>19.03.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>449488503980</p>
            <p className={style.accountAmount}>530 080 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>10.03.2016</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>23.04.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>16XxPdD3h9g5txJ7ZPeEabNRwswzWpKvWC </p>
            <p className={style.accountAmount}>3 620 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>30.11.2020</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>11.10.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>38TtUMD9tqV8SFiFgqeb9zTwP99Bp2QZvY</p>
            <p className={style.accountAmount}>2 405 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>01.08.2018</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>19.03.2022 </p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>449488503980</p>
            <p className={style.accountAmount}>530 080 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>10.03.2016</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>23.04.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>16XxPdD3h9g5txJ7ZPeEabNRwswzWpKvWC</p>
            <p className={style.accountAmount}>3 620 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>30.11.2020</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>11.10.2022</p>
              </div>
            </div>
          </li>
          <li className={style.accountItem}>
            <p className={style.accountNumber}>38TtUMD9tqV8SFiFgqeb9zTwP99Bp2QZvY</p>
            <p className={style.accountAmount}>2 405 ₽</p>
            <div className={style.accountInfo}>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>открыт</p>
                <p className={style.accountInfoText}>01.08.2018</p>
              </div>
              <div className={style.accountInfoTextWrapper}>
                <p className={style.accountInfoText}>последняя операция</p>
                <p className={style.accountInfoText}>19.03.2022</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
