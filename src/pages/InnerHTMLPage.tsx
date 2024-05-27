import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import { InnerHTML } from '../../lib';

const InnerHTMLPage: React.FC = () => {
  const rawHTML = `
<div>
  <h4>Test HTML</h4>
  <p>Lorem ipsum</p>
  <ul>
    <li>Option 1</li>
    <li>Option 2</li>
    <li>Option 3</li>
    <li>Option 4</li>
  </ul>
</div>
`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>InnerHTML</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>HTML as string</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <code>{rawHTML}</code>
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Render as HTML</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <InnerHTML>{rawHTML}</InnerHTML>
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Render HTML from URL</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <InnerHTML url="/test.html" />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default InnerHTMLPage;
