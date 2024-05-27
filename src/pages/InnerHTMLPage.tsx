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
import { InnerHTML } from '../../lib/main';
import MarkDown from '../components/MarkDown';

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
            <IonCardTitle>Render string to HTML</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <InnerHTML>{rawHTML}</InnerHTML>
            <MarkDown
              markdown={`~~~js
import { InnerHTML } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
const rawHTML = ${rawHTML};
<InnerHTML>{rawHTML}</InnerHTML>
~~~`}
            />
          </IonCardContent>
        </IonCard>

        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Render HTML from URL</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <InnerHTML url="https://codesyntax.github.io/ionic-react-utils/test.html" />

            <MarkDown
              markdown={`~~~js
import { InnerHTML } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
<InnerHTML url="https://codesyntax.github.io/ionic-react-utils/test.html" />
~~~`}
            />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default InnerHTMLPage;
