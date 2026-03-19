const mongoose = require('mongoose');

require('dotenv');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

    } catch (error) {
        
    }
}