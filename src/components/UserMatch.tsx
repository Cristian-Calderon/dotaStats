import React from "react";
import { IonGrid, IonRow, IonCol, IonText, IonImg, IonButton } from "@ionic/react";
import './UserMatch.css';
import '../theme/variables.css';
import Medalla from '../assets/medalla.png';

const UserMatch: React.FC = () => {
    return (
        <div>

        <IonGrid>
            <IonRow>
                <IonCol size="6" size-md="3">
                    <IonText><h4 className="text-sm color margin-cero">Hace 15 días</h4></IonText>
                    <IonText><h3 className="text-sm color-gray margin-cero">ÚLTIMA PARTIDA</h3></IonText>
                </IonCol>

                <IonCol size="6" size-md="3">
                    <IonText ><h4 className="text-sm color margin-cero margin-cero"><span className="color-important">1,340</span> - <span className="color-logo">1,207</span> - <span className="color-gray">24</span></h4></IonText>
                    <IonText><h3 className="margin-cero color-gray">RÉCORD</h3></IonText>
                </IonCol>

                <IonCol size="9" size-md="3">
                    <IonText ><h4 className="text-sm margin-cero color">52.12%</h4></IonText>
                    <IonText><h3 className="text-sm margin-cero color-gray">PORCENTAJE DE VICTORIA</h3></IonText>
                </IonCol>

                <IonCol size="3" size-md="3">
                    <IonImg className="medalla" src={Medalla} alt="Imagen de usuario" />
                </IonCol>
            </IonRow>
        </IonGrid>
        <IonButton className="button-style text-xs">PERFIL DE ESPORT</IonButton>
        </div>
    );
};

export default UserMatch;
