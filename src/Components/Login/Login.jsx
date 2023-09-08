import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import '../../App.css';
import { FaUser } from "react-icons/fa"
import { BsShieldLockFill } from "react-icons/bs"
import { AiOutlineSwapRight } from "react-icons/ai"
import logo from "./LoginAssets/5.png"
import cercle from "./LoginAssets/4.png"


function Login() {


  const [text, setText] = useState('');
  const finalText = "Ensemble pour le bon développement durable de la ville de Fianarantsoa";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      setText(finalText.substring(0, index));
      index++;

      if (index > finalText.length) {
        clearInterval(typing);
      }
    }, 100); // Vitesse de frappe en millisecondes
  }, []);

  return (
    <div className="loginPage flex">
      <div className="container flex">
      
      <img src={logo} alt="Logo ZaraIdea" className='logo3' width="100"/> <h1> Plateforme d'echange pour les habitants de la ville de Fiananrantsoa </h1>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo ZaraIdea" className='logo1'/>
            <img src={cercle} alt="cerlce" className='logo2' />
            <h3>Bienvenue sur la Plateforme ZARAIDEA</h3>
            <span> {text} </span>

          </div>
        </div>


        <form action="" className="form grid">
          <h2> SE CONNECTER </h2>
          <div className="inputDiv">
            <label htmlFor="identifiant">Identifiant</label>
            <div className="input flex">
              <FaUser className="icon" />
              <input type="text" id="identifiant" placeholder="Entrez votre identifiant ou votre adresse email" />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="mot_de_passe">Mot de passe</label>
            <div className="input flex">
              <BsShieldLockFill className="icon" />
              <input type="password" id="pwd" placeholder="Entrez votre mot de passe" />
            </div>
          </div>
          <Link to={'/dashboard'}>
            <button type='submit' className='btn flex'>
              <span className='bouton'> Connexion </span>
              <AiOutlineSwapRight className="icon1" />
            </button>
          </Link>

          <div className="footerDiv flex">
            <span className="text">Vous n'avez pas encore de compte?</span>
            <Link to={'/register'}>
              <button className="btni">Insciption</button>
            </Link>
          </div>


        </form>

      </div>
    </div>
  );
}

export default Login;
