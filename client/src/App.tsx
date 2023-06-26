import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import { useAppSelector } from './hooks';
import { ErrorPage, LandingPage, LoginPage, RegisterPage } from './pages';
import { Job, Jobs, Profile, SharedLayout, Stats } from './pages/dashboard';

function App() {
    const { theme } = useAppSelector((store) => store.navigation);
    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route path='' element={<Navigate to='stats' />}></Route>
                    <Route path='stats' element={<Stats />}></Route>
                    <Route path='jobs' element={<Jobs />}></Route>
                    <Route path='jobs/:company/:id' element={<Job />} />
                    <Route path='profile' element={<Profile />}></Route>
                </Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/landing' element={<LandingPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
