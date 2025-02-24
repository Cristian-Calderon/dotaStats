import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import GridHeroesFuerza from '../../components/GridHeroesFuerza'; //
import GridHeroesAgilidad from '../../components/GridHeroesAgilidad';
import GridHeroesInteligencia from '../../components/GridHeroesInteligencia';
import GridHeroesUniversal from '../../components/GridHeroesUniversal';
import Footer from '../../components/Footer';


const Heroes: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className='padding-top'>
      <IonContent className="">
        <GridHeroesFuerza />
        <GridHeroesAgilidad />
        <GridHeroesInteligencia />
        <GridHeroesUniversal />
        <Footer />
      </IonContent>
    </IonPage>
  );
};


export default Heroes;