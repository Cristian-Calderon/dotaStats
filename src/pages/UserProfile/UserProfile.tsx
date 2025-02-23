import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import UserContent from '../../components/UserContent';
import UserPerfil from '../../components/UserPerfil';
import Footer from '../../components/Footer';
import Barra from '../../components/Barra';


const UserProfile: React.FC = () => {
    const history = useHistory();

    return (
        <IonPage className='padding-top'>
            <IonContent className="">
                <UserContent>
                    <UserPerfil />
                    <Barra />
                </UserContent>
                <Footer />
            </IonContent>
        </IonPage>
    );
};


export default UserProfile;







