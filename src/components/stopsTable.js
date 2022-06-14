import React from "react";
import { Table } from 'semantic-ui-react';

import { useSelector, useDispatch } from 'react-redux'

function StopsTable() {
  const trips = useSelector(state => state.trips);
  const dispatch = useDispatch();

  /*const listTrips = trips.map((trips) => {
    console.log(trips);
    return (
      <Table.Row>
        <Table.Cell>{trips.Route}</Table.Cell>
        <Table.Cell>{trips.Desctiption}</Table.Cell>
        <Table.Cell>{trips.DepartureText}</Table.Cell>
      </Table.Row>
    )
  });*/

  function listTrips() {
    const listTrips = trips.map((trips) => {
      return (
        <Table.Row>
          <Table.Cell>{trips.Route}</Table.Cell>
          <Table.Cell>{trips.Desctiption}</Table.Cell>
          <Table.Cell>{trips.DepartureText}</Table.Cell>
        </Table.Row>
      )
    });

    return listTrips;
  }

  return (
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
  )
}

export default StopsTable;