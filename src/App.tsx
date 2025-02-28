import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { setupIonicReact } from '@ionic/react';

import Menu from './components/Menu';
import Login from './pages/Login/Login';
import SignIn from './pages/SignIn/SignIn';
import Register from './pages/Register/Register';
import Stats from './pages/Stats/Stats';
import Heroes from './pages/Heroes/Heroes';
import Items from './pages/Items/Items';
import Blog from './pages/Blog/Blog';
import UserProfile from './pages/UserProfile/UserProfile';


import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <Menu /> {/* ⬅️ Agregamos el componente Menu */}
      <IonRouterOutlet id="main-content">
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/stats" component={Stats} />
        <Route exact path="/heroes" component={Heroes} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/user" component={UserProfile} />
        <Route exact path="/register" component={Register} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
