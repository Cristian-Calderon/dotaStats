import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import GridHeroes from '../../components/GridHeroes';

const Heroes: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className='padding-top'>
      <IonContent className="">
        <GridHeroes />
      </IonContent>
    </IonPage>
  );
};


export default Heroes;