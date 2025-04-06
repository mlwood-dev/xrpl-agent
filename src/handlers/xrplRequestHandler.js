class XRPLRequestHandler {
    constructor(client) {
        this.client = client;
    }

    async handleRequest(requestType, params) {
        const handlers = {
            account_info: this.handleAccountInfo.bind(this),
            account_lines: this.handleAccountLines.bind(this),
            account_nfts: this.handleAccountNFTs.bind(this),
            account_transactions: this.handleAccountTransactions.bind(this),
            server_info: this.handleServerInfo.bind(this),
            submit_transaction: this.handleSubmitTransaction.bind(this),
            transaction_info: this.handleTransactionInfo.bind(this),
            book_offers: this.handleBookOffers.bind(this),
        };

        const handler = handlers[requestType];
        if (!handler) {
            throw new Error(`Unsupported request type: ${requestType}`);
        }

        return await handler(params);
    }

    async handleAccountInfo(params) {
        const response = await this.client.request({
            method: 'account_info',
            params: [{
                account: params.account,
                ledger_index: 'validated'
            }]
        });
        return response.result;
    }

    async handleAccountLines(params) {
        const response = await this.client.request({
            method: 'account_lines',
            params: [{
                account: params.account,
                ledger_index: 'validated'
            }]
        });
        return response.result;
    }

    async handleAccountNFTs(params) {
        const response = await this.client.request({
            method: 'account_nfts',
            params: [{
                account: params.account,
                ledger_index: 'validated'
            }]
        });
        return response.result;
    }

    async handleAccountTransactions(params) {
        const response = await this.client.request({
            method: 'account_tx',
            params: [{
                account: params.account,
                ledger_index: 'validated'
            }]
        });
        return response.result;
    }

    async handleServerInfo(params) {
        const response = await this.client.request({
            method: 'server_info',
            params: []
        });
        return response.result;
    }

    async handleSubmitTransaction(params) {
        const response = await this.client.request({
            method: 'submit',
            params: [{
                tx_blob: params.tx_blob
            }]
        });
        return response.result;
    }

    async handleTransactionInfo(params) {
        const response = await this.client.request({
            method: 'tx',
            params: [{
                transaction: params.hash
            }]
        });
        return response.result;
    }

    async handleBookOffers(params) {
        const response = await this.client.request({
            method: 'book_offers',
            params: [{
                taker_gets: params.taker_gets,
                taker_pays: params.taker_pays,
                ledger_index: 'validated'
            }]
        });
        return response.result;
    }
}

module.exports = XRPLRequestHandler;