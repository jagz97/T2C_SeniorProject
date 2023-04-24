![Build Status](https://github.com/jagz97/T2C_SeniorProject/blob/master/.github/workflows/node.js.yml/badge.svg)

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






