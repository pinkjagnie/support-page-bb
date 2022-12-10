import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SharedLayout from './components/ui/SharedLayout';

import HomePage from "./pages/HomePage";
import AdminLoginPage from './pages/AdminLoginPage';

function App() {

  

  return (
    <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path='admin' element={<AdminLoginPage />} />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
