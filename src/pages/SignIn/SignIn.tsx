import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import UserPerfil from '../../components/UserPerfil'; // Adjust the path as necessary
import './SignIn.css';
import UserContent from '../../components/UserContent'; // Adjust the path as necessary
import UserMatch from '../../components/UserMatch'
import HeroesMatches from '../../components/HeroesMatches';



const SignIn: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className='padding-top'>
      <IonContent className=" signin-content">
        <UserContent>
          <UserPerfil />
          <UserMatch />
          <HeroesMatches />
        </UserContent>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
