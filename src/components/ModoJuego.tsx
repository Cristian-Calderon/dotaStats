import React, { useState } from 'react';
import { IonText, IonButton } from '@ionic/react';

import './Filtro.css';

const ModoJuego: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('heroes');

    return (
        <div>
            <IonText>
                <h3 className='text-sm color-g'>AGRUPADOS POR:</h3>
            </IonText>

            <div className="option-buttons">
                <IonButton
                    className={`option-button ${selectedOption === 'heroes' ? '' : 'outline'}`}
                    onClick={() => setSelectedOption('heroes')}
                >
                    Eleccion libre
                </IonButton>
                <IonButton
                    className={`option-button ${selectedOption === 'facetas' ? '' : 'outline'}`}
                    onClick={() => setSelectedOption('facetas')}
                >
                    Turbo
                </IonButton>
            </div>
        </div>
    );
};

export default ModoJuego;
