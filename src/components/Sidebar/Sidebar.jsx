// import React from 'react';
import cambioDeBaseIcon from '../../assets/icons/cambio-de-base.svg';
import derivarIcon from '../../assets/icons/derivar.svg';
import graficarIcon from '../../assets/icons/graficar.svg';
import homeIcon from '../../assets/icons/home.svg';
import integrarIcon from '../../assets/icons/integrar.svg';
import logoIcon from '../../assets/icons/logo.svg';
import logoutIcon from '../../assets/icons/logout.svg';
import menuIcon from '../../assets/icons/menu.svg';
import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="logo-container">
                    <img src={logoIcon} alt="ViBeGhi Logo" className="logo-icon" />
                    <span className="logo-text">ViBeGhi</span>
                    <img src={menuIcon} alt="Menu" className="menu-icon" />
                </div>
                <div className="divider"></div> {/* Divider under the logo */}
                <nav>
                    <ul>
                        <li>
                            <a href="/">
                                <img src={homeIcon} alt="Home" />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/integrar">
                                <img src={integrarIcon} alt="Integrar" />
                                Integrar
                            </a>
                        </li>
                        <li>
                            <a href="/derivar">
                                <img src={derivarIcon} alt="Derivar" />
                                Derivar
                            </a>
                        </li>
                        <li>
                            <a href="/cambio-de-base">
                                <img src={cambioDeBaseIcon} alt="Cambio de Base" />
                                Cambio de Base
                            </a>
                        </li>
                        <li>
                            <a href="/graficar">
                                <img src={graficarIcon} alt="Graficar" />
                                Graficar
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="logout-divider"></div> {/* Divider above the logout */}
                <div className="logout">
                    <a href="/logout">
                        <img src={logoutIcon} alt="Log out" />
                        Log out
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
