import React from "react";
import { IonPage, IonContent, IonImg, IonText } from "@ionic/react";

import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
import './UserPerfil.css';
import lucas from '../assets/lucas.jpg'

const UserPerfil: React.FC = () => {


    return (
        <>

                    {/* Imagen */}
                    <div className="perfil">
                        <div className="image-container">
                            <IonImg src={lucas} alt="Logo de la App" className="logo-img" />
                        </div>

                        {/* Texto */}
                        <div className="text-container">
                            <IonText>
                                <p className="sign-in-title text-xl">User</p>
                                <p className="sign-in-description .text-sm">
                                    Sumario
                                </p>
                            </IonText>
                        </div>
                    </div>

        </>


    );

};

export default UserPerfil;
