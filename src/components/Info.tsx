import React, { useState, useEffect, useRef } from "react";
import {
    IonText,
    IonButton,
    IonCard,
    IonModal,
    IonContent,
} from "@ionic/react";
import "./Info.css";
import mapboxgl from "mapbox-gl";

// 1) Agregamos la prop onButtonClick
interface InfoProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    showMap?: boolean;
    onButtonClick?: () => void; // agregado
}

const Info: React.FC<InfoProps> = ({ 
    title, 
    subtitle, 
    description, 
    buttonText, 
    showMap, 
    onButtonClick  // agregado
}) => {
    const [showModal, setShowModal] = useState(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    useEffect(() => {
        if (showMap && showModal) {
            setTimeout(() => {
                if (mapContainerRef.current && !mapRef.current) {
                    mapboxgl.accessToken = "pk.eyJ1IjoiZ2FyZGVsIiwiYSI6ImNtN25qaDVrYjAxdXIybXNsYW1sandkejMifQ.lDHo9PVSYl2WJVUuSWg9lw";
                    const map = new mapboxgl.Map({
                        container: mapContainerRef.current,
                        style: "mapbox://styles/mapbox/outdoors-v11",
                        center: [2.2026315, 41.4560364],
                        zoom: 16,
                    });
                    map.addControl(new mapboxgl.NavigationControl());
                    mapRef.current = map;
                }
            }, 300);
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [showModal, showMap]);

    // 2) Definimos una función para manejar el click en el botón
    const handleButtonClick = () => {
        // Si showMap está activo, abrimos el modal para el mapa:
        if (showMap) {
            setShowModal(true);
        } 
        // En caso de que se haya pasado una función onButtonClick (por ejemplo, para navegar):
        else if (onButtonClick) {
            onButtonClick();
        }
    };

    return (
        <IonCard className="info-content">
            <div>
                <IonText>
                    <h2 className="color text-sm info-text">{title}</h2>
                </IonText>
                <IonText>
                    <p className="text-sm color-important info-subtitle">{subtitle}</p>
                </IonText>
                <IonText>
                    <p className="text-sm color-gray">{description}</p>
                </IonText>

                {/* 3) Llamamos a nuestra función handleButtonClick */}
                <IonButton className="button-info" onClick={handleButtonClick}>
                    {buttonText}
                </IonButton>

                {showMap && (
                    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                        <IonContent>
                            <div 
                                ref={mapContainerRef}
                                style={{ width: "100%", height: "400px" }} 
                            />
                            <IonButton expand="full" onClick={() => setShowModal(false)}>
                                Cerrar
                            </IonButton>
                        </IonContent>
                    </IonModal>
                )}
            </div>
        </IonCard>
    );
};

export default Info;
