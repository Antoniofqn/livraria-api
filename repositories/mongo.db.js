import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

function getMongoClient() {
    const uri = process.env.CONNECTION_STRING_MONGO_DB;
    return new mongodb.MongoClient(uri);
}

export {getMongoClient}
