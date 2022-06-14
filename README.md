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
- Minimal testing can be ran with 'npm run test'
- Console logs can be found in console of browser developer tools

## Assumtions Made

- Implementation of routing with at least 2 pages
- Need to set up a server for the API calls
- Global style variables to pass between the pages and API call locations
- Multiple individual API call methods for the different data points
- A components library for the front-end
- Routes API is called at the start as Route data is needed for other API calls

## Further Notes

### Completedness

The app is functional in development mode. The proxy server does not work outside of development. The app is functional based on required functionality, but I do not believe it is yet production ready. While the app works reasonably well with the forward and back buttons, the routing is not fully fleshed out. This cause problems with refreshing the page when viewing the table as well as the routes dropdown menu fetch calling when page refreshes. Testing is also lacking.

### Side Note

Due to a misread on my part, the app was originally built out to match all the functionalities from NexTrip, including table result fully getting NexTrip Train Departures, both through the dropdown menus and search by Stop ID. This took away development time from other areas.

## Created With React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
