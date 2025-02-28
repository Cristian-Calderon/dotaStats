import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonText,
  IonImg,
  IonProgressBar
} from "@ionic/react";
import "../components/Objectos.css";

// Aquí agregamos la propiedad cost para cada objeto a modo de ejemplo
const objetos = [
  {
    imgSrc: "https://www.dotabuff.com/assets/items/power-treads.jpg",
    name: "Power Treads",
    vecesUsado: "10.016.238.299",
    tasaUso: 0.62,
    tasaVictoria: 0.34,
    cost: 1400, // Valor inventado
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/black-king-bar.jpg",
    name: "Black King Bar",
    vecesUsado: "8.324.112.000",
    tasaUso: 0.54,
    tasaVictoria: 0.48,
    cost: 4000, // Valor inventado
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/blink-dagger.jpg",
    name: "Blink Dagger",
    vecesUsado: "12.567.891.234",
    tasaUso: 0.75,
    tasaVictoria: 0.58,
    cost: 2250, // Valor inventado
  },
  {
    imgSrc:
      "https://es.dotabuff.com/assets/items/aghanims-shard-4e79e040a49fe45c7aa7aeb2b0776c06488564bc5cd33e742960153363910526.jpg",
    name: "Aghanim's Shard",
    vecesUsado: "73,265,279",
    tasaUso: 0.3401,
    tasaVictoria: 0.5674,
    cost: 1400, // Valor inventado
  },
  {
    imgSrc:
      "https://es.dotabuff.com/assets/items/aghanims-scepter-d304fe07769b81d0c2624d78b12ed3a97194470b18d1999f8d5ed5654d8b1691.jpg",
    name: "Aghanim's Scepter",
    vecesUsado: "56,787,240",
    tasaUso: 0.2636,
    tasaVictoria: 0.5925,
    cost: 4200, // Valor inventado
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/arcane-boots.jpg",
    name: "Arcane Boots",
    vecesUsado: "9.872.345.912",
    tasaUso: 0.58,
    tasaVictoria: 0.49,
    cost: 1300, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/phase-boots.jpg",
    name: "Phase Boots",
    vecesUsado: "8.412.300.111",
    tasaUso: 0.47,
    tasaVictoria: 0.52,
    cost: 1500, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/daedalus.jpg",
    name: "Daedalus",
    vecesUsado: "3.561.294.789",
    tasaUso: 0.25,
    tasaVictoria: 0.60,
    cost: 5150, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/manta-style.jpg",
    name: "Manta Style",
    vecesUsado: "2.890.111.999",
    tasaUso: 0.23,
    tasaVictoria: 0.54,
    cost: 4600, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/battle-fury.jpg",
    name: "Battle Fury",
    vecesUsado: "6.001.223.400",
    tasaUso: 0.36,
    tasaVictoria: 0.50,
    cost: 4100, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/radiance.jpg",
    name: "Radiance",
    vecesUsado: "4.777.123.911",
    tasaUso: 0.29,
    tasaVictoria: 0.56,
    cost: 5050, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/satanic.jpg",
    name: "Satanic",
    vecesUsado: "1.928.345.654",
    tasaUso: 0.15,
    tasaVictoria: 0.57,
    cost: 5800, // Valor inventado (aprox)
  },
  {
    imgSrc: "https://www.dotabuff.com/assets/items/heart-of-tarrasque.jpg",
    name: "Heart of Tarrasque",
    vecesUsado: "999.123.456",
    tasaUso: 0.10,
    tasaVictoria: 0.62,
    cost: 5000, // Valor inventado (aprox)
  },
];

const Objetos: React.FC = () => {
  // Guardamos el índice del objeto que se está presionando, si hay alguno
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  return (
    <IonGrid>
      {/* Barra principal */}
      <IonRow className="header-row">
        <IonCol size="auto">
          <IonText>Imagen</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>Objetos</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>Veces Usados</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>Tasa de uso</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>Tasa de victoria</IonText>
        </IonCol>
        <IonCol size="auto">
          <IonText>KDA</IonText>
        </IonCol>
      </IonRow>

      {/* Filas dinámicas */}
      {objetos.map((objeto, index) => (
        <IonRow key={index} className="data-row">
          <IonCol size="auto">
            <IonImg
              src={objeto.imgSrc}
              alt={objeto.name}
              className="hero-img"

              // Manejo del "press" en pantallas táctiles
              onTouchStart={() => setPressedIndex(index)}
              onTouchEnd={() => setPressedIndex(null)}

              // Manejo del "press" en navegadores desktop
              onMouseDown={() => setPressedIndex(index)}
              onMouseUp={() => setPressedIndex(null)}
            />
          </IonCol>

          <IonCol size="auto" className="hero-name text-xs">
            <IonText className="color-important">{objeto.name}</IonText>

            {/* Si se mantiene presionado este objeto, mostramos el costo en gold */}
            {pressedIndex === index && (
              <IonText style={{ color: "red" }}>
                {objeto.name} cuesta {objeto.cost} gold
              </IonText>
            )}
          </IonCol>

          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">{objeto.vecesUsado}</IonText>
            <IonProgressBar
              value={1}
              className="progress-bars victoria"
            ></IonProgressBar>
          </IonCol>

          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">
              {(objeto.tasaUso * 100).toFixed(2)}%
            </IonText>
            <IonProgressBar
              value={objeto.tasaUso}
              className="progress-victory kda"
            ></IonProgressBar>
          </IonCol>

          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">
              {(objeto.tasaVictoria * 100).toFixed(2)}%
            </IonText>
            <IonProgressBar
              value={objeto.tasaVictoria}
              className="progress-kda rol"
            ></IonProgressBar>
          </IonCol>
        </IonRow>
      ))}
    </IonGrid>
  );
};

export default Objetos;
