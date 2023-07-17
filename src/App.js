import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBarComponent from './component/NavBarComponent';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './component/pages/Store';
import Success from './component/pages/Success';
import Cancel from './component/pages/Cancel';
import CartProvider from './component/other/CardContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Container>
          <NavBarComponent>
          </NavBarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path='success' element={<Success />} />
              <Route path='cancel' element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
      </CartProvider>
    </div>
  );
}

export default App;
