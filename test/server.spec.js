const request = require('supertest');

const server = require('../server');

describe('/health', () => {
  it('should return status: UP', (done) => {
    request(server)
      .get('/health')
      .expect('Content-Type', /json/)
      .expect(200, { status: 'UP'}, done)
  });
});

describe('/greeting', () => {
  describe('should return a greeting message', () => {
    it('when name is a string', (done) => {
      request(server)
        .post('/greeting')
        .send( { name: "joe" } )
        .expect('Content-Type', /json/)
        .expect(200, { message: 'Hi, joe' }, done)
    })
    it('when name is a number', (done) => {
      request(server)
        .post('/greeting')
        .send( { name: 123 } )
        .expect('Content-Type', /json/)
        .expect(200, { message: 'Hi, 123' }, done)
    })
  })
})