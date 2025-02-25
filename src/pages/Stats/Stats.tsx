import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg, IonSegment, IonSegmentButton, IonLabel, IonChip, IonRadioGroup, IonItem, IonRadio, IonPopover, IonList } from '@ionic/react';

import Filtro from '../../components/Filtro';
import Filtrodias from '../../components/Filtrodias';


// importar componentes
import ModoJuego from '../../components/ModoJuego';
import NivelRango from '../../components/NivelRango';
import Posicion from '../../components/Posicion';
import HeroesStats from '../../components/HeroesStats';

const Stats: React.FC = () => {
  const history = useHistory();



  return (
    <IonPage className='padding-top'>
      <IonContent className="">
        <p className='text-xl color'>Estadisticas de facetas de heroes</p>
        <p className='text-sm color-gray'>Explora las tendencias del meta para todos los heroes y facetas en Dota 2. Filtra por posicion, rango, modo de juego y rango de fechas para ver los heroes mas populares y como se desempeñan.</p>


        <Filtro />
        <Filtrodias />
        <ModoJuego />
        <NivelRango />
        <Posicion/>
        <HeroesStats/>


      </IonContent>
    </IonPage>
  );
};


export default Stats;
