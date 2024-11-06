import ConstituentPersistence from '../persistence/ConstituentPersistence';

export default class ConstituentBusiness {
	private persistence: ConstituentPersistence;

	constructor() {
		this.persistence = new ConstituentPersistence();
	}

	public async createConstituent(data: any) {
		// TODO: search constituents based off provided email
		// If a user is returned, update with new details rather than creating new
		return await this.persistence.createConstituent(data);
	}

	public async getConstituents() {
		console.log('in get constituent business');
		return await this.persistence.getConstituents();
	}
}
