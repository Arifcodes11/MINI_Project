const connectdb = require('./connectdb');

// Retrieve all the columns from the number collection
const retrieve_numbers = async (clients) => {
    try {
        // Connect to the database
        clients = await connectdb(clients);
        console.log('Connected to the database');

        const db = clients.db('mini');

        // Retrieve all the documents from the number collection
        const numbers = await db.collection('phones').find().toArray();
        

        // Close the database connection
        // clients.close();

        return {numbers,clients};
    } catch (error) {
        console.error('Error retrieving numbers:', error);
        throw error;
    }
};

module.exports = retrieve_numbers;