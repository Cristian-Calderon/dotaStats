import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg, IonInput } from '@ionic/react';

import steamLogo from '../../assets/steam.png';
import './Register.css';

const Register: React.FC = () => {
  const history = useHistory();

  // Estados para los inputs
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Manejar el cambio de los inputs
  const handleEmailChange = (e: any) => setEmail(e.target.value);
  const handleUsernameChange = (e: any) => setUsername(e.target.value);
  const handlePasswordChange = (e: any) => setPassword(e.target.value);

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="logo-container">
          <IonImg src={steamLogo} alt="Logo de Steam" className="logo-steam" />
        </div>

        {/* Inputs para correo, nombre de usuario y contraseña */}
        <IonText>
          <p className="password text-xs">Direccion de correo electronico</p>
        </IonText>
        <IonInput
          value={email}
          onIonChange={handleEmailChange}
          type="email"
          clearInput
          required
        />

        <IonText>
          <p className="password text-xs">Nombre de usuario</p>
        </IonText>
        <IonInput
          value={username}
          onIonChange={handleUsernameChange}

          required
        />
        <IonText>
          <p className="password text-xs">Direccion de correo electronico</p>
        </IonText>
        <IonInput
          value={password}
          onIonChange={handlePasswordChange}

          type="password"
          required
        />

        {/* Botón que envía el formulario */}
        <IonButton expand="block" onClick={() => history.push('/home')}>
          Registrarse
        </IonButton>

        {/* Botón que vuelve al login */}
        <IonButton expand="block" onClick={() => history.push('/')}>
          Volver al Login
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Register;
