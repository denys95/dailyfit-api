# DailyFit API

Please use Node.js 11.10 or greater and Npm 6.7 or greater.

## Setup

install adonis globally
`npm i -g @adonisjs/cli` 

Run 
```
npm install
```
Run migration
```
adonis migration:run
```
Run application
```
npm start
```

### API docs

We use http://apidocjs.com/ to generate API docs.
You should comment all routers and then generate readable docs via command:

```
npm install apidoc -g

apidoc -i app/Routes/ -o apidoc/ 
```

### Git branches
- develop - your local branch
- staging  - branch for test server
- master - branch for production server
