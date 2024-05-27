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
}

const appPages: AppPage[] = [
  {
    title: 'IonParallaxHeader',
    url: '/folder/IonParallaxHeader',
    icon: albumsOutline,
  },
  {
    title: 'IonPhotoViewer',
    url: '/folder/IonPhotoViewer',
    icon: imageOutline,
  },
  {
    title: 'IonPasswordInput',
    url: '/docs/ion-password-input',
    icon: eyeOutline,
  },
  {
    title: 'IonUserAvatar',
    url: '/folder/IonUserAvatar',
    icon: personCircleOutline,
  },
  {
    title: 'IonHeaderCollapse',
    url: '/folder/IonHeaderCollapse',
    icon: chevronCollapseOutline,
  },
  {
    title: 'InnerHTML',
    url: '/docs/inner-html',
    icon: codeWorkingOutline,
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

          {appPages.map((appPage, index) => {
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
                  <IonLabel>
                    {appPage.title}
                    {/* <p>A hook to modify the default behavior of the header</p> */}
                  </IonLabel>
                  {/* <small>A hook</small> */}
                  {/* <small>Hook</small> */}
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Hooks</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              {/* <IonIcon aria-hidden="true" slot="start" icon={bookmarkOutline} /> */}
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        {/* <IonNote>
          Developed by{' '}
          <a href="https://codesyntax.com" target="_blank">
            CodeSyntax
          </a>
        </IonNote> */}
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonItem lines='none'>
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
