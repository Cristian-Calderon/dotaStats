import React from "react";
import {
  IonGrid, IonRow, IonCol, IonText, IonImg, IonProgressBar,
  IonPage,
  IonContent
} from "@ionic/react";
import '../components/Objectos.css';

const objetos = [
    {
      imgSrc: "https://www.dotabuff.com/assets/items/power-treads.jpg",
      name: "Power Treads",
      vecesUsado: "10.016.238.299",
      tasaUso: 0.62, // Representado como valor decimal (62%)
      tasaVictoria: 0.34, // Representado como valor decimal (34%)
    },
    {
      imgSrc: "https://www.dotabuff.com/assets/items/black-king-bar.jpg",
      name: "Black King Bar",
      vecesUsado: "8.324.112.000",
      tasaUso: 0.54,
      tasaVictoria: 0.48,
    },
    {
      imgSrc: "https://www.dotabuff.com/assets/items/blink-dagger.jpg",
      name: "Blink Dagger",
      vecesUsado: "12.567.891.234",
      tasaUso: 0.75,
      tasaVictoria: 0.58,
    },
    // Agregar los nuevos objetos aquí
    {
      imgSrc: "https://es.dotabuff.com/assets/items/aghanims-shard-4e79e040a49fe45c7aa7aeb2b0776c06488564bc5cd33e742960153363910526.jpg",
      name: "Aghanim's Shard",
      vecesUsado: "73,265,279",
      tasaUso: 0.3401, // 34.01%
      tasaVictoria: 0.5674, // 56.74%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/aghanims-scepter-d304fe07769b81d0c2624d78b12ed3a97194470b18d1999f8d5ed5654d8b1691.jpg",
      name: "Aghanim's Scepter",
      vecesUsado: "56,787,240",
      tasaUso: 0.2636, // 26.36%
      tasaVictoria: 0.5925, // 59.25%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/magic-wand-8705c4305218afde38f755a6bdb2bb54da60a4b3ce6d8163950015c5f2bad52e.jpg",
      name: "Magic Wand",
      vecesUsado: "51,568,341",
      tasaUso: 0.2394, // 23.94%
      tasaVictoria: 0.4721, // 47.21%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/power-treads-980cb4e9fc74127f29942cbfe149be2b414eec7e1614b860a4a6d312bc07f4a9.jpg",
      name: "Power Treads",
      vecesUsado: "49,319,467",
      tasaUso: 0.2290, // 22.90%
      tasaVictoria: 0.4898, // 48.98%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/blink-dagger-baaa3b7c2ac85481cfd574b8f305bcae4c8f4117e8f4050d100aa1da213a863d.jpg",
      name: "Blink Dagger",
      vecesUsado: "43,385,600",
      tasaUso: 0.2014, // 20.14%
      tasaVictoria: 0.5245, // 52.45%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/arcane-boots-a3780516ff09b554f3aff61b4a97cf56eb0b901f12cec9e15956dfefd2e1e620.jpg",
      name: "Arcane Boots",
      vecesUsado: "37,120,447",
      tasaUso: 0.1723, // 17.23%
      tasaVictoria: 0.4847, // 48.47%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/black-king-bar-8cd19b9e780334dfb49999208c4d5a4550c5e337ab2f55aa14e7c38cd2cd56f9.jpg",
      name: "Black King Bar",
      vecesUsado: "36,800,369",
      tasaUso: 0.1708, // 17.08%
      tasaVictoria: 0.5315, // 53.15%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/phase-boots-1e1484aa86fdef3822ee6e7f6c36e4b0c857763757d8596ae0880c31e7ee7fe3.jpg",
      name: "Phase Boots",
      vecesUsado: "29,413,298",
      tasaUso: 0.1366, // 13.66%
      tasaVictoria: 0.5120, // 51.20%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/bracer-6f90a395012ff706c86b8623eb58ee162eb4671f50f8f5b5b85528a4fc162004.jpg",
      name: "Bracer",
      vecesUsado: "23,853,306",
      tasaUso: 0.1107, // 11.07%
      tasaVictoria: 0.4545, // 45.45%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/dust-of-appearance-1a084e6a1a5468dbbf1044a1fb57fceed791b07ffad1b791da2bff8218823c51.jpg",
      name: "Dust of Appearance",
      vecesUsado: "17,978,457",
      tasaUso: 0.0835, // 8.35%
      tasaVictoria: 0.4500, // 45.00%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/glimmer-cape-6f2d6a4a6d2b34573d2b9e1713c2333a76933a2b57ea2f95d55a407f12ed8b70.jpg",
      name: "Glimmer Cape",
      vecesUsado: "17,560,000",
      tasaUso: 0.0815, // 8.15%
      tasaVictoria: 0.5221, // 52.21%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/aether-lens-e3adccde028dc57a6be5145dfb0a2eceb4c2a5979f2d7a4b58d5b62708ce4461.jpg",
      name: "Aether Lens",
      vecesUsado: "17,310,934",
      tasaUso: 0.0804, // 8.04%
      tasaVictoria: 0.5327, // 53.27%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/null-talisman-997fd29f6837f936654e61e1dbfed9eb5331b3198f9062e88df1d760d33e6d92.jpg",
      name: "Null Talisman",
      vecesUsado: "15,746,713",
      tasaUso: 0.0731, // 7.31%
      tasaVictoria: 0.4597, // 45.97%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/tranquil-boots-310f925a7b2605cafe7dde0d8ea9e9c08f96f779550afaf9d1a9915bdb6b2c16.jpg",
      name: "Tranquil Boots",
      vecesUsado: "15,668,432",
      tasaUso: 0.0727, // 7.27%
      tasaVictoria: 0.4847, // 48.47%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/wraith-band-9eaacdbaab915ccd7783356c43ea7a3183c34ac94298b83ce3931530fbf026c5.jpg",
      name: "Wraith Band",
      vecesUsado: "15,367,480",
      tasaUso: 0.0713, // 7.13%
      tasaVictoria: 0.4331, // 43.31%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/blade-mail-3d678cf7bad08b315fb34563d8dec35d3df4387f6d68fcbce9a50d27792262e0.jpg",
      name: "Blade Mail",
      vecesUsado: "15,296,363",
      tasaUso: 0.0710, // 7.10%
      tasaVictoria: 0.5002, // 50.02%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/observer-and-sentry-wards-70da79758aa544fe01a40798bb13c860eb37f724096a4d41e745ec43c9603840.jpg",
      name: "Observer and Sentry Wards",
      vecesUsado: "14,852,318",
      tasaUso: 0.0690, // 6.90%
      tasaVictoria: 0.3833, // 38.33%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/sange-and-yasha-d6211e1847a001cb4a7efc3643a2b686f8dfc9d3ee95b619dcc8bcd4797574b3.jpg",
      name: "Sange and Yasha",
      vecesUsado: "13,994,821",
      tasaUso: 0.0650, // 6.50%
      tasaVictoria: 0.6014, // 60.14%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/manta-style-6ac9dcbc12891e614a6b0b4dd4ca658ae34f31c4ac7bd6c8737b0d75062e4873.jpg",
      name: "Manta Style",
      vecesUsado: "13,983,399",
      tasaUso: 0.0649, // 6.49%
      tasaVictoria: 0.5507, // 55.07%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/boots-of-travel-c22900baf87e70de2d300520deaf10569f216f126063565fd5416312ba722108.jpg",
      name: "Boots of Travel",
      vecesUsado: "11,511,879",
      tasaUso: 0.0534, // 5.34%
      tasaVictoria: 0.5951, // 59.51%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/bottle-2302fc9050e4ca3a2bc1198799862f7f2b259fbea129ebb19809f8ddbcd50130.jpg",
      name: "Bottle",
      vecesUsado: "11,088,135",
      tasaUso: 0.0515, // 5.15%
      tasaVictoria: 0.4802, // 48.02%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/mind-breaker-c5f7fa8cda3558634d4580b56916de6a1aa91981586c982b775414b6b6f4bf83.jpg",
      name: "Mind Breaker",
      vecesUsado: "10,812,684",
      tasaUso: 0.0502, // 5.02%
      tasaVictoria: 0.5336, // 53.36%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/euls-scepter-of-divinity-4485ba2033945c942f163e85f456af29741379ce4f91158babe185552ad7cae2.jpg",
      name: "Eul's Scepter of Divinity",
      vecesUsado: "10,685,902",
      tasaUso: 0.0496, // 4.96%
      tasaVictoria: 0.5134, // 51.34%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/iron-branch-f1d1d51c3dc95b6960bb078b8f55a771010903ad530508bdc961bc49524664d7.jpg",
      name: "Iron Branch",
      vecesUsado: "10,663,253",
      tasaUso: 0.0495, // 4.95%
      tasaVictoria: 0.4274, // 42.74%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/quelling-blade-61748be16bc85c8ea46f56fcff8dbebd63d2ef529935c1001fa11fdb158cc652.jpg",
      name: "Quelling Blade",
      vecesUsado: "10,306,437",
      tasaUso: 0.0478, // 4.78%
      tasaVictoria: 0.4172, // 41.72%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/force-staff-117877d5e7097ce5c723ecb67b275da9c3122f5b778b9d92e08284e6292e2f11.jpg",
      name: "Force Staff",
      vecesUsado: "9,765,327",
      tasaUso: 0.0453, // 4.53%
      tasaVictoria: 0.5019, // 50.19%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/hurricane-pike-c677c912f7adeee700f463062bed06cb6169b89f76361aa72de14a032955df61.jpg",
      name: "Hurricane Pike",
      vecesUsado: "9,586,565",
      tasaUso: 0.0445, // 4.45%
      tasaVictoria: 0.5660, // 56.60%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/smoke-of-deceit-4942315ad2248fb6edb078378a5cfdfdb352f3dbbfed5f44a811ee6813d6b956.jpg",
      name: "Smoke of Deceit",
      vecesUsado: "9,377,041",
      tasaUso: 0.0435, // 4.35%
      tasaVictoria: 0.5103, // 51.03%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/daedalus-828ea7472c4b25a41d53d1935f99b9da5d6ccf214eec4769952cc0b891c66316.jpg",
      name: "Daedalus",
      vecesUsado: "9,334,621",
      tasaUso: 0.0433, // 4.33%
      tasaVictoria: 0.6171, // 61.71%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/battle-fury-3e6ddf5268ad1d402f6acacb70e5033bae6890b2c8b833f26cc75e2921c199d4.jpg",
      name: "Battle Fury",
      vecesUsado: "8,794,661",
      tasaUso: 0.0408, // 4.08%
      tasaVictoria: 0.5056, // 50.56%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/sentry-ward-dd2b908c62ca6fb0d865041f80415eb8cf6e3e57c60b45e8c76c4c7ccac22884.jpg",
      name: "Sentry Ward",
      vecesUsado: "8,791,068",
      tasaUso: 0.0408, // 4.08%
      tasaVictoria: 0.4509, // 45.09%
    },
    {
      imgSrc: "https://es.dotabuff.com/assets/items/magic-stick-59421ac3d355f46017b18b81a484a75fdc89d75d1e00f288c8ef8b8c9b88f4a7.jpg",
      name: "Magic Stick",
      vecesUsado: "8,385,148",
      tasaUso: 0.0389, // 3.89%
      tasaVictoria: 0.4415, // 44.15%
    },
];

