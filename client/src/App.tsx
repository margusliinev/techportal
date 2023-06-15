import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { RegisterPage, LoginPage, ResetPage, LandingPage, ErrorPage } from './pages';
import { SharedLayout, Stats, Jobs, Profile } from './pages/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/dashboard/stats' />}></Route>
                <Route path='/dashboard' element={<SharedLayout />}>
                    <Route path='' element={<Navigate to='stats' />}></Route>
                    <Route path='stats' element={<Stats />}></Route>
                    <Route path='jobs' element={<Jobs />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
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
