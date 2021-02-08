# SpaceXApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Development server

Run `npm run dev:ssr` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build:ssr` to build the project. The build artifacts will be stored in the `dist/` directory. The build will run in production mode.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Application code building overview

Created the project and its respective components and services using Angular CLI. The application is divided into the following component structure:-
    - app
        - space-x-home
            - space-x-filters
            - space-x-list (via route)
        - footer
Responsive media queries are written in global styles.scss and individual component based styles are among respective component specific scss files.
A `server.js` file is present which is responsible for rendering the `index.html` of the application onto the relative path of Heroku's deployed URL.
For deploying onto Heroku, `heroku-postbuild` cmd is added onto package.json which is triggered while deploying onto Heroku.

## Chrome lighthouse report

![Chrome lighthouse report](assets/sapcex_pubsap_lighthouse_report.png?raw=true)