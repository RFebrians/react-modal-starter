import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ScreenOne from './components/screen-one/ScreenOne';
import ScreenTwo from './components/screen-two/ScreenTwo';
import ScreenThree from './components/screen-three/ScreenThree';

{/* Route Paging */}
const ScreenSwitchboard = () => {
  return (
    <Switch>
      <Route path="/screen-three">
        <ScreenThree />
      </Route>
      <Route path="/screen-two">
        <ScreenTwo />
      </Route>
      <Route path="/screen-one">
        <ScreenOne />
      </Route>
      <Route exact path="/">
        <ScreenOne />
      </Route>
    </Switch>
  );
};

export default ScreenSwitchboard;
