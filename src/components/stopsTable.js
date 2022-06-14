import React from "react";

// import components from semantic ui
import { Table, Header } from 'semantic-ui-react';

// import component for redux
import { useSelector } from 'react-redux'

function StopsTable() {
  //const trips = useSelector(state => state.trips);
  const stops = useSelector(state => state.stops);
  const route = useSelector(state => state.route);
  const direction = useSelector(state => state.direction);

  // function takes the list of stops and turns into a list of cells to populate table
  function listStops() {
    const listStops = stops.map((stops) => {
      return (
        <Table.Row key={stops.key}>
          <Table.Cell>{stops.text}</Table.Cell>
        </Table.Row>
      )
    });

    return listStops;
  }

  // old table for train route implementation, exceeded functionality
  /*return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Route</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Departs</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {trips}
        </Table.Body>
      </Table>
    </div>
  )*/

  // creates table and populated with stops
  return (
    <>
      <Header size='large' block>Stops for {route.text} headed {direction.text}</Header>
      <div className="Table-container">
        <Table celled columns={1}>
          <Table.Body>
            {listStops()}
          </Table.Body>
        </Table>
      </div>
    </>
  )
}

export default StopsTable;