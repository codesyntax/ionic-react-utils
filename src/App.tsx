import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import InnerHTMLPage from './pages/InnerHTMLPage';
import IonPasswordInputPage from './pages/IonPasswordInputPage';
import IonHeaderCollapsePage from './pages/IonHeaderCollapsePage';
import IonHeaderParallaxPage from './pages/IonHeaderParallaxPage';
import IonPhotoViewerPage from './pages/IonPhotoViewerPage';
import HomePage from './pages/HomePage';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/ionic-react-utils/" exact={true}>
              {/* <Redirect to="/ionic-react-utils/inner-html" /> */}
              <HomePage />
            </Route>
            <Route path="/ionic-react-utils/inner-html" exact={true}>
              <InnerHTMLPage />
            </Route>
            <Route path="/ionic-react-utils/ion-password-input" exact={true}>
              <IonPasswordInputPage />
            </Route>
            <Route
              path="/ionic-react-utils/use-ion-header-collapse"
              exact={true}
            >
              <IonHeaderCollapsePage />
            </Route>
            <Route
              path="/ionic-react-utils/use-ion-header-parallax"
              exact={true}
            >
              <IonHeaderParallaxPage />
            </Route>
            <Route path="/ionic-react-utils/use-pinch-to-zoom" exact={true}>
              <IonPhotoViewerPage />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
