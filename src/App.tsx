import { Route, Routes } from 'react-router-dom';
import Project from './components/Project';


function App() {
  return (
    <Routes>
      <Route
        path='*'
        element={
          <Project />
        }
      />
    </Routes>
  );
}

export default App;
