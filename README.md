# XRPL MCP Service Node

This project is an implementation of the XRPL MCP Service using Node.js and Express. It provides an API for interacting with the XRP Ledger, allowing users to perform various operations such as retrieving account information, checking server health, and submitting transactions.

## Project Structure

```
xrpl-mcp-service-node
├── src
│   ├── app.js               # Entry point of the application
│   ├── routes               # Contains route definitions
│   │   ├── health.js        # Health check route
│   │   └── mcp.js           # MCP request handling route
│   ├── handlers             # Contains request handlers
│   │   └── xrplRequestHandler.js # XRPL request handler class
│   └── utils                # Utility functions and clients
│       └── xrplClient.js    # Configured XRPL client instance
├── package.json             # npm configuration file
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
└── README.md                # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd xrpl-mcp-service-node
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variable:
   ```
   XRPL_NODE_URL=https://xrplcluster.com
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The server will be running on `http://localhost:8000`.

## API Endpoints

### Health Check

- **Endpoint:** `GET /health`
- **Description:** Checks the health of the server and the connection to the XRP Ledger.
- **Response:**
  ```json
  {
      "status": "healthy",
      "xrpl_connected": true
  }
  ```

### MCP Requests

- **Endpoint:** `POST /mcp/v1`
- **Description:** Handles various MCP requests for XRPL interactions.
- **Request Body:**
  ```json
  {
      "type": "account_info",
      "params": {
          "account": "rfdhfdj.....K5Z"
      }
  }
  ```
- **Response:**
  ```json
  {
      "result": { ... },
      "error": null
  }
  ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
