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
                <IonCol><IonText></IonText></IonCol>
                <IonCol><IonText>Heroes</IonText></IonCol>
                <IonCol><IonText>Partidas</IonText></IonCol>
                <IonCol><IonText>% Victoria</IonText></IonCol>
                <IonCol><IonText>KDA</IonText></IonCol>
                <IonCol><IonText>Rol</IonText></IonCol>
                <IonCol><IonText>Senda</IonText></IonCol>
                <IonCol><IonText>Principal</IonText></IonCol>
            </IonRow>

            {/* Fila de datos */}
            <IonRow className="data-row">
                {/* Héroe */}
                <IonCol>
                    <IonImg src={tinker} alt="Tinker" className="hero-img" />
                </IonCol>
                <IonCol className="hero-name text-xs">
                    <IonText className="color-important ">Tinker</IonText>
                    <IonText className="time-text color-gray ">Hace 8 días</IonText>
                </IonCol>

                {/* Partidas */}
                <IonCol>
                    <IonText className="color text-xs">557</IonText>
                    <IonProgressBar value={0.75} className="progress-bars"></IonProgressBar>
                </IonCol>

                {/* % Victoria */}
                <IonCol>
                    <IonText className="color text-xs">62.12%</IonText>
                    <IonProgressBar value={0.62} className="progress-victory"></IonProgressBar>
                </IonCol>

                {/* KDA */}
                <IonCol>
                    <IonText className="color text-xs">3.45</IonText>
                    <IonProgressBar value={0.7} className="progress-kda"></IonProgressBar>
                </IonCol>

                {/* Rol */}
                <IonCol>
                    <IonText className="color text-xs">Core</IonText>
                    <IonProgressBar value={1} className="progress-core"></IonProgressBar>
                </IonCol>

                {/* Senda */}
                <IonCol>
                    <IonText className="color text-xs">Medio</IonText>
                    <IonProgressBar value={0.5} className="progress-linea"></IonProgressBar>
                </IonCol>

                {/* Principal */}
                <IonCol>
                    <IonText className="color text-xs">Si</IonText>
                    <IonProgressBar value={.68} className="progress-principal"></IonProgressBar>
                </IonCol>

                
            </IonRow>
        </IonGrid>
    );
};

export default HeroesMatches;
