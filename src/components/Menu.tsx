import {
  IonChip,
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
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { albumsOutline, archiveOutline, archiveSharp, bookmarkOutline, chevronCollapseOutline, codeWorkingOutline, eyeOutline, heartOutline, heartSharp, imageOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  icon: string;
  title: string;
  type: 'component'|'hook'
}

const appPages: AppPage[] = [
  {
    title: 'IonParallaxHeader',
    url: '/folder/IonParallaxHeader',
    icon: albumsOutline,
    type: 'hook',
  },
  {
    title: 'IonPhotoViewer',
    url: '/folder/IonPhotoViewer',
    icon: imageOutline,
    type: 'component',
  },
  {
    title: 'IonPasswordInput',
    url: '/docs/ion-password-input',
    icon: eyeOutline,
    type: 'component',
  },
  {
    title: 'IonUserAvatar',
    url: '/folder/IonUserAvatar',
    icon: personCircleOutline,
    type: 'component',
  },
  {
    title: 'useIonHeaderCollapse',
    url: '/docs/use-ion-header-collapse',
    icon: chevronCollapseOutline,
    type: 'hook',
  },
  {
    title: 'InnerHTML',
    url: '/docs/inner-html',
    icon: codeWorkingOutline,
    type: 'component',
  },
];

const labels = ['useAPI', 'useVisibleTabs', 'Notes', 'Work', 'Travel', 'Reminders'];

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

        {/* <IonList id="labels-list">
          <IonListHeader>Hooks</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
        {/* <IonNote>
          Developed by{' '}
          <a href="https://codesyntax.com" target="_blank">
            CodeSyntax
          </a>
        </IonNote> */}
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
