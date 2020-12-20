# React and Redux Shopping Cart

Project was developed to CICCC WMAD Course. For educational purpose.

Website:
https://react-and-redux-shopping-cart.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.\
The 'build' folder must be moved to server folder!

Note: There is a command in package.json to move it.


## mongoDB running on cloud

MongoDB Atlas
https://www.mongodb.com/cloud


## Deployment on Heroku

Follow heroku Client instalation instructions:
https://devcenter.heroku.com/articles/heroku-cli

Run commands using heroku client:

**heroku login**

**git push heroku main**

Config MONGOLAB_URI parameter:
**heroku config:set MONGOLAB_URI=mongodb://`<dbuser>`:`<dbpassword>`@cluster0.4uxi5.mongodb.net/`<dbname>`?retryWrites=true&w=majority**

**heroku ps:scale web=1**


## Tech Stack

**`React.Js` `Redux` `Express` `MongoDb`**

