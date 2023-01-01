import Auth from './Auth';
import style from './Main.module.scss';
import { ReactComponent as Logo } from '../../Landing/Header/img/logo.svg';
import { Route, Routes } from 'react-router-dom';
import AccountInfo from './AccountInfo';
import Transactions from './Transactions';

export const Main = () => {
  return (
    <main>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path='/a' element={<Auth />} />
          <Route path='/c' element={<AccountInfo />} />
          <Route path='/t' element={<Transactions />} />
        </Routes>
        <div className={style.copyrightsWrapper}>
          <div className={style.logoWrapper}>
            <Logo className={style.logo} />
            <p className={style.logoName}>C-Money</p>
          </div>
          <p className={style.copyrightsMark}>© C-Money, 2022</p>
        </div>
      </div>
    </main>
  );
};
