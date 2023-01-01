import { Route, Routes } from 'react-router-dom';
import Application from './Application';
import Landing from './Landing';

export const Project = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/a/*' element={<Application />} />
    </Routes>
  );
};