import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IonPage, IonContent, IonButton, IonText, IonImg, IonSegment, IonSegmentButton, IonLabel, IonChip, IonRadioGroup, IonItem, IonRadio, IonPopover, IonList } from '@ionic/react';

import './Filtrodias.css';


const Filtrodias: React.FC = () => {

    const [showPopover, setShowPopover] = useState(false);
    const [selectedRange, setSelectedRange] = useState<string>('Últimos 7 días');
    const buttonRef = useRef<HTMLIonButtonElement | null>(null);

    const handleSelectRange = (range: string) => {
        setSelectedRange(range);
        setShowPopover(false); // Cierra el popover al seleccionar
    };
    return (
        <div className='filtro-dias'>
            <IonText>
                <h3 className='text-sm color-g'>RANGO DE FECHAS</h3>
            </IonText>
            {/* options */}
            {/* Botón que abre el popover */}
            <IonButton className='text-sm' expand="block" ref={buttonRef} onClick={(e) => setShowPopover(true)}>
                {selectedRange}
            </IonButton>

            {/* Popover con opciones de rango de fecha */}
            <IonPopover
                isOpen={showPopover}
                onDidDismiss={() => setShowPopover(false)}
                event={buttonRef.current} // Asegura que el popover aparezca junto al botón
            >
                <IonList className='custom-list'>
                    {[
                        'Últimos 7 días',
                        'Últimas 2 semanas',
                        'Último mes',
                        'Últimos 3 meses',
                        'Últimos 6 meses'
                    ].map((range, index) => (
                        <IonItem button key={index} onClick={() => handleSelectRange(range)}>
                            <IonLabel>{range}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonPopover>

        </div>
    );
};

export default Filtrodias;