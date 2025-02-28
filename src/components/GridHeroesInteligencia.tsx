import React from 'react';
import { IonPage, IonContent, IonText, IonImg } from '@ionic/react';
import './GridHeroesFuerza.css'; // Asegúrate de tener los estilos correctos

interface Props {
  searchTerm: string;
}

const heroes = [
  { name: 'Ancient Apparition', src: 'https://www.dotabuff.com/assets/heroes/ancient-apparition.jpg' },
  { name: 'Crystal Maiden', src: 'https://www.dotabuff.com/assets/heroes/crystal-maiden.jpg' },
  { name: 'Death Prophet', src: 'https://www.dotabuff.com/assets/heroes/death-prophet.jpg' },
  { name: 'Disruptor', src: 'https://www.dotabuff.com/assets/heroes/disruptor.jpg' },
  { name: 'Enchantress', src: 'https://www.dotabuff.com/assets/heroes/enchantress.jpg' },
  { name: 'Grimstroke', src: 'https://www.dotabuff.com/assets/heroes/grimstroke.jpg' },
  { name: 'Jakiro', src: 'https://www.dotabuff.com/assets/heroes/jakiro.jpg' },
  { name: 'Keeper Of The Light', src: 'https://www.dotabuff.com/assets/heroes/keeper-of-the-light.jpg' },
  { name: 'Leshrac', src: 'https://www.dotabuff.com/assets/heroes/leshrac.jpg' },
  { name: 'Lich', src: 'https://www.dotabuff.com/assets/heroes/lich.jpg' },
  { name: 'Lina', src: 'https://www.dotabuff.com/assets/heroes/lina.jpg' },
  { name: 'Lion', src: 'https://www.dotabuff.com/assets/heroes/lion.jpg' },
  { name: 'Muerta', src: 'https://www.dotabuff.com/assets/heroes/muerta.jpg' },
  { name: 'Natures Prophet', src: 'https://www.dotabuff.com/assets/heroes/natures-prophet.jpg' },
  { name: 'Necrophos', src: 'https://www.dotabuff.com/assets/heroes/necrophos.jpg' },
  { name: 'Oracle', src: 'https://www.dotabuff.com/assets/heroes/oracle.jpg' },
  { name: 'Outworld Destroyer', src: 'https://www.dotabuff.com/assets/heroes/outworld-destroyer.jpg' },
  { name: 'Puck', src: 'https://www.dotabuff.com/assets/heroes/puck.jpg' },
  { name: 'Pugna', src: 'https://www.dotabuff.com/assets/heroes/pugna.jpg' },
  { name: 'Queen Of Pain', src: 'https://www.dotabuff.com/assets/heroes/queen-of-pain.jpg' },
  { name: 'Ringmaster', src: 'https://www.dotabuff.com/assets/heroes/ringmaster.jpg' },
  { name: 'Rubick', src: 'https://www.dotabuff.com/assets/heroes/rubick.jpg' },
  { name: 'Shadow Demon', src: 'https://www.dotabuff.com/assets/heroes/shadow-demon.jpg' },
  { name: 'Shadow Shaman', src: 'https://www.dotabuff.com/assets/heroes/shadow-shaman.jpg' },
  { name: 'Silencer', src: 'https://www.dotabuff.com/assets/heroes/silencer.jpg' },
  { name: 'Skywrath Mage', src: 'https://www.dotabuff.com/assets/heroes/skywrath-mage.jpg' },
  { name: 'Storm Spirit', src: 'https://www.dotabuff.com/assets/heroes/storm-spirit.jpg' },
  { name: 'Tinker', src: 'https://www.dotabuff.com/assets/heroes/tinker.jpg' },
  { name: 'Warlock', src: 'https://www.dotabuff.com/assets/heroes/warlock.jpg' },
  { name: 'Witch Doctor', src: 'https://www.dotabuff.com/assets/heroes/witch-doctor.jpg' },
  { name: 'Zeus', src: 'https://www.dotabuff.com/assets/heroes/zeus.jpg' }
];

const GridHeroesInteligencia: React.FC<Props> = ({searchTerm}) => {

  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
   
        <div className="hero-grid-container">
          {/* Categoría de Inteligencia */}
          <div className="hero-category">
            <img src="https://www.dotabuff.com/assets/hero_int.png" alt="Inteligencia" />
            <p className="color">Inteligencia</p>
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

export default GridHeroesInteligencia;
