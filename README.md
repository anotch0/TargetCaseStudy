# Target Case Study

## Getting Started

* Download project or clone using git
* Once downloaded, use 'npm install' to install required dependencies

## How to run

1. 'npm run server' : This will start the Proxy Server so api calls can be made
2. 'npm start' : This will start the web app on localhost
  * note : the build production will not work as proxy server will only work for development and api calls will not go through

## Testing

Very minimal testing with the react testing library was used. Majority of testing for API calls and redux functionality was done through console logging and browser DevTools

## Assumtions Made

- Implementation of routing with at least 2 pages
- Need to set up a server for the API calls
- Global style variables to pass between the pages and API call locations
- Multiple individual API call methods for the different data points
- A components library for the front-end

## Created With React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
