import express from 'express';
import cors from 'cors';
import { ConstituentsController } from './controller/ConstituentsController';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const constituentController = new ConstituentsController();

app.post('/api/constituents', constituentController.createConstituent);
app.get('/api/constituents', constituentController.getConstituents);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
