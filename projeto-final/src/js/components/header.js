import React, { Component } from 'react';

import logo from '../../assets/images/logo.png';

import '../../assets/css/style.css';

class Header extends Component{
    render(){
        return(
            <header>
                <a href="#" className="logo"><img src={logo} width="42px" height="42px"/>Nando Gaming</a>
                <div id="menu-bar" className="fas fa-bars" />
                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#speciality">Populares</a>
                    <a href="#popular">Ofertas</a>
                    <a href="#gallery">Mais vendidos</a>
                    <a href="#review">Clientes</a>
                    <a href="#order">Ajuda</a>
                </nav>
            </header>
        );
    }
}

export default Header;