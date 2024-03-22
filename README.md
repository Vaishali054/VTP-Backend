# Setup Instructions

1. Clone this repository.

   ```bash
   $ git clone https://github.com/JunihersGroup4/VTPBackend.git
   ```

2. Get into the repository directory.

   ```bash
   $ cd VTPBackend
   ```

3. Create the `.env` file using the sample `.env`.

4. Run the following commands.

   ```bash
   $ yarn install
   $ yarn start
   ```

5. MongoDB setup

   - Install MongoDB Compass from [here](https://www.mongodb.com/try/download/shell).
   - Select your system configuration.
     <div style="text-align:center">
       <img src="./src/readmeImages/SystemConfig.png" alt="Select system config" style="width:400px;height:300px;">
     </div>
   - Start MongoDB service using the following command in your terminal.

     ```bash
     sudo service mongod start
     ```

# ER Diagram

<div style="text-align:center">
  <img src="./src/readmeImages/Database Design.png" alt="ER Diagram" style="width:600px;height:400px;">
</div>

## Major Entities

**User :**    all basic user data is stored in this entity with editable name, password and email. Account status stores the current status of user's account (active , deleted) to restore user data in case account was deleted earlier(in future).

**Company :**  basic company details with it’s name, unique symbol and last close price and day high and low

**Watchlist :** Companies added by user to watchlist for monitoring specific stocks.

**Transaction :** Stores all the transactions made by a user with the transaction type(buy, sell) and transaction date for further assistance in accurately calculating net profit made by a user.

**UserStocks :** Keeps track of all stocks currently in user’s possession.

**Portfolio :** Keeps track of the user's Portfolio and maintains a record for portfolio status.


# System Diagram

<div style="text-align:center">
  <img src="./src/readmeImages/Flow Diagram (VTP).jpeg" alt="System Diagram" style="width:1300px;height:300px;">
</div>

The system design for the VTP (Virtual Trading Platform) website encompasses several key components to facilitate user registration, authentication, stock trading, portfolio management, profile handling, and watchlist functionality.

1. **User Authentication and Authorization**:
   - Utilizes JWT (JSON Web Tokens) for secure user authentication.
   - Implements middleware functions `authenticateJWT` and `validateUser` to ensure authenticated access to protected routes.

2. **User Registration and Login**:
   - Enables users to register with the platform by providing essential details such as username, email, and password.
   - Assigns a starting balance of $100,000 upon registration.
   - Facilitates user login to access their accounts securely.

3. **Stock Management**:
   - Retrieves and displays a list of available stocks for trading from external sources such as a stock exchange API or a database.

4. **Portfolio Management**:
   - Provides users with a comprehensive view of their portfolio, including the stocks they own and corresponding quantities.
   - Implements functionalities for users to buy and sell stocks, updating their balance accordingly.
   - Maintains a transaction history detailing buy/sell transactions within the portfolio.

5. **Profile Management**:
   - Allows users to view and modify their profile information, including username, email, and password.
   - Provides the option for users to delete their accounts if desired.

6. **Buying and Selling**:
   - Enabled authenticated to purchase stocks from the trade page. 
   - Checks the validity of the the order, based on user's balance (in case of buying), stocks being in possession (in case of selling), and whether the stocks exists, etc.
   - Makes an update to user balance, adds/reduces/removes user stocks and adds to transactions in the database

7. **Watchlist Management**:
   - Enables authenticated users to create and manage a watchlist of stocks they wish to monitor.
   - Offers functionalities to add or remove stocks from the watchlist.

8. **Visibility Settings for Portfolio**:
   - Allows users to set the visibility of their portfolio as either public or private.
   - Generates a sharable link based on the selected visibility setting.

9. **Database Design**:
   - Maintains a relational database structure to store user information, portfolio details, transaction history, watchlists, etc.
   - Ensures efficient data storage and retrieval through proper indexing and normalization techniques.

10. **Frontend Design**:
   - Develops user-friendly web interfaces for seamless interaction with the platform's functionalities.
   - Adopts responsive design principles to ensure accessibility across various devices and screen sizes.

11. **Backend Implementation**:
   - Utilizes a suitable backend programming language and framework (e.g., Node.js with Express.js) to handle server-side logic.
   - Implements API endpoints to support various client requests related to authentication, stock trading, portfolio management, profile handling, and watchlist management.
   - Integrates with external APIs or databases for fetching real-time stock data.

12. **Security Considerations**:
   - Implements robust security measures such as input validation, encryption of sensitive data, and protection against common web vulnerabilities.
   - Secures data transmission over the network using HTTPS protocol.

13. **Testing and Deployment**:
   - Conducts comprehensive testing to validate the system's functionality, reliability, and security aspects.
   - Deploys the application on a secure server environment, ensuring continuous monitoring and maintenance to uphold its integrity and performance.

In summary, the VTP system design encompasses a cohesive architecture that enables users to register, authenticate, trade stocks, manage portfolios, customize profile settings, monitor watchlists, and maintain transaction records effectively and securely.

# External API Used

## [Latest Stock Price](https://rapidapi.com/suneetk92/api/latest-stock-price/details)

### Introduction

It is used to fetch latest NSE stock price for 811 stocks.
Update frequency = 1 min
Latency = 635ms

### Authorisation

To use this API, an API key is needed. API key can be generated through the RapidAPI dashboard. Include your API key in the .env file under `RAPIDAPI_KEY` heading.

### Request Examples

Below is the code snippet for how it can be used.

```
const fetchAndUpdateStocks = async () => {
  const options = {
    method: "GET",
    url: "https://latest-stock-price.p.rapidapi.com/any",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    },
  };

  try {
    const response = await axios.request(options);
  } catch (error) {
    console.error(error);
  }
};

```

### Response Example

Below is how response is received from the api

```
  {
    symbol: 'WIPRO',
    identifier: 'WIPROEQN',
    open: 518,
    dayHigh: 518.55,
    dayLow: 509,
    lastPrice: 510,
    previousClose: 517,
    change: -7,
    pChange: -1.35,
    totalTradedVolume: 3196980,
    totalTradedValue: 1638356340.6000001,
    lastUpdateTime: '18-Mar-2024 15:59:38',
    yearHigh: 545.9,
    yearLow: 352,
    perChange365d: 37.32,
    perChange30d: -4.79
  }
```

### Implementation

We are periodically calling this api during the market hours to fetch real time stock data and storing it in the database.
