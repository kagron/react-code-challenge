# Kyle Grondin's Bounteous JavaScript Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Technologies included are React Router, Redux, Redux Toolkit, Thunk, Material UI, Prettier, Docker, Docker-compose, and Nginx (production).

This project is deployed on [AWS](http://ec2-52-86-194-33.compute-1.amazonaws.com/) via Docker & Docker-compose.

## Local Environment

There are two methods to run this locally: Docker and Node

### Docker

-   `$ docker-compose up`

Project will be available at `localhost:3000` by default

### Node/NPM

-   `$ npm i`
-   `$ npm start`

Project will be available at `localhost:3000` by default

## Building production image with Docker

-   `$ docker-compose -f docker-compose.yml -f docker-compose.prod.yml build`

A docker image tagged `kgrondin01/react-test-app` will be created. To run this you can replace `build` with `up`.

## Running Tests

### Docker

-   `$ docker-compose run --rm react-test-app npm test`

### Node/NPM

-   `$ npm i` (if not done previously)
-   `$ npm test`

## Notes & Possible Improvements

-   This project does not like Safari due to my use of the `fetch` API and/or the TVMaze API. An improvement I would make would be fixing this to fully support all browsers. Possible solutions to this would be testing a different Request library such as `axios`, or adding in a Polyfill for Safari.
-   Another improvement I would make would be adding Typescript. Given the time constraints, I went ahead with not using Typescript.
-   With more time I also would've added e2e testing with Cypress to fully flesh out the testing environment
-   CI/CD pipeline could also have been added. This is in Github currently so probably would've went with Github Actions, CircleCI, or if there were more complicated deployment steps, Jenkins
