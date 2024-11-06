import { Request, Response } from 'express';
import ConstituentBusiness from '../business/ConstituentBusiness';

export class ConstituentsController {
	private business: ConstituentBusiness;

	constructor() {
		console.log('building constituent controller');
		this.business = new ConstituentBusiness();
	}

	// TODO: Add Update route
	// TODO: Add Delete route
	// TODO: Add UploadCSV route - we won't store the CSV, we're just going to parse and store content

	public async createConstituent(req: Request, res: Response) {
		console.log('in create constituent controller');
		try {
			const constituent = await this.business.createConstituent(req.body);
			res.status(201).json(constituent);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'error creating constituent', error });
		}
	}

	public async getConstituents(req: Request, res: Response) {
		console.log('in get constituents controller');
		try {
			const constituents = await this.business.getConstituents();
			res.status(200).json(constituents);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'error getting constituents', error });
		}
	}
}
