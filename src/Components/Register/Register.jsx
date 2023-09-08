import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import './Register.css';
import { FaUser } from "react-icons/fa"
import { BsShieldLockFill } from "react-icons/bs"
import { AiOutlineSwapRight } from "react-icons/ai"


function Register() {
  return (
    <div className="registerPage flex">
      <div className="containers flex">

        <form action="" className="form grid">
          <h2 className='inscription'> S'INSCRIRE </h2>

          <div className="inputDiv">
            <label htmlFor="identifiant" className='labels'>Nom</label>
            <div className="inputs flex">
              <FaUser className="icon" />
              <input type="text" id="identifiant" placeholder="Entrez votre nom" />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="identifiant" className='labels'>Prénom</label>
            <div className="inputs flex">
              <FaUser className="icon" />
              <input type="text" id="identifiant" placeholder="Entrez votre prénom" />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="identifiant" className='labels'>Identifiant</label>
            <div className="inputs flex">
              <FaUser className="icon" />
              <input type="text" id="identifiant" placeholder="Entrez votre identifiant ou votre adresse email" />
            </div>
          </div>

          <div className="inputDiv">
            <label htmlFor="mot_de_passe" className='labels'>Mot de passe</label>
            <div className="inputs flex">
              <BsShieldLockFill className="icon" />
              <input type="password" id="pwd" placeholder="Entrez votre mot de passe" />
            </div>
          </div>

          <button type='submit' className='btns flex'>
            <span className='bouton_c'> Inscription </span>
            <AiOutlineSwapRight className="icon1" />
          </button>

          <div className="footerDivs flex">
            <span className="text">Vous avez dejà un compte?</span>
            <Link to={'/login'}>
              <button className="btni">Retour</button>
            </Link>
          </div>


        </form>

      </div>
    </div>
  );
}

export default Register;
