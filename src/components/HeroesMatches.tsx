import React from "react";
import { 
    IonGrid, IonRow, IonCol, IonText, IonImg, IonProgressBar 
} from "@ionic/react";
import './HeroesMatches.css';
import tinker from '../assets/heroes/Inteligencia/tinker.jpg';
import Zeus from '../assets/heroes/Inteligencia/zeus.jpg';
import Kunka from '../assets/heroes/Fuerza/kunkka.jpg';
import StormSpirit from '../assets/heroes/Inteligencia/storm-spirit.jpg';
import Snipper from '../assets/heroes/Agilidad/sniper.jpg';
import Viper from '../assets/heroes/Agilidad/viper.jpg';
import Pudge from '../assets/heroes/Fuerza/pudge.jpg';
import DeathProphet from '../assets/heroes/Universal/death-prophet.jpg';
import Lina from '../assets/heroes/Inteligencia/lina.jpg';

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
            {/* Zeus */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Zeus} alt="Zeus" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Zeus</IonText>
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
            {/* Kunka */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Kunka} alt="kunka" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Kunkka</IonText>
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
            {/* Storm Spirit */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={StormSpirit} alt="Storm Spirit" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Storm Spirit</IonText>
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
            {/* Sniper */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Snipper} alt="Snipper" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Snipper</IonText>
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
            {/* Viper */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Viper} alt="Viper" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Viper</IonText>
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
            {/* Pudge */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Pudge} alt="Pudge" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Pudge</IonText>
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
            {/* Storm Spirit */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={StormSpirit} alt="Storm Spirit" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Storm Spirit</IonText>
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
            {/* Death Prophet */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={DeathProphet} alt="Death Prophet" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Death Prophet</IonText>
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
            {/* Necrophos */}
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
            {/* Lina */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={Lina} alt="Lina" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Lina</IonText>
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
