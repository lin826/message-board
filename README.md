# Message Board
A demo web-based application

## Introduction
This is a message board [Demo](http://182.92.122.144:8888/) with the below functions.
* Add, Edit, Delete for each messages.
* Simple system manage dashboard.

### Techniques
* [Material-UI](https://github.com/callemall/material-ui/)
* [React](https://facebook.github.io/react/)
* [Redux](https://github.com/reactjs/redux/)
* [Express](http://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Docker](https://www.docker.com/products/docker-desktop)

## Installation
### [Node.js](https://nodejs.org/en/)
```sh
npm install
npm run build
```
### [Docker Desktop](https://www.docker.com/products/docker-desktop)
```
docker pull mongo
docker run --name mongo -v $(pwd)/data:/data/db -d -p 27017:27017 --rm mongo
```
To stop the MongoDB on Docker image: ``docker stop mongo``

## Start the server (default port on 3000):
```sh
npm start
```

## Demo Website
Tested in Chrome xx.0 (Desktop,Android) / Opera Developer xx.0 / Firefox xx.0 / Safari xx.0

## Reference
https://ithelp.ithome.com.tw/users/20110371/ironman/1616
https://github.com/nbb3210/react-redux-materialUi-express-mongodb-demo