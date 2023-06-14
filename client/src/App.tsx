import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RegisterPage, LoginPage, ResetPage, LandingPage, ErrorPage } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/reset' element={<ResetPage />}></Route>
                <Route path='/landing' element={<LandingPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
