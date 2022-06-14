import React from 'react';

// import components used for routing
import { BrowserRouter as Router, Routes as Switch, Route, useNavigate } from 'react-router-dom';

// logo for header
import logo from '../images/bus_front.png';

// imported components from semantic ui
import { Tab, Button } from 'semantic-ui-react';

// imported classes for page components
import Routes from './routes';
import StopNumber from './stopNumber';
import StopsTable from './stopsTable';

// home page of the web app
class Home extends React.Component {
  render() {

    return (
      <>
        <div className="Home">
          <header className='Home-header'>
            <img src={logo} />
            <h1>NexTrip</h1>
          </header>
          <div style={{ width: '50%', margin: 'auto' }}>
            <Router>
              <Switch>
                <Route exact path="/" element={<Routes />} />
                <Route path='/nextrip' element={<StopsTable />} />
              </Switch>
            </Router>
          </div>
        </div>
      </>
    )
  }

  // past code used for implementation of stop id search and getting train times
  /*const panes = [
    { menuItem: 'By Route', render: () => <Tab.Pane><Routes /></Tab.Pane> },
    { menuItem: 'By Stop #', render: () => <Tab.Pane><StopNumber /></Tab.Pane> },
  ]

  return (
    <div>
      <div className="Home">
        <header className='Home-header'>
          <img src={logo} />
          <h1>NexTrip</h1>
        </header>
      </div>
      <div style={{ width: '50%', margin: 'auto' }}>
        <Tab panes={panes}/>
        <StopsTable/>
      </div>
    </div>
  )*/
}

export default Home;