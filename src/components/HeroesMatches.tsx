import React from "react";
import { 
    IonGrid, IonRow, IonCol, IonText, IonImg, IonProgressBar 
} from "@ionic/react";
import './HeroesMatches.css';
import tinker from '../assets/heroes/Inteligencia/tinker.jpg';

const HeroesMatches: React.FC = () => {
    return (
        <IonGrid>
            {/* Barra principal */}
            <IonRow className="header-row">
                <IonCol size="auto">Imagen<IonText></IonText></IonCol>
                <IonCol size="auto"><IonText>Heroes</IonText></IonCol>
                <IonCol size="auto"><IonText>Partidas</IonText></IonCol>
                <IonCol size="auto"><IonText>% Victoria</IonText></IonCol>
                <IonCol size="auto"><IonText>KDA</IonText></IonCol>
                <IonCol size="auto"><IonText>Rol</IonText></IonCol>
                <IonCol size="auto"><IonText>Senda</IonText></IonCol>
                <IonCol size="auto"><IonText>Principal</IonText></IonCol>
            </IonRow>

            {/* Fila de datos */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={tinker} alt="Tinker" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Tinker</IonText>
                    <IonText className="time-text color-gray">Hace 8 días</IonText>
                </IonCol>

                <IonCol size="auto"className="text-align">
                    <IonText className="color text-xs ">557</IonText>
                    <IonProgressBar value={1} className="progress-bars victoria"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">62.12%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.45</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">Core</IonText>
                    <IonProgressBar value={1} className="progress-core rol"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">Medio</IonText>
                    <IonProgressBar value={1} className="progress-linea linea-principal"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">Si</IonText>
                    <IonProgressBar value={1} className="progress-principal linea-principal"></IonProgressBar>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default HeroesMatches;
