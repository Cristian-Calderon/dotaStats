import React, { useState } from 'react';
import { IonText, IonButton, IonImg } from '@ionic/react';

import './Posicion.css';

// Importar imágenes de las posiciones
import pos1Img from '../assets/destruction.png';
import pos2Img from '../assets/automation.png';
import pos3Img from '../assets/shield.png';
import pos4Img from '../assets/outpatient_med.png';
import pos5Img from '../assets/support.png';

const Posicion: React.FC = () => {
    const [selectedPosition, setSelectedPosition] = useState<string>('pos1');

    // Lista de posiciones con imágenes importadas
    const positions = [
        { id: 'pos1', src: pos1Img, alt: 'Posición 1 - Carry' },
        { id: 'pos2', src: pos2Img, alt: 'Posición 2 - Mid' },
        { id: 'pos3', src: pos3Img, alt: 'Posición 3 - Offlane' },
        { id: 'pos4', src: pos4Img, alt: 'Posición 4 - Soft Support' },
        { id: 'pos5', src: pos5Img, alt: 'Posición 5 - Hard Support' },
    ];

    return (
        <div className="posicion">
            <IonText>
                <h3 className="text-sm color-g">POSICIÓN:</h3>
            </IonText>

            <div className="position-buttons">
                {positions.map((pos) => (
                    <IonButton
                        key={pos.id}
                        className={`position-button ${selectedPosition === pos.id ? '' : 'outline'}`}
                        onClick={() => setSelectedPosition(pos.id)}
                    >
                        <IonImg src={pos.src} alt={pos.alt} className="position-img" />
                    </IonButton>
                ))}
            </div>
        </div>
    );
};

export default Posicion;
