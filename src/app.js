const express = require('express');
const dotenv = require('dotenv');
const healthRoutes = require('./routes/health');
const mcpRoutes = require('./routes/mcp');

dotenv.config();

const app = express();
app.use(express.json());

app.use('/health', healthRoutes);
app.use('/mcp/v1', mcpRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});