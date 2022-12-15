import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/ui/SharedLayout';

import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';

function App() { 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path='login' element={<LoginPage />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
