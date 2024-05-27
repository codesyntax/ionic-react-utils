import {
  IonContent,
  IonFooter,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  albumsOutline,
  chevronCollapseOutline,
  codeWorkingOutline,
  colorWandOutline,
  eyeOutline,
  imageOutline,
} from 'ionicons/icons';
import './Menu.css';
import { version } from '../../package.json';
interface AppPage {
  url: string;
  icon: string;
  title: string;
  type: 'component' | 'hook';
}

const appPages: AppPage[] = [
  {
    title: 'IonPasswordInput',
    url: '/ionic-react-utils/ion-password-input',
    icon: eyeOutline,
    type: 'component',
  },
  // {
  //   title: 'IonUserAvatar',
  //   url: '/folder/IonUserAvatar',
  //   icon: personCircleOutline,
  //   type: 'component',
  // },
  {
    title: 'InnerHTML',
    url: '/ionic-react-utils/inner-html',
    icon: codeWorkingOutline,
    type: 'component',
  },
  {
    title: 'useIonHeaderParallax',
    url: '/ionic-react-utils/use-ion-header-parallax',
    icon: albumsOutline,
    type: 'hook',
  },
  {
    title: 'useIonHeaderCollapse',
    url: '/ionic-react-utils/use-ion-header-collapse',
    icon: chevronCollapseOutline,
    type: 'hook',
  },
  {
    title: 'usePinchToZoom',
    url: '/ionic-react-utils/use-pinch-to-zoom',
    icon: imageOutline,
    type: 'hook',
  },
];

// const labels = ['useAPI', 'useVisibleTabs', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Ionic React Utils</IonListHeader>
          <IonNote>
            A suite of components and utilities for Ionic Framework with React
          </IonNote>
          <IonMenuToggle autoHide={false}>
            <IonItem
              className={
                location.pathname === '/ionic-react-utils/' ? 'selected' : ''
              }
              routerLink={'/ionic-react-utils/'}
              routerDirection="none"
              lines="none"
              detail={false}
            >
              <IonIcon aria-hidden="true" slot="start" icon={colorWandOutline} />
              <IonLabel>Getting Started</IonLabel>
            </IonItem>
          </IonMenuToggle>
          <h6>Components</h6>
          {appPages
            .filter((item) => item.type === 'component')
            .map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      location.pathname === appPage.url ? 'selected' : ''
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      aria-hidden="true"
                      slot="start"
                      icon={appPage.icon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          <h6>Hooks</h6>
          {appPages
            .filter((item) => item.type === 'hook')
            .map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      location.pathname === appPage.url ? 'selected' : ''
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      aria-hidden="true"
                      slot="start"
                      icon={appPage.icon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
        </IonList>
        <p>Latest version: {version}</p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem lines="none">
            <IonLabel>
              Developed by {'     '}
              <a href="https://codesyntax.com" target="_blank">
                {' '}
                CodeSyntax
              </a>
            </IonLabel>
          </IonItem>
        </IonToolbar>
      </IonFooter>
    </IonMenu>
  );
};

export default Menu;
