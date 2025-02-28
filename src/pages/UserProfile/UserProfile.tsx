import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import UserContent from '../../components/UserContent';
import UserPerfil from '../../components/UserPerfil';
import Footer from '../../components/Footer';
import Barra from '../../components/Barra';
import Info from '../../components/Info';


const UserProfile: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage className='padding-top'>
            <IonContent className="">
                <UserContent>
                    <UserPerfil />
                    <Barra />
                    <Info title={'Nombre Steam y Avatar'} subtitle={'Tu nombre de Steam y avatar son publicos'} description={'Apareceras con tu nombre de Steam y tu avatar. Estos se actualizan despues de cada partida que juegas'} buttonText={'Ocultar tu nombre y avatar'} ></Info>

                
                    <Info
                        title={'Ubicación'}
                        subtitle={'Ver host actual'}
                        description={'La ubicación es estimada por seguridad pero te brinda información a qué hosting estás conectado'}
                        buttonText={'Ver mapa'}
                        showMap={true}
                    />

                    <Info title={'Cuenta de Steam'} subtitle={'Tu Steam IDs es STEAM_0:155102323'} description={'La cuenta de Steam asociada con este jugador de Dota Buff es 110202203'} buttonText={'Cerrar sesion'}onButtonClick={() => {
                            // Esto redirige al path "/"
                            // que en tu App.tsx corresponde a Login
                            history.push("/");
                        }} ></Info>

                    <Info title={'Modo para daltonicos'} subtitle={'El modo para daltonicos solo esta disponible para un numero limitado de paginas. '} description={'Javascript es requerido para activar el modo para daltonicos'} buttonText={'Activar el modo Daltonico'} ></Info>

                </UserContent>
                <Footer />
            </IonContent>
        </IonPage>
    );
};


export default UserProfile;







