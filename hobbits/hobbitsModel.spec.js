const Hobbits = require('./hobbitsModel.js');
const db = require('../data/dbConfig.js');

describe('hobbits model', () => {
	describe('insert', () => {
		beforeEach(async () => {
			await db('hobbits').truncate();
		});

		it('should have the right length after insert', async () => {
			await Hobbits.insert({ name: 'Gaffer' });
			await Hobbits.insert({ name: 'Sam' });

			const hobbits = await db('hobbits');
			expect(hobbits).toHaveLength(2);
		});

		it('should return the obj that we inserted', async () => {
			let hobbit = await Hobbits.insert({ name: 'Gaffer' });
			expect(hobbit.name).toBe('Gaffer');

			hobbit = await Hobbits.insert({ name: 'Sam' });
			expect(hobbit.name).toBe('Sam');
		});
	});
});
