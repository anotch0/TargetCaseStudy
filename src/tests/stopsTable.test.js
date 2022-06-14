import { render, screen } from '@testing-library/react';
import StopsTable from '../components/stopsTable';

import store from '../redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route, useNavigate } from 'react-router-dom';


describe('Routes', () => {
  test('renders learn react link', () => {
    render(
      <Provider store={store}>
        <Router>
            <StopsTable />
        </Router>
      </Provider>);

      screen.debug();
  });
});