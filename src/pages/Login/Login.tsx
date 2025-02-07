import React, { useState } from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
} from '@ionic/react';
// importar estilos
import './Login.css';
import steamLogo from '../../assets/steam.png'

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <IonPage className='login-background'>
      <IonContent className="ion-padding login-background">
        <div className='logo-container'>
          <IonImg src={steamLogo} alt="Logo de Steam" className='logo-steam' />
        </div>

        <div className='title-container'>
          <IonText>
            <h1 className='login-title'>Sign in</h1>
          </IonText>
        </div>

        <div className='form-container'>
          <IonText>
            <p className='sign-in text-xs'>Sing in with account name</p>
          </IonText>
          {/* Formulario */}

          <form onSubmit={(event) => handleSubmit(event)} className=''>
          <IonItem>
            <IonInput
            placeholder='User'
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>

          </form>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Login;
