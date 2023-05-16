import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardPage, LandingPage, RegisterPage, ErrorPage } from './pages';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardPage />}></Route>
                <Route path='/landing' element={<LandingPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
