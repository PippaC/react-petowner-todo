# react-petowner-todo

react-petowner-todo is a small web application to track your daily habits or rituals.

It is built on [express](http://expressjs.com) using [React](https://facebook.github.io/react), [Redux](https://redux.js.org/) and [Immutable.js](https://facebook.github.io/immutable-js). It is developed with [webpack](http://webpack.github.io) and [react-hot-loader](http://gaearon.github.io/react-hot-loader/) and written with [babeljs](http://babeljs.io).

## Features
- Create new daily habits, and choose the frequency that how often you want to do the habit every week(on a daily basis, every other day, or on a specific day of the week and so on).
- Track the progress of habits on a weekly basis.

**Clone this repo**

```
git clone https://github.com/PippaC/react-petowner-todo.git
cd react-petowner-todo
```
run
`npm install`
or
`yarn`

**Start the app**

```bash
npm run dev
```

and open [localhost:8080](http://localhost:8080).

### nodemon

This task runs the server with [nodemon](https://github.com/remy/nodemon). Nodemon will restart the server when there is any file change.

### Webpack

Webpack is used as module bundler.

### Babel
Babel is used as syntax compiler to compile ES6 and JSX to readable format on the browser.