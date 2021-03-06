import { render, screen } from '@testing-library/react';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux';


describe('App', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>);
  });
});