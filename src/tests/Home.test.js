import { render, screen } from '@testing-library/react';
import Home from '../components/home';

import store from '../redux/store';
import { Provider } from 'react-redux';


describe('Home', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>);

      screen.debug();
  });
});