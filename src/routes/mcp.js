const express = require('express');
const XRPLRequestHandler = require('../handlers/xrplRequestHandler');
const xrplClient = require('../utils/xrplClient'); // Ensure the client is initialized
const router = express.Router();
const handler = new XRPLRequestHandler(xrplClient);

// Route for handling MCP requests
router.post('/mcp/v1', async (req, res) => {
    const { type, params } = req.body;

    try {
        const result = await handler.handleRequest(type, params);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ result: {}, error: error.message });
    }
});

module.exports = router;