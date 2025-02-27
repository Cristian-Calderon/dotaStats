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

interface InfoProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    showMap?: boolean;
}

const Info: React.FC<InfoProps> = ({ title, subtitle, description, buttonText, showMap }) => {
    const [showModal, setShowModal] = useState(false);
    const mapContainerRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null); // Referencia para evitar múltiples instancias

    useEffect(() => {
        if (showMap && showModal) {
            setTimeout(() => {
                if (mapContainerRef.current && !mapRef.current) {
                    mapboxgl.accessToken = "pk.eyJ1IjoiZ2FyZGVsIiwiYSI6ImNtN25qaDVrYjAxdXIybXNsYW1sandkejMifQ.lDHo9PVSYl2WJVUuSWg9lw";

                    const map = new mapboxgl.Map({
                        container: mapContainerRef.current,
                        style: "mapbox://styles/mapbox/outdoors-v11",
                        center: [2.2026315, 41.4560364], //Puig castellar
                        zoom: 16,
                    });

                    map.addControl(new mapboxgl.NavigationControl());

                    mapRef.current = map;
                }
            }, 300); // Pequeño retraso para asegurar que el modal se renderiza primero
        }

        return () => {
            // Limpiar la instancia del mapa cuando el modal se cierre
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, [showModal, showMap]);

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
                <IonButton className="button-info" onClick={() => setShowModal(true)}>
                    {buttonText}
                </IonButton>

                {showMap && (
                    <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                        <IonContent>
                            <div ref={mapContainerRef} style={{ width: "100%", height: "400px" }} />
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
