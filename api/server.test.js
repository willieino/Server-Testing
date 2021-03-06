const request = require('supertest');
const server = require('./server.js');
const db = require('../data/dbConfig')

describe('the route handler', () => {
    describe('delete /api/projects', () => {
        it('respond with 200', async () => {
            const response = await request(server)
                .get('/');
            expect(response.status).toBe(200);
        })
        it('respond with json', async () => {
            const response = await request(server)
                .get('/');
            expect(response.type).toMatch(/json/i);
        })
        it('sends correct response object', async () => {
            const response = await request(server)
                .get('/');
            expect(response.body).toEqual({ api: 'up' });
        })
    })


})



describe('create new project', () => {
    describe('post /api/projects', () => {
        afterEach(async () => {
            await db('projects').truncate();
        })
        it('respond with 201', async () => {
            const body = { name: 'test' };
            const response = await request(server)
                .post('/api/projects').send(body);
            expect(response.status).toBe(201);

        })
        it('respond with 400 when body is missing', async () => {
            const body = {};
            const response = await request(server)
                .post('/api/projects').send(body);
            expect(response.status).toBe(400);

        })
    })
})

/* describe('the project model', () => {
    it('should insert new project', async () => {
    
    const ids = await server.insert({name: 'test', description: 'test'})
    expect(ids.length).toBe(1);
    expect(ids[0]).toBe(1);
    
    });
    
    }); */