import {act, render, screen} from '@testing-library/react-native';
import Splash from '../src/features/splash/Splash';
import {ThemeProvider} from 'styled-components/native';
import {theme} from '../src/utils/theme';
import React from 'react';
import 'jest-styled-components';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

describe('Splash', () => {
  let props: any;

  beforeEach(() => {
    jest.useFakeTimers();
    props = createTestProps({});
  });

  test('should render correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Splash {...props} />
      </ThemeProvider>,
    );
    expect(screen).toMatchSnapshot();
  });

  test('should render title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Splash {...props} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Pokemon')).toBeTruthy();
  });

  test('should render sub-title correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Splash {...props} />
      </ThemeProvider>,
    );
    expect(screen.getByText('Pokedex')).toBeTruthy();
  });

  test('should navigate to Home after 3 seconds', () => {
    render(
      <ThemeProvider theme={theme}>
        <Splash {...props} />
      </ThemeProvider>,
    );
    act(() => {
      jest.runOnlyPendingTimers();
    });
    expect(props.navigation.navigate).toBeCalledWith('Home');
  });
});
