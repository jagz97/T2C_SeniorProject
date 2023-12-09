# Table of Contents
1. [Run Server](#run-server)
   - [Install Dependencies for Backend Server](#install-dependencies-for-backend-server)
   - [Run Server](#to-run-server)
   - [Development Mode](#to-run-in-development-mode)
   - [Database](#database)
2. [Run Client](#run-client)
   - [Available Scripts](#available-scripts)
   - [Learn More](#learn-more)
   - [Code Splitting](#code-splitting)
   - [Analyzing the Bundle Size](#analyzing-the-bundle-size)
   - [Making a Progressive Web App](#making-a-progressive-web-app)
   - [Advanced Configuration](#advanced-configuration)
   - [Deployment](#deployment)
   - [Build Failure](#npm-run-build-fails-to-minify)

# Run Server
## Install Dependencies for Backend Server
Navigate to the server directory:
```bash
cd server
```
Install dependencies:
```bash
npm install
```

## To Run Server
```bash
npm run start
```
This will run the server on port 8080 localhost.

### Development Mode
For the development team, use the development mode with the following command:
```bash
npm run dev
```
This is recommended for development only. It avoids re-running the server, and the refresh button will restart the server if needed. If there is an error running this command, install nodemon with the following commands:
```bash
npm install --save-dev nodemon
```
or globally:
```bash
npm install -g nodemon
```

## Database
Make sure you have MySQL server running. For macOS:

1. Install MySQL using Homebrew:
   ```bash
   brew install mysql
   ```
2. Start the MySQL server:
   ```sql
   mysql.server start
   ```
3. Verify server status:
   ```sql
   mysql.server status
   ```

Connect to MySQL:
```sql
mysql -u root -p
```
Enter the password when prompted.

**Note:** Our app is configured in *server/app/config/db.config.js*. Update the configuration as needed. Ensure to exclude your config when pushing code.

# Run Client
This project uses Create React App.

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
This is a one-way operation. Use with caution.

## Learn More
Learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting
[Code Splitting documentation](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
[Bundle Size documentation](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
[PWA documentation](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
[Advanced Configuration documentation](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
[Deployment documentation](https://facebook.github.io/create-react-app/docs/deployment)

### Build Failure
[Build failure documentation](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Technologies Used
- Payment API: [Stripe](https://stripe.com/)

Stripe is a widely used online payment processing platform. It provides a set of APIs that allows businesses to securely accept and manage online payments.
Usage in the Project: The project utilizes the Stripe API for handling payment transactions. This could include processing credit card payments, managing subscriptions, and handling other e-commerce-related transactions.
Rapid API (Hotel Booking API):

- Hotel Booking API: [Rapid API](https://rapidapi.com/)
Rapid API is a platform that connects developers with thousands of APIs. It simplifies the process of integrating third-party APIs into applications by providing a centralized hub for discovering, testing, and connecting to APIs.
Usage in the Project: The project uses a Hotel Booking API through Rapid API, which suggests integration with a third-party hotel booking service. This allows users to search for and book hotel accommodations within the application.
These technologies enable the project to incorporate essential features such as online payment processing for services and seamless integration with a hotel booking service, enhancing the overall functionality and user experience of the application.
