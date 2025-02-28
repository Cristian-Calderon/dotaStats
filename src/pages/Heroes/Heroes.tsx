import React, { useState } from 'react';
import { IonPage, IonContent, IonInput } from '@ionic/react';
import GridHeroesFuerza from '../../components/GridHeroesFuerza';
import GridHeroesAgilidad from '../../components/GridHeroesAgilidad';
import GridHeroesInteligencia from '../../components/GridHeroesInteligencia';
import GridHeroesUniversal from '../../components/GridHeroesUniversal';
import Footer from '../../components/Footer';

const Heroes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <IonPage className="padding-top">
      <IonContent className="">
        {/* Input de búsqueda */}
        <div style={{ padding: '10px', textAlign: 'center' }}>
          <IonInput
            placeholder="Buscar héroe..."
            value={searchTerm}
            onIonInput={(e) => setSearchTerm((e.target as unknown as HTMLInputElement).value)}
            clearInput
          />
        </div>

        {/* Pasar el término de búsqueda a los componentes */}
        <GridHeroesFuerza searchTerm={searchTerm} />
        <GridHeroesAgilidad searchTerm={searchTerm} />
        <GridHeroesInteligencia searchTerm={searchTerm} />
        <GridHeroesUniversal searchTerm={searchTerm} />

        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Heroes;
