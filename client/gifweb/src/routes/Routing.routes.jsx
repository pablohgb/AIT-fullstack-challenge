import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { AddGifPage } from '../pages/AddGifPage/AddGifPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/registerPage/RegisterPage';

export const Routing = () => {
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='/addGif' element={<AddGifPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
}