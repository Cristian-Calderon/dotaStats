import React from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg } from '@ionic/react';
import './Blog.css';  
import PostContent from '../../components/PostContent'; 
import Footer from '../../components/Footer';



const Blog: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage className='padding-top'>
      <IonContent className="">
        <p className='color text-sm'>¿Sabias que puedes ingregar de forma segura con Steam para acceder a tu perfil personal de dota 2?</p>
        <PostContent />
        <PostContent />
        <PostContent />
        <PostContent />
        <Footer />
        
      </IonContent>
    </IonPage>
  );
};


export default Blog;