const Objetos: React.FC = () => {
  return (
    <IonGrid>
      {/* Barra principal */}
      <IonRow className="header-row">
        <IonCol size="auto"><IonText>Imagen</IonText></IonCol>
        <IonCol size="auto"><IonText>Objetos</IonText></IonCol>
        <IonCol size="auto"><IonText>Veces Usados</IonText></IonCol>
        <IonCol size="auto"><IonText>Tasa de uso</IonText></IonCol>
        <IonCol size="auto"><IonText>Tasa de victoria</IonText></IonCol>
        <IonCol size="auto"><IonText>KDA</IonText></IonCol>
      </IonRow>

      {/* Filas dinámicas de datos */}
      {objetos.map((objeto, index) => (
        <IonRow key={index} className="data-row">
          <IonCol size="auto">
            <IonImg src={objeto.imgSrc} alt={objeto.name} className="hero-img" />
          </IonCol>
          <IonCol size="auto" className="hero-name text-xs">
            <IonText className="color-important">{objeto.name}</IonText>
          </IonCol>
          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">{objeto.vecesUsado}</IonText>
            <IonProgressBar value={1} className="progress-bars victoria"></IonProgressBar>
          </IonCol>
          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">{(objeto.tasaUso * 100).toFixed(2)}%</IonText>
            <IonProgressBar value={objeto.tasaUso} className="progress-victory kda"></IonProgressBar>
          </IonCol>
          <IonCol size="auto" className="text-align">
            <IonText className="color text-xs">{(objeto.tasaVictoria * 100).toFixed(2)}%</IonText>
            <IonProgressBar value={objeto.tasaVictoria} className="progress-kda rol"></IonProgressBar>
          </IonCol>

        </IonRow>
      ))}
    </IonGrid>
  );
};

export default Objetos;
