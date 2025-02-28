import React from 'react';
import { IonPage, IonContent, IonText, IonImg } from '@ionic/react';
import './GridHeroesFuerza.css'; // Asegúrate de tener los estilos correctos

interface Props {
  searchTerm: string;
}

const heroes = [
  { name: 'Abaddon', src: 'https://www.dotabuff.com/assets/heroes/abaddon.jpg' },
  { name: 'Bane', src: 'https://www.dotabuff.com/assets/heroes/bane.jpg' },
  { name: 'Batrider', src: 'https://www.dotabuff.com/assets/heroes/batrider.jpg' },
  { name: 'Beastmaster', src: 'https://www.dotabuff.com/assets/heroes/beastmaster.jpg' },
  { name: 'Brewmaster', src: 'https://www.dotabuff.com/assets/heroes/brewmaster.jpg' },
  { name: 'Broodmother', src: 'https://www.dotabuff.com/assets/heroes/broodmother.jpg' },
  { name: 'Chen', src: 'https://www.dotabuff.com/assets/heroes/chen.jpg' },
  { name: 'Clockwerk', src: 'https://www.dotabuff.com/assets/heroes/clockwerk.jpg' },
  { name: 'Dark Seer', src: 'https://www.dotabuff.com/assets/heroes/dark-seer.jpg' },
  { name: 'Dark Willow', src: 'https://www.dotabuff.com/assets/heroes/dark-willow.jpg' },
  { name: 'Dazzle', src: 'https://www.dotabuff.com/assets/heroes/dazzle.jpg' },
  { name: 'Enigma', src: 'https://www.dotabuff.com/assets/heroes/enigma.jpg' },
  { name: 'Invoker', src: 'https://www.dotabuff.com/assets/heroes/invoker.jpg' },
  { name: 'Io', src: 'https://www.dotabuff.com/assets/heroes/io.jpg' },
  { name: 'Lone Druid', src: 'https://www.dotabuff.com/assets/heroes/lone-druid.jpg' },
  { name: 'Lycan', src: 'https://www.dotabuff.com/assets/heroes/lycan.jpg' },
  { name: 'Magnus', src: 'https://www.dotabuff.com/assets/heroes/magnus.jpg' },
  { name: 'Marci', src: 'https://www.dotabuff.com/assets/heroes/marci.jpg' },
  { name: 'Mirana', src: 'https://www.dotabuff.com/assets/heroes/mirana.jpg' },
  { name: 'Nyx Assassin', src: 'https://www.dotabuff.com/assets/heroes/nyx-assassin.jpg' },
  { name: 'Pangolier', src: 'https://www.dotabuff.com/assets/heroes/pangolier.jpg' },
  { name: 'Phoenix', src: 'https://www.dotabuff.com/assets/heroes/phoenix.jpg' },
  { name: 'Sand King', src: 'https://www.dotabuff.com/assets/heroes/sand-king.jpg' },
  { name: 'Snapfire', src: 'https://www.dotabuff.com/assets/heroes/snapfire.jpg' },
  { name: 'Techies', src: 'https://www.dotabuff.com/assets/heroes/techies.jpg' },
  { name: 'Vengeful Spirit', src: 'https://www.dotabuff.com/assets/heroes/vengeful-spirit.jpg' },
  { name: 'Venomancer', src: 'https://www.dotabuff.com/assets/heroes/venomancer.jpg' },
  { name: 'Visage', src: 'https://www.dotabuff.com/assets/heroes/visage.jpg' },
  { name: 'Void Spirit', src: 'https://www.dotabuff.com/assets/heroes/void-spirit.jpg' },
  { name: 'Windranger', src: 'https://www.dotabuff.com/assets/heroes/windranger.jpg' },
  { name: 'Winter Wyvern', src: 'https://www.dotabuff.com/assets/heroes/winter-wyvern.jpg' }
];

const GridHeroesUniversal: React.FC<Props> = ({searchTerm}) => {

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (

    

        <div className="hero-grid-container">
          {/* Categoría de Universal */}
          <div className="hero-category">
            <img src="https://www.dotabuff.com/assets/hero_all.png" alt="Universal" />
            <p className="color">Universal</p>
          </div>

          {/* Grid de imágenes responsivo */}
          <div className="hero-grid">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero, index) => (
            <img key={index} src={hero.src} alt={hero.name} className="hero-img" />
          ))
        ) : (
          <p>No se encontraron héroes</p>
        )}
      </div>
        </div>

  );
};

export default GridHeroesUniversal;
