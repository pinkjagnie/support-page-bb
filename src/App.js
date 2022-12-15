import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/ui/SharedLayout';

import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import PanelLoggedPage from './pages/PanelLoggedPage';

function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='login/panel' element={<PanelLoggedPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
