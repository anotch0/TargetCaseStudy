import { render, screen } from '@testing-library/react';
import Routes from '../components/routes';

import store from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route, useNavigate } from 'react-router-dom';


describe('Routes', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <Router>
            <Routes />
        </Router>
      </Provider>);

      screen.debug();
  });
});