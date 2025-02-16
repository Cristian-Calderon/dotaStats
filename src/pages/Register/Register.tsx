import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText } from '@ionic/react';

const Register: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonText>
          <h1>Página de Registro</h1>
        </IonText>
        <IonButton expand="block" onClick={() => history.push('/')}>
          Volver al Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
