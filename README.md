# Node fetch app documentation
A NodeJS built application with express, express handelbars, node-fetch, bootstrap carousel for fetching a fake REST API into a JSON Object, then displaying it in a responsive carousel.

**- This guide is dissected into three parts:**
* How to install/run the app
* File structure 
* How it's built?


### How to install/run the app?
##### Installing nodejs and npm
1) The app is built on Node.jS, so to be able to run it you must have Node.JS and NPM. If you already have it on your system proceed to step(3).
2) Visit [Node.JS](https://nodejs.org/en/download/), then download your OS installer and run it.
3) Now you should have both NodeJS and NPM installed on your system, give them a little check by checking their presence and version in terminal/command-prompt:
  ```bash
  elrakabawi$ node -v
  #returns your nodejs version as: v6.9.0
  elrakabawi$ npm -v
  #returns your npm version as: 3.10.8
  ```
##### Installing and running our app
4) Now access the app directory you've downloaded from this repository with your terminal.
5) Run ```npm install``` in your command, then run ```npm start```. This will run this commands: 

  ```bash
  elrakabawi$ npm start
  > node-fetch-app@1.0.0 start Desktop/node-fetch-app
  > node index.js

  listening at localhost:3000
  ```
**Now, it's all up and running. Open your browser and visit [localhost:3000](http://localhost:3000).** You should expect something like the online delpoyed heroku app here [https://node-fetch-app.herokuapp.com/](https://node-fetch-app.herokuapp.com/).




### File structure

```
node-fetch-app
│
│─── README.md
│─── package.json
│─── index.js                     #Were fetching happens using node-fetch, JSON strigified then parsed and server is
│                                 #created with express.
└───public
│   └─── stylesheet
|   |     |
|   |     └─── style.css
│   │   
|   └─── js
|        |
|        └─── corse-interface.js  #enhancer for the bootstrap carousel look
│   
|───views
|    │───home.handelbars          #contains home view, handled by express-handelbars to generate HTML sections from parsed     |    |                            JSON object.
|    │
|    └─── layouts                 
|           └───main.handelbars   #contains main HTML Layout
|
└─── node_modules                 #contains necessary node modules like: node-fetch,express,express-handelbars ... etc.
```


### How it's built




Waving goes to Motoon.org, I enjoyed the task.
