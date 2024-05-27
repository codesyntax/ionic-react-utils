import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonPage,
} from '@ionic/react';
import MarkDown from '../components/MarkDown';

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardSubtitle>
              A suite of components and utilities for Ionic Framework with React
            </IonCardSubtitle>
            <IonCardTitle>Ionic React Utils</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <MarkDown
              markdown={`~~~bash
npm i @codesyntax/ionic-react-utils
~~~`}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
