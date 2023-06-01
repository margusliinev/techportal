import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage, RegisterPage, LoginPage, ResetPage, ErrorPage, ProtectedRoute } from './pages';
import { SharedLayout, Jobs, Profile, Stats } from './pages/dashboard';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SharedLayout />}>
                    <Route index path='stats' element={<Stats />}></Route>
                    <Route path='jobs' element={<Jobs />}></Route>
                    <Route path='' element={<ProtectedRoute />}>
                        <Route path='profile' element={<Profile />}></Route>
                    </Route>
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
