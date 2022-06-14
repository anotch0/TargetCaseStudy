/*
  NOTE:

  This is used to find and display stops based off of Stop #

  Accidentally implemented more than was required
*/


/*import React, { useState } from "react";

// components used from semantic ui
import { Input, Button, Message } from 'semantic-ui-react';

// handles the search bar and functionality for finding NexTrip based on stop number
function StopNumber() {
  const [hideMessage, setHideMessage] = useState(true); // boolean for showing error message
  const [text, setText] = useState(''); // holds input text

  // handles button search and retrieving NexTrip data
  const searchStopNumber = () => {
    fetch('/NexTrip/' + text)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then(data => {
        console.log(data);
        setHideMessage(true);
      })
      .catch(error => {
        console.log("Error fetching data: ", error);
        setHideMessage(false);
      })
  }

  return (
    <>
      <Input type='text' placeholder='Enter Stop Number' action>
        <input onChange={e => {
          setText(e.target.value)
          setHideMessage(true)
          }}/>
        <Button onClick={searchStopNumber}>Search</Button>
      </Input>
      <Message hidden={hideMessage}>{text} is not a valid stop number. Please enter a new stop number.</Message>
    </>
  )
}

export default StopNumber;*/