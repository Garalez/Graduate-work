import style from './Main.module.scss';
import PlatformInfo from './PlatformInfo';
import Profit from './Profit';
import Registration from './Registration';
import Reviews from './Reviews';

export const Main = () => {
  return (
    <div className={style.wrapper}>
      <PlatformInfo />
      <Profit />
      <Registration />
      <Reviews />
    </div>
  );
};
