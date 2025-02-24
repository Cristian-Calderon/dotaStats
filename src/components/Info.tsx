import React from "react";
import {
    IonPage,
    IonContent,
    IonText,
    IonButton,
    IonCard,
    IonCardContent
} from "@ionic/react";
import "./Info.css";

interface InfoProps {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
}

const Info: React.FC<InfoProps> = ({ title, subtitle, description, buttonText }) => {
    return (

        <IonCard className="info-content">
            <div >
                <IonText >
                    <h2 className="color text-sm info-text">{title}</h2>
                </IonText>
                <IonText >
                    <p className="text-sm color-important info-subtitle">{subtitle}</p>
                </IonText>
                <IonText>
                    <p className="text-sm color-gray" >{description}</p>
                </IonText>
                <IonButton className="button-info">{buttonText}</IonButton>
            </div>
        </IonCard>

    );
};

export default Info;
