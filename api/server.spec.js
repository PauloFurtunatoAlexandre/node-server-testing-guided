const server = require('./server.js');
const request = require('supertest');

describe('server.js', () => {
	it('should run in a testing environment', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('GET /', () => {
		//http status code
		//format of responses
		//content of responses

		it('should return 200', () => {
			return request(server)
				.get('/')
				.then((res) => {
					//jest expect, not supertest
					expect(res.status).toBe(200);
				});
		});

		it('should return 200 (async)', async () => {
			const res = await request(server).get('/');
			expect(res.status).toBe(200);
		});

		it('should return json', async () => {
			const res = await request(server).get('/');
			expect(res.type).toBe('application/json');
		});

		it("should return { api: 'up' }", async () => {
			const res = await request(server).get('/');
			expect(res.body).toEqual({ api: 'up' });
		});
	});
});
