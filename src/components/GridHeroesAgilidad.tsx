import React from 'react';
import { IonPage, IonContent, IonText, IonImg } from '@ionic/react';
import './GridHeroesFuerza.css' // Asegúrate de tener los estilos correctos

const heroes = [
  { name: 'Anti Mage', src: 'https://www.dotabuff.com/assets/heroes/anti-mage.jpg' },
  { name: 'Arc Warden', src: 'https://www.dotabuff.com/assets/heroes/arc-warden.jpg' },
  { name: 'Bloodseeker', src: 'https://www.dotabuff.com/assets/heroes/bloodseeker.jpg' },
  { name: 'Bounty Hunter', src: 'https://www.dotabuff.com/assets/heroes/bounty-hunter.jpg' },
  { name: 'Clinkz', src: 'https://www.dotabuff.com/assets/heroes/clinkz.jpg' },
  { name: 'Drow Ranger', src: 'https://www.dotabuff.com/assets/heroes/drow-ranger.jpg' },
  { name: 'Ember Spirit', src: 'https://www.dotabuff.com/assets/heroes/ember-spirit.jpg' },
  { name: 'Faceless Void', src: 'https://www.dotabuff.com/assets/heroes/faceless-void.jpg' },
  { name: 'Gyrocopter', src: 'https://www.dotabuff.com/assets/heroes/gyrocopter.jpg' },
  { name: 'Hoodwink', src: 'https://www.dotabuff.com/assets/heroes/hoodwink.jpg' },
  { name: 'Juggernaut', src: 'https://www.dotabuff.com/assets/heroes/juggernaut.jpg' },
  { name: 'Kez', src: 'https://www.dotabuff.com/assets/heroes/kez.jpg' },
  { name: 'Luna', src: 'https://www.dotabuff.com/assets/heroes/luna.jpg' },
  { name: 'Medusa', src: 'https://www.dotabuff.com/assets/heroes/medusa.jpg' },
  { name: 'Meepo', src: 'https://www.dotabuff.com/assets/heroes/meepo.jpg' },
  { name: 'Monkey King', src: 'https://www.dotabuff.com/assets/heroes/monkey-king.jpg' },
  { name: 'Morphling', src: 'https://www.dotabuff.com/assets/heroes/morphling.jpg' },
  { name: 'Naga Siren', src: 'https://www.dotabuff.com/assets/heroes/naga-siren.jpg' },
  { name: 'Phantom Assassin', src: 'https://www.dotabuff.com/assets/heroes/phantom-assassin.jpg' },
  { name: 'Phantom Lancer', src: 'https://www.dotabuff.com/assets/heroes/phantom-lancer.jpg' },
  { name: 'Razor', src: 'https://www.dotabuff.com/assets/heroes/razor.jpg' },
  { name: 'Riki', src: 'https://www.dotabuff.com/assets/heroes/riki.jpg' },
  { name: 'Shadow Fiend', src: 'https://www.dotabuff.com/assets/heroes/shadow-fiend.jpg' },
  { name: 'Slark', src: 'https://www.dotabuff.com/assets/heroes/slark.jpg' },
  { name: 'Sniper', src: 'https://www.dotabuff.com/assets/heroes/sniper.jpg' },
  { name: 'Spectre', src: 'https://www.dotabuff.com/assets/heroes/spectre.jpg' },
  { name: 'Templar Assassin', src: 'https://www.dotabuff.com/assets/heroes/templar-assassin.jpg' },
  { name: 'Terrorblade', src: 'https://www.dotabuff.com/assets/heroes/terrorblade.jpg' },
  { name: 'Troll Warlord', src: 'https://www.dotabuff.com/assets/heroes/troll-warlord.jpg' },
  { name: 'Ursa', src: 'https://www.dotabuff.com/assets/heroes/ursa.jpg' },
  { name: 'Viper', src: 'https://www.dotabuff.com/assets/heroes/viper.jpg' },
  { name: 'Weaver', src: 'https://www.dotabuff.com/assets/heroes/weaver.jpg' }
];

const GridHeroesAgilidad: React.FC = () => {
  return (

        <div className="hero-grid-container">
          {/* Categoría de Agilidad */}
          <div className="hero-category">
            <img src="https://www.dotabuff.com/assets/hero_agi.png" alt="Agilidad" />
            <p className="color">Agilidad</p>
          </div>

          {/* Grid de imágenes responsivo */}
          <div className="hero-grid">
            {heroes.map((hero, index) => (
              <img key={index} src={hero.src} alt={hero.name} className="hero-img" />
            ))}
          </div>
        </div>
    
  );
};

export default GridHeroesAgilidad;
