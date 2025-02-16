import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';

import lucas from '../../assets/lucas.jpg';

const SignIn: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding">
        {/* Imagen */}
        <div className="perfil">
          <div className="image-container">
            <IonImg src={lucas} alt="Logo de la App" className="logo-img" />
          </div>

          {/* Texto */}
          <div className="text-container">
            <IonText>
              <p className="sign-in-title">User</p>
              <p className="sign-in-description">
                Sumario
              </p>
            </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
