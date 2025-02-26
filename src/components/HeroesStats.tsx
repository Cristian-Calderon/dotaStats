import React from "react";
import {
    IonGrid, IonRow, IonCol, IonText, IonImg, IonProgressBar
} from "@ionic/react";
import './HeroesMatches.css';
import lich from '../assets/heroes/Inteligencia/lich.jpg';
import s from '../assets/letra-s.png';

// Importar imagenes de roles
import juggernautImg from '../assets/heroes/Agilidad/juggernaut.jpg';
import roleCarryImg from '../assets/destruction.png'; // Adjust the path as necessary
import pudgeImg from '../assets/heroes/Fuerza/pudge.jpg'; // Adjust the path as necessary
import sniperImg from '../assets/heroes/Agilidad/sniper.jpg'; // Adjust the path as necessary
import linaImg from '../assets/heroes/Inteligencia/lina.jpg'; // Adjust the path as necessary
import roleSupportImg from '../assets/outpatient_med.png'; // Adjust the path as necessary
import cmImg from '../assets/heroes/Inteligencia/crystal-maiden.jpg'; // Adjust the path as necessary
import roleMidImg from '../assets/automation.png'; // Adjust the path as necessary
import axeImg from '../assets/heroes/Fuerza/axe.jpg'; // Adjust the path as necessary
import paImg from '../assets/heroes/Agilidad/phantom-assassin.jpg'; // Adjust the path as necessary
import stormSpiritImg from '../assets/heroes/Inteligencia/storm-spirit.jpg'; // Adjust the path as necessary
import sfImg from '../assets/heroes/Agilidad/shadow-fiend.jpg'; // Adjust the path as necessary
import earthshakerImg from '../assets/heroes/Fuerza/earthshaker.jpg'; // Adjust the path as necessary
import drowImg from '../assets/heroes/Agilidad/drow-ranger.jpg'; // Adjust the path as necessary
import invokerImg from '../assets/heroes/Inteligencia/invoker.jpg'; // Adjust the path as necessary
import tideImg from '../assets/heroes/Fuerza/tidehunter.jpg'; // Adjust the path as necessary

import './HeroesStats.css';

