import React from 'react';
import {ThemeProvider} from 'styled-components';
import {AppStateProvider} from './src/context/AppContext';

import Navigation from './src/navigation/navigation';
import {theme} from './src/utils/theme';

function App(): JSX.Element {
  return (
    <AppStateProvider>
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </AppStateProvider>
  );
}

export default App;
