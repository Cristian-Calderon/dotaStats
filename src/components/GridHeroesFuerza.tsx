import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./GridHeroesFuerza.css";

ChartJS.register(ArcElement, Tooltip, Legend);

interface Props {
  searchTerm: string;
}

const heroes = [
  { name: 'Alchemist', src: 'https://www.dotabuff.com/assets/heroes/alchemist.jpg', stats:[90,40,60] },
  { name: 'Axe', src: 'https://www.dotabuff.com/assets/heroes/axe.jpg', stats:[80,35,55] },
  { name: 'Bristleback', src: 'https://www.dotabuff.com/assets/heroes/bristleback.jpg', stats:[85,30,50] },
  { name: 'Centaur Warrunner', src: 'https://www.dotabuff.com/assets/heroes/centaur-warrunner.jpg', stats:[95,25,45] },
  { name: 'Chaos Knight', src: 'https://www.dotabuff.com/assets/heroes/chaos-knight.jpg', stats:[88,33,48] },
  { name: 'Dawnbreaker', src: 'https://www.dotabuff.com/assets/heroes/dawnbreaker.jpg', stats:[92,28,50] },
  { name: 'Doom', src: 'https://www.dotabuff.com/assets/heroes/doom.jpg', stats:[90,32,48] },
  { name: 'Dragon Knight', src: 'https://www.dotabuff.com/assets/heroes/dragon-knight.jpg', stats:[85,30,55] },
  { name: 'Earth Spirit', src: 'https://www.dotabuff.com/assets/heroes/earth-spirit.jpg', stats:[80,40,50] },
  { name: 'Earthshaker', src: 'https://www.dotabuff.com/assets/heroes/earthshaker.jpg', stats:[88,35,47] },
  { name: 'Elder Titan', src: 'https://www.dotabuff.com/assets/heroes/elder-titan.jpg', stats:[90,33,45] },
  { name: 'Huskar', src: 'https://www.dotabuff.com/assets/heroes/huskar.jpg', stats:[85,38,47] },
  { name: 'Kunkka', src: 'https://www.dotabuff.com/assets/heroes/kunkka.jpg', stats:[88,35,50] },
  { name: 'Legion Commander', src: 'https://www.dotabuff.com/assets/heroes/legion-commander.jpg', stats:[90,32,48] },
  { name: 'Lifestealer', src: 'https://www.dotabuff.com/assets/heroes/lifestealer.jpg', stats:[85,35,50] },
  { name: 'Mars', src: 'https://www.dotabuff.com/assets/heroes/mars.jpg', stats:[92,30,48] },
  { name: 'Night Stalker', src: 'https://www.dotabuff.com/assets/heroes/night-stalker.jpg', stats:[88,33,49] },
  { name: 'Ogre Magi', src: 'https://www.dotabuff.com/assets/heroes/ogre-magi.jpg', stats:[85,35,50] },
  { name: 'Omniknight', src: 'https://www.dotabuff.com/assets/heroes/omniknight.jpg', stats:[90,30,50] },
  { name: 'Primal Beast', src: 'https://www.dotabuff.com/assets/heroes/primal-beast.jpg', stats:[95,25,45] },
  { name: 'Pudge', src: 'https://www.dotabuff.com/assets/heroes/pudge.jpg', stats:[90,30,50] },
  { name: 'Slardar', src: 'https://www.dotabuff.com/assets/heroes/slardar.jpg', stats:[88,35,47] },
  { name: 'Spirit Breaker', src: 'https://www.dotabuff.com/assets/heroes/spirit-breaker.jpg', stats:[85,33,50] },
  { name: 'Sven', src: 'https://www.dotabuff.com/assets/heroes/sven.jpg', stats:[90,30,50] },
  { name: 'Tidehunter', src: 'https://www.dotabuff.com/assets/heroes/tidehunter.jpg', stats:[92,28,50] },
  { name: 'Timbersaw', src: 'https://www.dotabuff.com/assets/heroes/timbersaw.jpg', stats:[88,35,47] },
  { name: 'Tiny', src: 'https://www.dotabuff.com/assets/heroes/tiny.jpg', stats:[90,30,50] },
  { name: 'Treant Protector', src: 'https://www.dotabuff.com/assets/heroes/treant-protector.jpg', stats:[85,35,50] },
  { name: 'Tusk', src: 'https://www.dotabuff.com/assets/heroes/tusk.jpg', stats:[88,33,49] },
  { name: 'Underlord', src: 'https://www.dotabuff.com/assets/heroes/underlord.jpg', stats:[90,30,50] },
  { name: 'Undying', src: 'https://www.dotabuff.com/assets/heroes/undying.jpg', stats:[85,35,50] },
  { name: 'Wraith King', src: 'https://www.dotabuff.com/assets/heroes/wraith-king.jpg', stats:[90,30,50] }
];

const GridHeroesFuerza: React.FC<Props> = ({ searchTerm }) => {
  const [selectedHero, setSelectedHero] = useState<string | null>(null);

  // Filtrar héroes en base al término de búsqueda
  const filteredHeroes = heroes.filter(hero =>
    hero.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleHeroClick = (heroName: string) => {
    setSelectedHero(heroName === selectedHero ? null : heroName);
  };

  return (
    <div className="hero-grid-container">
      {/* Categoría de Fuerza */}
      <div className="hero-category">
        <img src="https://www.dotabuff.com/assets/hero_str.png" alt="Fuerza" />
        <p className="color">Fuerza</p>
      </div>

      {/* Grid filtrado */}
      <div className="hero-grid">
        {filteredHeroes.length > 0 ? (
          filteredHeroes.map((hero) => (
            <div key={hero.name} className="hero-item" onClick={() => handleHeroClick(hero.name)}>
              <img src={hero.src} alt={hero.name} className="hero-img" />
              
              {selectedHero === hero.name && (
                <div className="chart-overlay">
                  <Doughnut
                    data={{
                      labels: ["Fuerza", "Agilidad", "Inteligencia"],
                      datasets: [
                        {
                          label: hero.name,
                          data: hero.stats,
                          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                        },
                      ],
                    }}
                    options={{ responsive: true, maintainAspectRatio: false }}
                  />
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No se encontraron héroes</p>
        )}
      </div>
    </div>
  );
};

export default GridHeroesFuerza;