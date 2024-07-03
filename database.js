import mongoose from 'mongoose';

const connectToDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to DB: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Unable to connect to DB: ${err.message}`);
    }
};

export default connectToDb;
