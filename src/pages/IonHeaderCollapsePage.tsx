import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { UseIonHeaderCollapse, useIonHeaderCollapse } from '../../lib/main';
import MarkDown from '../components/MarkDown';

const IonHeaderCollapsePage: React.FC = () => {
  const { ref } = useIonHeaderCollapse({} as UseIonHeaderCollapse);
  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>useIonHeaderCollapse</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>How to use</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <MarkDown
              markdown={`~~~js
import { useIonHeaderCollapse } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
const { ref } = useIonHeaderCollapse({} as UseIonHeaderCollapse);

return (
  <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonTitle>Ionic header</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent fullscreen>
      ...
    </IonContent>
  </IonPage>
)
~~~`}
            />
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Scroll down to see the effect</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            {[...Array(50).keys()].map((item) => (
              <IonItem>{item}</IonItem>
            ))}
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default IonHeaderCollapsePage;
