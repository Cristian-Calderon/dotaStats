import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Importa useHistory
import {
  IonPage,
  IonContent,
  IonButton,
  IonText,
  IonImg,
  IonInput,
} from '@ionic/react';

import './Login.css';
import steamLogo from '../../assets/steam.png';

const Login: React.FC = () => {
  const history = useHistory(); // Hook para la navegación
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    history.push('/sign-in'); // Navega a la pantalla de Sign In
  };

  const handleRegister = () => {
    history.push('/register'); // Navega a la pantalla de registro
  };

  return (
    <IonPage className="login-background">
      <IonContent className="login-background">
        <div className="logo-container">
          <IonImg src={steamLogo} alt="Logo de Steam" className="logo-steam" />
        </div>

        <div className="title-container">
          <IonText>
            <h1 className="login-title">Sign in</h1>
          </IonText>
        </div>

        <div className="form-container">
          <div className="input-container">
            <IonText>
              <p className="sign-in text-xs">Sign in with account name</p>
            </IonText>

            <form>
              <IonInput
                className="ion-input-responsive"
                placeholder="User"
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value!)}
                required
              />
              <IonText>
                <p className="password text-xs">Password</p>
              </IonText>
              <IonInput
                className="ion-input-responsive"
                placeholder="Password"
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value!)}
                required
              />

              <IonButton expand="block" onClick={handleSignIn} className="custom-button text-xs">
                Sign in
              </IonButton>
            </form>
          </div>
        </div>

        <div className="register-container">
          <div className="register-text">
            <IonText>
              <p className="text-xl color-text margin-text">¿Tu primera vez en Steam?</p>
            </IonText>
            <IonButton expand="block" onClick={handleRegister} className="custom-button-little text-xs">
              Crea una cuenta
            </IonButton>
            <IonText>
            <p className='text-xs color-text-grey'>Es gratis y muy facil. Descubrir miles de Juegos para jugar con millones de amigos nuevos. Mas informacion acerde de Steam</p>
          </IonText>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
