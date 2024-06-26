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
import { useIonHeaderParallax } from '../../lib/main';
import MarkDown from '../components/MarkDown';

const IonHeaderParallaxPage: React.FC = () => {
  const { ref } = useIonHeaderParallax({
    image: 'https://picsum.photos/1080',
    expandedColor: 'var(--ion-color-dark)',
    titleColor: 'var(--ion-color-dark)',
    showBarButtons: true,
  });
  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>useIonHeaderParallax</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>How to use</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <MarkDown
              markdown={`~~~js
import { useIonHeaderParallax } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
const { ref } = useIonHeaderParallax({
  image: 'https://picsum.photos/1080',
  titleColor: 'black',
  expandedColor: 'var(--ion-color-dark)',
  titleColor: 'var(--ion-color-dark)',
  showBarButtons: true,
});
return (
  <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonTitle>Ionic header</IonTitle>
        </IonToolbar>
      </IonHeader>
      ...
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

export default IonHeaderParallaxPage;
