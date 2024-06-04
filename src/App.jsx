// import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <Router basename="/Pagina8">
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* Agrega más rutas aquí si es necesario */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
