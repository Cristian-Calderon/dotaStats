import React, { useState } from "react";
import { IonPage, IonContent, IonImg, IonText, IonButton, IonModal } from "@ionic/react";
import './UserPerfil.css';
import lucas from '../assets/lucas.jpg';

const UserPerfil: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const newImage = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(newImage);
        }
    };

    return (
        <>
            {/* Imagen */}
            <div className="perfil">
                <div className="image-container" onClick={() => setShowModal(true)}>
                    <IonImg 
                        src={selectedImage || lucas} 
                        alt="Logo de la App" 
                        className="logo-img"
                    />
                </div>

                {/* Texto */}
                <div className="text-container">
                    <IonText>
                        <p className="sign-in-title text-xl">User</p>
                        <p className="sign-in-description .text-sm">Sumario</p>
                    </IonText>
                </div>
            </div>

            {/* Modal para cambiar la imagen */}
            <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                <div className="modal-content">
                    <h2>Selecciona una nueva imagen</h2>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange}
                    />
                    <IonButton onClick={() => setShowModal(false)}>Cerrar</IonButton>
                </div>
            </IonModal>
        </>
    );
};

export default UserPerfil;
