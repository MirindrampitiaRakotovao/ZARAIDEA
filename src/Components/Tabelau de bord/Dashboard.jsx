import React, { useState } from "react";
import './Dashboard.css';
import logoHM from './DashboardAssets/7-1.png';
import { PiBellBold, PiBrainBold, PiCaretCircleLeftBold, PiHandCoinsBold, PiLightbulbBold, PiListBold, PiListBulletsBold, PiMagnifyingGlassBold, PiSquaresFourBold, PiUserBold } from "react-icons/pi";

function App() {
    const [activeLink, setActiveLink] = useState(null);

    const handleMouseOver = (index) => {
        setActiveLink(index);
    };

    const navigationItems = [
        {
            text: "ZARAIDEA",
            icon: <PiLightbulbBold className="icone" />,
        },

        {
            text: "Tableau de bord",
            icon: <PiSquaresFourBold className="icone" />,
        },
        {
            text: "Categories",
            icon: <PiListBulletsBold className="icone" />,
        },
        {
            text: "Mes idées",
            icon: <PiBrainBold className="icone" />,
        },
        {
            text: "Nombre de votes",
            icon: <PiHandCoinsBold className="icone" />,
        },
        {
            text: "Notifications",
            icon: <PiBellBold className="icone" />,
        },
        {
            text: "Se déconnecter",
            icon: <PiCaretCircleLeftBold className="icone" />,
        },
    ];

    return (
        <div className="dashboardPage">
            <div className="navigation">
                <div className="contenus">
                    <ul>
                        {navigationItems.map((item, index) => (
                            <li
                                key={index}
                                className={activeLink === index ? "hovered" : ""}
                                onMouseOver={() => handleMouseOver(index)}
                            >
                                <a href="#" className="link">
                                    {item.icon}
                                    <h4 className="title">{item.text}</h4>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* <div className="Haute_Matsiatra">
                <img src={logoHM} alt="logoHM" className="logoHM" width="50"/>
                <h6 className="HM"> Region Haute Matsiatra </h6>
            </div> */}

            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <PiListBold className="icones" />
                    </div>
                    <div className="search">
                        <label htmlFor="recherche">
                            <input type="text" placeholder="Recherchez ici" className="recherche" />
                            <PiMagnifyingGlassBold className="icones" />
                        </label>
                    </div>
                    <div className="user">
                        <PiUserBold className="icones" />
                    </div>
                </div>

                {/* <!-- ====================================================== CARDS ===================================================================== --> */}
                
                <div className="cardBox">
                    <div className="card">
                        <div>
                            <div className="numbers">5</div>
                            <div className="cardName">Categories</div>
                        </div>

                        <div className="iconBox">
                            <PiListBulletsBold className="icones" />
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <div className="numbers">80</div>
                            <div className="cardName">Mes idees</div>
                        </div>

                        <div className="iconBox">
                            <PiBrainBold className="icones" />
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <div className="numbers">284</div>
                            <div className="cardName">Nombres de votes</div>
                        </div>

                        <div className="iconBox">
                            <PiHandCoinsBold className="icones" />
                        </div>
                    </div>

                    <div className="card">
                        <div>
                            <div className="numbers">150</div>
                            <div className="cardName">Notifications</div>
                        </div>

                        <div className="iconBox">
                            <PiBellBold className="icones" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;


