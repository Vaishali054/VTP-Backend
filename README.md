## Setup Instructions

1. Clone this repository.

    ```bash
    $ git clone https://github.com/JunihersGroup4/TitanTradeBackend.git
    ```

2. Create the `.env` file using the sample `.env`.

3. Run the following commands.

    ```bash
    $ yarn install
    $ yarn start
    ```

4. MongoDB setup
   - Install MongoDB Compass from [here](https://www.mongodb.com/try/download/shell).
   - Select your system configuration.
     <div style="text-align:center">
       <img src="./src/ReadmeImages/SystemConfig.png" alt="Select system config" style="width:400px;height:300px;">
     </div>
   - Start MongoDB service using the following command in your terminal.
   
     ```bash
     sudo service mongod start
     ```

## ER Diagram

<div style="text-align:center">
  <img src="./src/ReadmeImages/ERDiagram.png" alt="ER Diagram" style="width:600px;height:400px;">
</div>


## System Diagram

<div style="text-align:center">
  <img src="./src/ReadmeImages/Flow Diagram (VTP).jpeg" alt="System Diagram" style="width:1300px;height:300px;">
</div>
