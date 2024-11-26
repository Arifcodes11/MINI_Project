const { MongoClient } = require('mongodb');

async function connectdb(clients) {
    if(!clients) {
        console.log('Connecting to the database');
        clients = new MongoClient('mongodb+srv://muzaffarmoti:muzaffar123@cluster0.zcvgapy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        await clients.connect();
    } else {
        console.log('Already connected to the database');
    }
    return clients;
}

module.exports = connectdb;