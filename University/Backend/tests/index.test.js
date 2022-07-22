const request = require('supertest');

const app = require('../app');

describe('Index routes', () => {
  it('Should return not found', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(404);
    expect(response.body.message).toBe('Not found');
  });
});

describe('Student Enrollment get route', () => {
    it('Should return found', async () => {
      const response = await request(app).get('/enrollment/all');
  
      expect(response.statusCode).toBe(200);
    });
});
  
describe('Profile get route', () => {
    it('Should return found', async () => {
        const response = await request(app).get('/profile');
  
        expect(response.statusCode).toBe(200);
    });
});

describe('Authentication get route', () => {
    it('Should return found', async () => {
        const response = await request(app).get('/auth');
  
        expect(response.statusCode).toBe(200);
    });
});