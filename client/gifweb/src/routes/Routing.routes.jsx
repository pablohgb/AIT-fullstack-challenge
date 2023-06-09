import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from '../components/protectedRoutes';
import App from '../App';
import { AddGifPage } from '../pages/AddGifPage/AddGifPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { registerPage } from '../pages/registerPage/RegisterPage';

export const Routing = () => {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='addGif' element={<AddGifPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<registerPage />} />
        </Routes>
    </BrowserRouter>
}