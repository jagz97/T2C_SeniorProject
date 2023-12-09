![example workflow](https://github.com/jagz97/T2C_SeniorProject/actions/workflows/node.js.yml/badge.svg)
![Built by SJSU Students](https://badgen.net/badge/Built%20by/SJSU%20Students/yellow)

# Run Server

## Install dependencies for backend server
navigate to server:
`cd server`
install dependencies:
`npm install`

## To run server
`npm run start`
This will run the server on port 8080 local host

> **For dev team:** Use development mode using below 
## To run in development mode
`npm run dev`
Recommended for development only:
Use this to avoid re running server. The refresh button will restart the server
If there is an error running this command, run the following commands:
To install it on the project:
`npm install --save-dev nodemon`

if you want to install this on global npm:
`npm install --save-dev nodemon`

# Database

Make sure you have mysql server running:

Instructions for MAC:

Install MySQL: If you haven't already installed MySQL, you can do so using Homebrew package manager. Open Terminal and enter the following command:
```bash
brew install mysql
```
This command will download and install MySQL on your Mac.
Start the MySQL server: Once MySQL is installed, you can start the server by entering the following command in Terminal:

```sql
mysql.server start
```
This will start the MySQL server running in the background.
Verify that the server is running: You can check if the server is running by entering the following command:

```sql
mysql.server status
```
This will display the status of the MySQL server.
> If you have just installed MySQL using Homebrew on your Mac, then there is no default password set for the root user. You can simply enter the following command to connect to the MySQL server:
`mysql -u root` 
If you are prompted for a password, you can just press Enter to leave the password field blank and log in. However, it is recommended to set a password for the root user to secure your MySQL installation. You can set a password for the root user by following these steps:
Connect to MySQL using the following command:
 `mysql -u root`    
Set a new password for the root user using the following command:
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'new_password';` 
Replace 'new_password' with your desired password.
 Flush the privileges to apply the changes:
`FLUSH PRIVILEGES;` 
    
After setting a new password for the root user, you will need to use it to connect to the MySQL server.

> **Note:** Our app is set with the following parameter:
>In *server/app/config/db.config.js*:
> You may configure it is for yourself if you need it for yourself.  **Make sure to exclude your config when pushing code**
```javascript
module.exports = {
HOST:  "localhost",
USER:  "root",
PASSWORD:  "new_password",
DB:  "testdb",
dialect:  "mysql",
pool: {
max:  5,
min:  0,
acquire:  30000,
idle:  10000
}
};
```

Connect to the MySQL server: To connect to the MySQL server, enter the following command:
```sql
mysql -u root -p
```

This will open the MySQL command-line client and prompt you to enter the root user's password. Enter the password to connect to the server.

>**Note**: If you have set a different password for the root user, replace "root" with your username and enter your password.

Once you have connected to the MySQL server, you can start using it to create and manage databases.


# Run Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




