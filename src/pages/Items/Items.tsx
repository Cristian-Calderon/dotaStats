import React from "react";
import {
  IonGrid, IonRow, IonCol, IonText, IonImg, IonProgressBar,
  IonPage,
  IonContent
} from "@ionic/react";

import Objetos from "../../components/Objetos";





const Items: React.FC = () => {
  return (
    <IonPage className='padding-top'>
      <IonContent className="">
        <Objetos />
      </IonContent>
    </IonPage>
  );
};

export default Items;