const HeroesStats: React.FC = () => {
    return (
        <IonGrid>
            {/* Barra principal */}
            <IonRow className="header-row">
                <IonCol size="auto"><IonText className="color-important">Meta</IonText></IonCol>
                <IonCol size="auto"><IonText>Populares</IonText></IonCol>
                <IonCol size="auto"><IonText>Ganando</IonText></IonCol>
                <IonCol size="auto"><IonText>Combate</IonText></IonCol>
                <IonCol size="auto"><IonText>Economia</IonText></IonCol>
                <IonCol size="auto"><IonText>Vision</IonText></IonCol>
            </IonRow>


            {/* Fila de datos */}
            <IonRow className="data-row" >
                <IonCol size="auto">
                    <IonImg src={lich} alt="Lich" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Lich</IonText>
                    <IonText className="time-text color-gray">Frostbound</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonImg src={s} alt="Lich" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">62.12%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.45</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>


            {/* Juggernaut */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'juggernautImg' con tu import o ruta de imagen */}
                    <IonImg src={juggernautImg} alt="Juggernaut" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Juggernaut</IonText>
                    <IonText className="time-text color-gray">Blade Master</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. carry) en tamaño pequeño */}
                    <IonImg src={s} alt="Carry" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">64.45%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.12</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Pudge */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'pudgeImg' con tu import o ruta de imagen */}
                    <IonImg src={pudgeImg} alt="Pudge" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Pudge</IonText>
                    <IonText className="time-text color-gray">Butcher</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. roamer/support) */}
                    <IonImg src={s} alt="Support" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">58.90%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.89</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Lina */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'linaImg' con tu import o ruta de imagen */}
                    <IonImg src={linaImg} alt="Lina" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Lina</IonText>
                    <IonText className="time-text color-gray">The Slayer</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. mid-laner) */}
                    <IonImg src={s} alt="Mid" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">61.25%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.55</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Sniper */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'sniperImg' con tu import o ruta de imagen */}
                    <IonImg src={sniperImg} alt="Sniper" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Sniper</IonText>
                    <IonText className="time-text color-gray">Kardel Sharpeye</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. carry) */}
                    <IonImg src={s} alt="Carry" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">59.87%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.74</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'cmImg' con tu import o ruta de imagen */}
                    <IonImg src={cmImg} alt="Crystal Maiden" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Crystal Maiden</IonText>
                    <IonText className="time-text color-gray">Rylai</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. support) */}
                    <IonImg src={s} alt="Support" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">56.02%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.15</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Axe */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'axeImg' con tu import o ruta de imagen */}
                    <IonImg src={axeImg} alt="Axe" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Axe</IonText>
                    <IonText className="time-text color-gray">Mogul Khan</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. offlane) */}
                    <IonImg src={s} alt="Offlane" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">53.90%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.45</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Phantom Assassin */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'paImg' con tu import o ruta de imagen */}
                    <IonImg src={paImg} alt="Phantom Assassin" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Phantom Assassin</IonText>
                    <IonText className="time-text color-gray">Mortred</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. carry) */}
                    <IonImg src={s} alt="Carry" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">60.12%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.42</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* nuevos */}

            {/* Storm Spirit */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'stormSpiritImg' con tu import o ruta de imagen */}
                    <IonImg src={stormSpiritImg} alt="Storm Spirit" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Storm Spirit</IonText>
                    <IonText className="time-text color-gray">Raijin Thunderkeg</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Mid) */}
                    <IonImg src={s} alt="Mid" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">58.05%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.55</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Shadow Fiend */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'sfImg' con tu import o ruta de imagen */}
                    <IonImg src={sfImg} alt="Shadow Fiend" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Shadow Fiend</IonText>
                    <IonText className="time-text color-gray">Nevermore</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Mid) */}
                    <IonImg src={s} alt="Mid" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">55.40%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.25</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Drow Ranger */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'drowImg' con tu import o ruta de imagen */}
                    <IonImg src={drowImg} alt="Drow Ranger" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Drow Ranger</IonText>
                    <IonText className="time-text color-gray">Traxex</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Carry) */}
                    <IonImg src={s} alt="Carry" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">60.10%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.90</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Invoker */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'invokerImg' con tu import o ruta de imagen */}
                    <IonImg src={invokerImg} alt="Invoker" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Invoker</IonText>
                    <IonText className="time-text color-gray">Carl</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Mid) */}
                    <IonImg src={s} alt="Mid" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">57.32%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">3.45</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Tidehunter */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'tideImg' con tu import o ruta de imagen */}
                    <IonImg src={tideImg} alt="Tidehunter" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Tidehunter</IonText>
                    <IonText className="time-text color-gray">Leviathan</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Offlane) */}
                    <IonImg src={s} alt="Offlane" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">54.78%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.60</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>

            {/* Earthshaker */}
            <IonRow className="data-row">
                <IonCol size="auto">
                    {/* Reemplaza 'earthshakerImg' con tu import o ruta de imagen */}
                    <IonImg src={earthshakerImg} alt="Earthshaker" className="hero-img" />
                </IonCol>
                <IonCol size="auto" className="hero-name text-xs">
                    <IonText className="color-important">Earthshaker</IonText>
                    <IonText className="time-text color-gray">Raigor Stonehoof</IonText>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    {/* Icono o imagen de rol (ej. Support/Offlane) */}
                    <IonImg src={s} alt="Support" className="hero-img size-s" />
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">52.90%</IonText>
                    <IonProgressBar value={1} className="progress-victory kda"></IonProgressBar>
                </IonCol>

                <IonCol size="auto" className="text-align">
                    <IonText className="color text-xs">2.85</IonText>
                    <IonProgressBar value={1} className="progress-kda rol"></IonProgressBar>
                </IonCol>
            </IonRow>


        </IonGrid>
    );
};

export default HeroesStats;
