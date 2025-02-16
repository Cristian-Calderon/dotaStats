import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButtons, IonMenuButton, IonButton } from '@ionic/react';
import { useMediaQuery } from 'react-responsive';
import { useLocation } from 'react-router-dom';
import './Menu.css'; // Importar los estilos del menú

const Menu: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const location = useLocation();

  // Ocultar menú en Login y Register
  const hideMenu = location.pathname === '/' || location.pathname === '/register';

  if (hideMenu) return null; // No renderiza nada si está en Login o Register

  return (
    <>
      {/* 🟢 Menú lateral en móviles */}
      {!isDesktop && (
        <>
          <IonMenu contentId="main-content" className='menu-custom'>
            <IonContent>
              <IonList>
                <IonItem className='text-lg' routerLink="/sign-in">
                  <IonLabel>Inicio</IonLabel>
                </IonItem>
                <IonItem className='text-lg' routerLink="/register">
                  <IonLabel>Estadisticas</IonLabel>
                </IonItem>
                <IonItem className='text-lg' routerLink="/register">
                  <IonLabel>Heroes</IonLabel>
                </IonItem>
                <IonItem className='text-lg' routerLink="/register">
                  <IonLabel>Objetos</IonLabel>
                </IonItem>
                <IonItem className='text-lg' routerLink="/register">
                  <IonLabel>Blog</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/* 🟡 Agregar el menú hamburguesa y el botón User en la barra */}
          <IonHeader className='custom-header'>
            <IonToolbar className='custom-toolbar'>
              {/* Botón Menú Hamburguesa */}
              <IonButtons slot="start" className='menu-container'>
                <div className="custom-menu-button">
                  <IonMenuButton />
                  <span className="menu-text text-xl">DOTASTATS</span>
                </div>
              </IonButtons>

              {/* 🟡 Botón "User" al otro lado */}
              <IonButtons slot="end">
                <IonButton routerLink="/user" className="user-button text-xl">User</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
        </>
      )}

      {/* 🔵 Navbar en Escritorio */}
      {isDesktop && (
        <IonHeader>
          <IonToolbar>
            <IonTitle>Mi App</IonTitle>
            <div style={{ display: 'flex', gap: '1rem', marginLeft: 'auto', marginRight: '1rem' }}>
              <IonItem routerLink="/sign-in">
                <IonLabel>Sign In</IonLabel>
              </IonItem>
              <IonItem routerLink="/register">
                <IonLabel>Register</IonLabel>
              </IonItem>
            </div>
          </IonToolbar>
        </IonHeader>
      )}
    </>
  );
};

export default Menu;
