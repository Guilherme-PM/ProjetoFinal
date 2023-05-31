import React, { Component } from 'react';

import Header from './js/components/header.js';

import './assets/css/style.css';
import './assets/css/normalize.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import personMenu from './assets/images/person-menu.png';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
  }

  render(){
    return(
      <>
      <Header></Header>
        <section className="home" id="home">
          <div className="bg-image" />
          <div className="content">
            <h3>Os melhores jogos aqui</h3>
            <p>A maior empresa de jogos de todo o Brasil!</p>
            <p>Os melhores preços e promoções</p>
            <a href="#speciality" className="btn">
              Comprar
            </a>
          </div>
          <div className="image">
            <img src={personMenu} alt="" />
          </div>
        </section>
      </>
    );
  }
} 

export default App;
