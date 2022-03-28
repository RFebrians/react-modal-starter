import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import AppShell from './AppShell';

import './main.css';

{/* NOTE For Developer : Legacy Code , do not update dependencies react router unless you now what it's */}
ReactDOM.render(
  <StrictMode>
    <AppShell />
  </StrictMode>,
  document.getElementById('app-root')
);
