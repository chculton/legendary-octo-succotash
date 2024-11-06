import dotenv from 'dotenv';
import { Client } from 'pg';

dotenv.config();

const client = new Client({
	user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASSWORD,
	port: Number(process.env.DB_PORT),
});

client
	.connect()
	.then(() => console.log(`successfully connected to ${process.env.DB_NAME}`))
	.catch((err) =>
		console.error(`failed to connect to ${process.env.DB_NAME} - ${err}`)
	);

export default client;
