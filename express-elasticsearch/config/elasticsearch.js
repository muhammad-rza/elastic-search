const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
});

module.exports = function createIndex() {
    return client.indices.create({
        index: 'products',
        mapping: {
            products: {
                id: {
                    type: 'integer',
                },

                id: {
                    type: 'integer',
                },

                id: {
                    type: 'integer',
                },

                id: {
                    type: 'integer',
                }
            }
        }
    });
}