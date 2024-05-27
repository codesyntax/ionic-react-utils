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
import { IonPasswordInput } from '../../lib';
import MarkDown from '../components/MarkDown';
// import Markdown from 'react-markdown';
const IonPasswordInputPage: React.FC = () => {
  const doc1 = `
~~~js
import { IonPasswordInput } from '@codesyntax/ionic-react-utils';

~~~`;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>IonPasswordInput</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Default</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonPasswordInput />
            <MarkDown
              markdown={`~~~js
import { IonPasswordInput } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
<IonPasswordInput />
~~~`}
            />
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Props</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonPasswordInput showLock={true} eyeColor="danger" />
            <MarkDown
              markdown={`~~~js
import { IonPasswordInput } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
<IonPasswordInput showLock={true} eyeColor='danger' />
~~~`}
            />
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Outline password input</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonPasswordInput
              label="Outline password input"
              labelPlacement="floating"
              fill="outline"
            />
            <MarkDown
              markdown={`~~~js
import { IonPasswordInput } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
<IonPasswordInput
    label="Outline password input"
    labelPlacement="floating"
    fill="outline"
/>
~~~`}
            />
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Solid password input</IonCardTitle>
          </IonCardHeader>
          <IonCardContent mode="md">
            <IonPasswordInput
              label="Solid password input"
              labelPlacement="floating"
              fill="solid"
            />
            <MarkDown
              markdown={`~~~js
import { IonPasswordInput } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
<IonPasswordInput
    label="Solid password input"
    labelPlacement="floating"
    fill="solid"
/>
~~~`}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default IonPasswordInputPage;
