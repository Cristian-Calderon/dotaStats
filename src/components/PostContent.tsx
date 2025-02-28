import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonText } from '@ionic/react';
import './PostContent.css';
import Post from '../assets/post.jpeg';
import imagen1 from '../assets/scrollHorizontal/alchemist_dota2.jpg';
import imagen2 from '../assets/scrollHorizontal/alchemist_dota2-1.jpg';
import imagen3 from '../assets/scrollHorizontal/alchemist_dota2-2.jpg';

const PostContent: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          <IonText>
            <h2 className='color'>
              <span className='color-important'>Héroes para explorar</span> por kawaiisocks ennovie
            </h2>
          </IonText>
        </IonCardTitle>
      </IonCardHeader>

      {/* Contenedor que permitirá el scroll horizontal */}
      <div className="horizontal-scroll">
  <IonImg src={imagen1} className="scroll-image" />
  <IonImg src={imagen2} className="scroll-image" />
  <IonImg src={imagen3} className="scroll-image" />
</div>
      
      <IonCardContent>
        <IonText>
        <p className='text-base'>It’s been a week since the release of the Wandering Waters and it looks like this was a patch dedicated to massive mechanics overhaul, rather than balance changes. We are definitely not complaining — the game feels very fresh, though there are definitely some kinks to iron out and some heroes to tone down a bit. Latter category is what we are going to discuss today — the most powerful characters to play right now.</p>
        </IonText>
      </IonCardContent>
    </IonCard>
  );
};

export default PostContent;


