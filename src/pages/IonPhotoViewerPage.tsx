import {
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import MarkDown from '../components/MarkDown';
import usePinchZoom from '../../lib/hooks/usePinchToZoom';

const IonPhotoViewerPage: React.FC = () => {
  const [containerProps, contentProps] = usePinchZoom<
    HTMLDivElement,
    HTMLImageElement
  >();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>usePinchToZoom</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonCard mode="ios">
          <IonCardHeader>
            <IonCardTitle>Pinch to zoom</IonCardTitle>
            <IonCardSubtitle>Only available for mobile</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <div {...containerProps}>
              <img
                src="https://picsum.photos/1080"
                width={300}
                {...contentProps}
              />
            </div>
            <MarkDown
              markdown={`~~~js
import { usePinchZoom } from '@codesyntax/ionic-react-utils';
~~~`}
            />
            <MarkDown
              markdown={`~~~js
const [containerProps, contentProps] = usePinchZoom<HTMLDivElement, HTMLImageElement>();

<div {...containerProps}>
  <img src="https://picsum.photos/1080" {...contentProps} />
</div>
~~~`}
            />
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardContent>
            <ul>
              <li>
                This hook is only available for mobile view because you need the
                touch option to zoom.
              </li>
              <li>
                At the moment it is a solution based on this project:{' '}
                <a href="https://github.com/Noverish/react-use-pinch-zoom">
                  https://github.com/Noverish/react-use-pinch-zoom
                </a>
              </li>
              <li>
                Over time I would like to adapt it better to the Ionic
                framework. For example, I would like to develop a component that
                wraps the {`<IonImg />`} and giving more options in the desktop
                environment.
              </li>
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default IonPhotoViewerPage;
