import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage, RegisterPage, LoginPage, ResetPage, ErrorPage } from './pages';
import { DashboardLayout, Jobs, Profile, Stats } from './pages/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/dashboard/stats' />}></Route>
                <Route path='/dashboard' element={<DashboardLayout />}>
                    <Route path='' element={<Navigate to='stats' />}></Route>
                    <Route path='stats' element={<Stats />}></Route>
                    <Route path='jobs' element={<Jobs />}></Route>
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
                <Route path='/landing' element={<LandingPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/reset' element={<ResetPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
