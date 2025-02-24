import React from 'react';
import { IonPage, IonContent, IonText, IonImg } from '@ionic/react';
import './GridHeroes.css'; // Importamos estilos

const heroes = [
  { name: 'Alchemist', src: 'https://www.dotabuff.com/assets/heroes/alchemist.jpg' },
  { name: 'Axe', src: 'https://www.dotabuff.com/assets/heroes/axe.jpg' },
  { name: 'Bristleback', src: 'https://www.dotabuff.com/assets/heroes/bristleback.jpg' },
  { name: 'Centaur Warrunner', src: 'https://www.dotabuff.com/assets/heroes/centaur-warrunner.jpg' },
  { name: 'Chaos Knight', src: 'https://www.dotabuff.com/assets/heroes/chaos-knight.jpg' },
  { name: 'Dawnbreaker', src: 'https://www.dotabuff.com/assets/heroes/dawnbreaker.jpg' },
  { name: 'Doom', src: 'https://www.dotabuff.com/assets/heroes/doom.jpg' },
  { name: 'Dragon Knight', src: 'https://www.dotabuff.com/assets/heroes/dragon-knight.jpg' },
  { name: 'Earth Spirit', src: 'https://www.dotabuff.com/assets/heroes/earth-spirit.jpg' },
  { name: 'Earthshaker', src: 'https://www.dotabuff.com/assets/heroes/earthshaker.jpg' },
  { name: 'Elder Titan', src: 'https://www.dotabuff.com/assets/heroes/elder-titan.jpg' },
  { name: 'Huskar', src: 'https://www.dotabuff.com/assets/heroes/huskar.jpg' },
  { name: 'Kunkka', src: 'https://www.dotabuff.com/assets/heroes/kunkka.jpg' },
  { name: 'Legion Commander', src: 'https://www.dotabuff.com/assets/heroes/legion-commander.jpg' },
  { name: 'Lifestealer', src: 'https://www.dotabuff.com/assets/heroes/lifestealer.jpg' },
  { name: 'Mars', src: 'https://www.dotabuff.com/assets/heroes/mars.jpg' },
  { name: 'Night Stalker', src: 'https://www.dotabuff.com/assets/heroes/night-stalker.jpg' },
  { name: 'Ogre Magi', src: 'https://www.dotabuff.com/assets/heroes/ogre-magi.jpg' },
  { name: 'Omniknight', src: 'https://www.dotabuff.com/assets/heroes/omniknight.jpg' },
  { name: 'Primal Beast', src: 'https://www.dotabuff.com/assets/heroes/primal-beast.jpg' },
  { name: 'Pudge', src: 'https://www.dotabuff.com/assets/heroes/pudge.jpg' },
  { name: 'Slardar', src: 'https://www.dotabuff.com/assets/heroes/slardar.jpg' },
  { name: 'Spirit Breaker', src: 'https://www.dotabuff.com/assets/heroes/spirit-breaker.jpg' },
  { name: 'Sven', src: 'https://www.dotabuff.com/assets/heroes/sven.jpg' },
  { name: 'Tidehunter', src: 'https://www.dotabuff.com/assets/heroes/tidehunter.jpg' },
  { name: 'Timbersaw', src: 'https://www.dotabuff.com/assets/heroes/timbersaw.jpg' },
  { name: 'Tiny', src: 'https://www.dotabuff.com/assets/heroes/tiny.jpg' },
  { name: 'Treant Protector', src: 'https://www.dotabuff.com/assets/heroes/treant-protector.jpg' },
  { name: 'Tusk', src: 'https://www.dotabuff.com/assets/heroes/tusk.jpg' },
  { name: 'Underlord', src: 'https://www.dotabuff.com/assets/heroes/underlord.jpg' },
  { name: 'Undying', src: 'https://www.dotabuff.com/assets/heroes/undying.jpg' },
  { name: 'Wraith King', src: 'https://www.dotabuff.com/assets/heroes/wraith-king.jpg' }
];

const GridHeroes: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <div className="hero-grid-container">
          {/* Categoría de Fuerza */}
          <div className="hero-category">
            <img src="https://www.dotabuff.com/assets/hero_str.png" alt="Fuerza" />
            <p className="color">Fuerza</p>
          </div>

          {/* Grid de imágenes responsivo */}
          <div className="hero-grid">
            {heroes.map((hero, index) => (
              <img key={index} src={hero.src} alt={hero.name} className="hero-img" />
            ))}
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default GridHeroes;
