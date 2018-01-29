// @flow

import React from 'react';
import { Route, Match } from 'react-router-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AsyncRoute from './AsyncRoute';
import TableExampleControlled from './HabitTable';
import store from './store';

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div className="app">
        <Route exact path="/" component={props => <AsyncRoute props={props} loadingPromise={import('./HabitTable')} />} />
      </div>
    </MuiThemeProvider>
  </Provider>
);

export default App;
