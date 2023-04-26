import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Waiting for database connection...");

    mongoose
        .connect(
            process.env.MONGODB_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        ).then(() => console.log("Mongodb atlas Connected Successfully!"))
        .catch((error) => console.error(error))
}

export default connectDatabase;