import Auth from './Auth';
import style from './Main.module.scss';

export const Main = () => {
  return (
    <main>
      <div className={style.mainWrapper}>
        <Auth />
      </div>
    </main>
  );
};
