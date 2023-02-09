import Auth from './Auth';
import style from './Main.module.scss';
import { ReactComponent as Logo } from '../Header/img/logo.svg';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AccountInfo from './AccountInfo';
import Transactions from './Transactions';
import CurrencyExchange from './CurrencyExchange';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');

  useEffect(() => {
    !!token && token !== 'undefined' ?
      navigate('/application/accounts') :
      navigate('/application/auth');
  }, []);

  return (
    <main>
      <div className={style.mainWrapper}>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route path='/accounts' element={<AccountInfo />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/exchange' element={<CurrencyExchange />} />
        </Routes>
        <div className={style.footer}>
          <div className={style.copyrightsWrapper}>
            <a href='/'>
              <Logo className={style.logo} />
            </a>
            <p className={style.copyrightsMark}>© C-Money, 2022</p>
          </div>
        </div>
      </div>
    </main>
  );
};
