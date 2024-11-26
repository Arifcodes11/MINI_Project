const connectdb = require('./connectdb');

// Retrieve all the columns from the number collection
const temperature_retrieve = async (clients) => {
    try {
        // Connect to the database
        clients = await connectdb(clients);
        console.log('Connected to the database');

        const db = clients.db('mini');

        // Retrieve all the documents from the number collection
        const temp = await db.collection('temp').find().toArray();
        

        // Close the database connection
        //clients.close();

        return {temp,clients};
    } catch (error) {
        console.error('Error retrieving numbers:', error);
        throw error;
    }
};

module.exports = temperature_retrieve;