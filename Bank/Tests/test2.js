const request = require('supertest');

const app = require('../server');

describe('getStudentEnrollmentPayment routes', () => {
  it('Should return found', async () => {
    const response = await request(app).get('/getStudentEnrollmentPayment');

    expect(response.statusCode).toBe(200);
  });
});

describe('paymentenrollement routes', () => {
    it('Should return found', async () => {
      const response = await request(app).post('/paymentenrollement');

      expect(response.statusCode).toBe(200);
    });
  });