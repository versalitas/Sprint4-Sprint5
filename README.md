# CHAT with Socket.io

Instructions:
Clone repository and make sure that npm is installed.

Initialize terminal from inside the project folder.

```
cd server
```
Install node modules.

```
npm install

```
Convert .env.example to .env and adapt variables to current environment.

Run server with

```
npm start
```

or in developer mode

```
npm run dev
```
### SERVER

Server runs with express and http modules.

### SOCKET.io

Basics:
https://socket.io/get-started/chat

Rooms:
https://socket.io/docs/v3/rooms/
https://www.geeksforgeeks.org/how-to-manage-users-in-socket-io-in-node-js/

Socket.io cheatsheet:
https://socket.io/docs/v4/emit-cheatsheet/#server-side

Authenticate sockets:
https://stackoverflow.com/questions/36788831/authenticating-socket-io-connections-using-jwt

One socket/ user:
https://medium.com/hackernoon/enforcing-a-single-web-socket-connection-per-user-with-node-js-socket-io-and-redis-65f9eb57f66a

Connecting frontend - backend:
https://stackabuse.com/serving-static-files-with-node-and-express-js/
### MONGO:

connect to mongo (patch for mac high sierra):
1. cd/Users
2. cd to your home directory
3. cd data
4. mongod --dbpath ~/data/db press enter then just keep it running.



### MONGOOSE:

MongoDB deployed as persistance with mongoose as ORM.

https://mongoosejs.com/
https://mongoosejs.com/docs/api/document.html#document_Document-validate

### FRONT END:

GENERAL (stitching together a chat):

https://github.com/StratocasterO/masterclasses-it-academy/tree/master/2022_07_12%20frontend

https://stackfame.com/mongodb-chat-schema-mongoose-chat-schema-chat-application

registration form
https://www.freecodecamp.org/learn/2022/responsive-web-design/learn-html-forms-by-building-a-registration-form/

shadow effect
https://www.w3schools.com/howto/howto_css_cards.asp

query selector
https://www.w3schools.com/jsref/met_document_queryselector.asp
https://dev.to/eidorianavi/queryselector-vs-getelementbyid-gm1

form action
https://www.w3schools.com/tags/att_form_action.asp

logout
https://stackoverflow.com/questions/29952249/how-to-create-log-out-script-parse-javascript

autofocus
https://www.w3schools.com/tags/att_input_autofocus.asp

icons
https://fontawesome.com/icons

hover dropdown
https://www.w3schools.com/howto/howto_css_dropdown.asp

animated input
https://www.w3schools.com/howto/howto_css_animated_search.asp


### Project Structure

Main structure of node.js project. 

- <b>app</b>:
    - <b>controllers</b> 
    - <b>middleware</b>
    - <b>models</b>
    - <b>routes</b>
    - <b>utils</b>
    - <b>.env.example</b>
    - <b>app.js</b>. Entry point.
- <b>.env</b>. Environment descriptor. See [dotenv doc](https://www.npmjs.com/package/dotenv).
- <b>.eslintrc</b>. Linter JS, static code analyzer. See [EsLint Docs](https://eslint.org/docs/user-guide/configuring/configuration-files).
- <b>.prettierignore</b>. Code formatter. See [Prettier Config](https://prettier.io/docs/en/configuration.html) and [Prettier Ignore](https://prettier.io/docs/en/ignore.html).
- <b>.ecosystem.config.js</b>. Process Manage at runtime. See [PM2 Docs](https://pm2.keymetrics.io/).
- <b>package.json</b>.










