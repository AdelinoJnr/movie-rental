const { MongoClient } = require('mongodb');

const OPTIONS = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/MovieRental';
const DB_NAME = 'MovieRental';

const connection = async () => {
	const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
	const db = conn.db(DB_NAME);
	return db;
};

export default connection;