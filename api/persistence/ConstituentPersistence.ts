import { Client } from 'pg';
import client from '../persistence/db';

export default class ConstituentPersistence {
	private client: Client;

	constructor() {
		this.client = client;
	}

	public async createConstituent(data: any) {
		const {
			firstName,
			middleName,
			lastName,
			email,
			birthday,
			addressId,
			businessId,
		} = data;

		const query = `
			INSERT INTO constituents (first_name, middle_name, last_name, email, birthday, address_id, business_id)
			VALUES ($1, $2, $3, $4, $5, $6, $7)
			RETURNING *;
		`;
		const values = [
			firstName,
			middleName,
			lastName,
			email,
			birthday,
			addressId,
			businessId,
		];

		const result = await this.client.query(query, values);
		return result.rows[0];
	}

	public async getConstituents() {
		console.log('in get constituent persistence');
		const query = `
			SELECT c.id, c.first_name, c.middle_name, c.last_name, c.email, c.birthday, a.line1, a.line2, a.city, s.abbreviation AS state, a.zip, b.name AS business_name
			FROM constituents c
			JOIN addresses a ON c.address_id = a.id
			JOIN states s ON a.state_id = s.id
			JOIN businesses b ON c.business_id = b.id;
		`;
		const result = await this.client.query(query);
		return result.rows;
	}

	public async queryConstituents(email: string) {
		const query = `
			SELECT c.id, c.first_name, c.middle_name, c.last_name, c.email, c.birthday, a.line1, a.line2, a.city, s.abbreviation AS state, a.zip, b.name AS business_name
			FROM constituents c WHERE c.email = ${email}
			JOIN addresses a ON c.address_id = a.id
			JOIN states s ON a.state_id = s.id
			JOIN businesses b ON c.business_id = b.id;
		`;
		const result = await this.client.query(query);
		return result.rows;
	}
}
