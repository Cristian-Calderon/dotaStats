import React from "react";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/react";

import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import './Barra.css';


const Barra: React.FC = () => {
    return (
        <>
            <div className="barra">
                <p className="text-xs color">Perfil</p>
                <p className="text-xs color-important">Dotabuff Pluss</p>
                <p className="text-xs color">Redes Sociales</p>
                <p className="text-xs color">Cambiar perfil</p>
            </div>
        </>
    );

};

export default Barra;
