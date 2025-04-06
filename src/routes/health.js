const express = require('express');
const router = express.Router();
const xrplClient = require('../utils/xrplClient');

router.get('/', async (req, res) => {
    try {
        const serverInfo = await xrplClient.request({ method: 'server_info' });
        res.json({ status: 'healthy', xrpl_connected: true });
    } catch (error) {
        res.json({ status: 'unhealthy', xrpl_connected: false });
    }
});

module.exports = router;