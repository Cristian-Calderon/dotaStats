import React from "react";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/react";

import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import './UserPerfil.css';


const Barra: React.FC = () => {
    return (
        <>
        <div>
            <p>Perfil</p>
            <p>Dotabuff Pluss</p>
            <p>Redes Sociales</p>
            <p>Cambiar perfil</p>
        </div>
        </>
    );

};

export default Barra;
