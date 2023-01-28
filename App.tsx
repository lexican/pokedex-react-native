import React from 'react';
import {ThemeProvider} from 'styled-components';

import Navigation from './src/navigation/navigation';
import {theme} from './src/utils/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
