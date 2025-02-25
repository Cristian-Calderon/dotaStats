import React, { useState } from 'react';
import { IonText, IonButton, IonImg } from '@ionic/react';

import './NivelRango.css';

// Importar imágenes
import heraldImg from '../assets/1-herald.png';
import guardianImg from '../assets/2-guardian.png';
import crusaderImg from '../assets/3-crusader.png';
import archonImg from '../assets/4-archon.png';
import legendImg from '../assets/5-legend.png';
import ancientImg from '../assets/6-ancient.png';
import divineImg from '../assets/7-divine.png';
import immortalImg from '../assets/8-immortal.png';

const NivelRango: React.FC = () => {
    const [selectedRank, setSelectedRank] = useState<string>('heraldo');

    // Lista de rangos con imágenes importadas
    const ranks = [
        { id: 'heraldo', src: heraldImg, alt: 'Heraldo' },
        { id: 'guardian', src: guardianImg, alt: 'Guardián' },
        { id: 'cruzado', src: crusaderImg, alt: 'Cruzado' },
        { id: 'arquero', src: archonImg, alt: 'Arquero' },
        { id: 'leyenda', src: legendImg, alt: 'Leyenda' },
        { id: 'ancestro', src: ancientImg, alt: 'Ancestro' },
        { id: 'divino', src: divineImg, alt: 'Divino' },
        { id: 'inmortal', src: immortalImg, alt: 'Inmortal' },
    ];

    return (
        <div className="nivel-rango">
            <IonText>
                <h3 className="text-sm color-g">NIVEL DE RANGO:</h3>
            </IonText>

            <div className="rank-buttons">
                {ranks.map((rank) => (
                    <IonButton
                        key={rank.id}
                        className={`rank-button ${selectedRank === rank.id ? '' : 'outline'}`}
                        onClick={() => setSelectedRank(rank.id)}
                    >
                        <IonImg src={rank.src} alt={rank.alt} className="rank-img" />
                    </IonButton>
                ))}
            </div>
        </div>
    );
};

export default NivelRango;
