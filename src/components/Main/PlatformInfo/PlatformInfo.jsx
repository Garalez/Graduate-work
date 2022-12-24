import style from './PlatformInfo.module.scss';
import TransferImg from './img/transferLogo.png';

export const PlatformInfo = () => {
  return (
    <section className={style.infoSection}>
      <div className={style.textWrapper}>
        <h1 className={style.title}>Платформа C-Money</h1>
        <p className={style.subtitle}>
          Удобная платформа для хранения счётов, перевода валюты и покупки
          криптовалюты
        </p>
        <button className={style.registrationBtn}>Зарегистрироваться</button>
      </div>
      <img className={style.img} src={TransferImg} alt='Transfer logo' />
      <div className={style.rectangle}></div>
    </section>
  );
};
