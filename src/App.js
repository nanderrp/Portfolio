import React from 'react';
import './App.css';
import Wrapper from './Wrapper/Wrapper';
import { Switch, Route } from 'react-router-dom';
import Adobe from './Wrapper/Big Names/Clicked Names/Big Work/Adobe';
import AARP from './Wrapper/Big Names/Clicked Names/Big Work/AARP';
import UnderArmour from './Wrapper/Big Names/Clicked Names/Big Work/UnderArmour';
import Wacom from './Wrapper/Big Names/Clicked Names/Big Work/Wacom';
import Hyatt from './Wrapper/Big Names/Clicked Names/Big Work/Hyatt';
import Thesis from './Wrapper/Big Names/Clicked Names/Big Work/Thesis';
import Linkdin from  './Wrapper/Big Names/Clicked Names/Big Work/Linkdin';
import CapitalGroup from './Wrapper/Big Names/Clicked Names/Big Work/CapitalGroup';
import Logos from './Wrapper/Other Stuff/Stuffs/Logos';
import Circle from './Wrapper/Other Stuff/Stuffs/Circle';
import Illustrations from './Wrapper/Other Stuff/Stuffs/Illustrations';
import OceansEdge from './Wrapper/Other Stuff/Stuffs/OceansEdge';
import Album from './Wrapper/Other Stuff/Stuffs/Album';
import Stationary from './Wrapper/Other Stuff/Stuffs/Stationary';
import HandLettering from './Wrapper/Other Stuff/Stuffs/Handlettering';
import AlpenRose from './Wrapper/Other Stuff/Stuffs/Alpenrose';
import FriendsoftheGorge from './Wrapper/Other Stuff/Stuffs/FriendsoftheGorge';
import Kids from './Wrapper/Other Stuff/Stuffs/Kids';
import OCSP from './Wrapper/Other Stuff/Stuffs/OCSP';
import Password from './Wrapper/Big Names/Clicked Names/Password';
import Email from './Wrapper/About/Email';



function App() {
  return (
  
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Wrapper }/>
        <Route exact path="/Adobe" component={ Adobe }/>
        <Route exact path="/UnderArmour" component={ UnderArmour }/>
        <Route exact path="/Wacom" component={ Wacom }/>
        <Route exact path="/AARP" component={ AARP }/>
        <Route exact path="/Hyatt" component={ Hyatt }/>
        <Route exact path="/Thesis" component={ Thesis }/>
        <Route exact path="/Linkdin" component={ Linkdin }/>
        <Route exact path="/CapitalGroup" component={ CapitalGroup }/>
        <Route exact path="/Logos" component={ Logos }/>
        <Route exact path="/Circle" component={ Circle }/>
        <Route exact path="/Illustrations" component={ Illustrations }/>
        <Route exact path="/OceansEdge" component={ OceansEdge }/>
        <Route exact path="/Album" component={ Album }/>
        <Route exact path="/Stationary" component={ Stationary }/>
        <Route exact path="/HandLettering" component={ HandLettering }/>
        <Route exact path="/AlpenRose" component={ AlpenRose }/>
        <Route exact path="/FriendsoftheGorge" component={ FriendsoftheGorge }/>
        <Route exact path="/Kids" component={ Kids }/>
        <Route exact path="/OCSP" component={ OCSP }/>
        <Route exact path="/enterpassword" component={ Password }/>  
        <Route exact path="/contact" component={ Email }/>    
       
      </Switch>
    
    </div>
    
  );
}

export default App;
