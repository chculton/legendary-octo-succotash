import { useEffect, useState } from 'react';
import { Constituent } from '../types/types';

const ConstituentList = () => {
	const [constituents, setConstituents] = useState<Constituent[]>([]);

	const fetchConstituents = async () => {
		try {
			const res = await fetch('http://localhost:5000/api/constituents');
			if (res.status !== 200) {
				console.error(`error getting constituents - ${res?.status}`);
				return;
			}

			const data = await res.json();
			setConstituents(data);
		} catch (e) {
			console.error(`error getting constituents - ${e}`);
		}
	};

	useEffect(() => {
		fetchConstituents();
	}, []);

	// TODO: Display constituents in MUI DataGrid
	// TODO: Add two buttons, Export CSV and Add New Constituent button
	// Export CSV, call getConstituents, create csv blob on frontend
	// New Constituent opens form for new Constituent. Email is required
	// if user email is already in DB, we update user instead (handled
	// in CreateConstituent business layer)
	return (
		<div>
			<h1>Constituents</h1>
			<ul>
				{constituents &&
					constituents?.map((constituent) => (
						<li key={constituent.id}>
							{constituent.first_name} {constituent.last_name} -{' '}
							{constituent.email}
						</li>
					))}
			</ul>
		</div>
	);
};

export default ConstituentList;
