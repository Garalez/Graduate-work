import Auth from './Auth';
import style from './Main.module.scss';
import { ReactComponent as Logo } from '../../Landing/Header/img/logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountInfo from './AccountInfo';
import Transactions from './Transactions';
import CurrencyExchange from './CurrencyExchange';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');
  useEffect(() => {
    !!token && (token !== 'undefined') ?
      navigate('/a/c') :
      navigate('/a/a');
  }, []);

  return (
    <main>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path='/a' element={<Auth />} />
          <Route path='/c' element={<AccountInfo />} />
          <Route path='/t' element={<Transactions />} />
          <Route path='/e' element={<CurrencyExchange />} />
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
