// import React from 'react';
import profileIcon from '../../assets/icons/profile.svg'; // Ajusta la ruta según tu estructura de archivos
import './Header.scss';

const Header = () => {
    return (
        <div className="header-container">
            <div className="header-left">
                {/* Puedes dejar este espacio en blanco o poner un logo adicional */}
            </div>
            <div className="header-title">
                <h1>Calculadora múltiples funciones</h1>
            </div>
            <div className="header-right">
                <button className="header-button">Sign Up</button>
                <button className="header-button">Sign In</button>
                <img src={profileIcon} alt="Profile" className="profile-icon" />
            </div>
        </div>
    );
};

export default Header;
