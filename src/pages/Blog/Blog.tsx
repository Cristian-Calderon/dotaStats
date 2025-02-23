import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';


const Blog: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className='padding-top'>
      <IonContent className="">
      </IonContent>
    </IonPage>
  );
};


export default Blog;