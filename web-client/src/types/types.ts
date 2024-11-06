export interface Constituent {
	id: number;
	first_name: string;
	middle_name?: string;
	last_name: string;
	email: string;
	birthday: string;
	address_id: number;
	business_id: number;
	phone: string;
	preferred_contact_method: string;
	additional_comments: string;

	address?: Address;
	business?: Business;
}

export interface Address {
	id: number;
	line1: string;
	line2?: string;
	city: string;
	state: string;
	zip: string;
}

export interface Business {
	id: number;
	name: string;
	address_id: number;
	number_of_employees: number;
	description: string;
}
