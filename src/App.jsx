// Pagina8/src/App.jsx
// import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import SidePanel from './components/SidePanel/SidePanel';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/Home/Home';

const App = () => {
    return (
        <Router basename="/Pagina8">
            <div className="app-container">
                <Sidebar />
                <div className="main-content">
                    <Header />
                    <div className="content-wrapper">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            {/* Agrega más rutas aquí si es necesario */}
                        </Routes>
                        <SidePanel />
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default App;
