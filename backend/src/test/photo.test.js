'use strict';

import chai from 'chai';
import server from '../app';
import chaiHttp from 'chai-http';
const expect = chai.expect;

chai.use(chaiHttp);

describe('PhotoController Test', () => {
  const body = { id: 'A12345', photo: 'Juan Batty' };

  it('POST api/photo', done => {
    chai
      .request(server)
      .post('/api/photo')
      .send(body)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('GET api/photo', done => {
    chai
      .request(server)
      .get('/api/photo')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });

  it('PUT api/photo', done => {
    const id = '12345';

    chai
      .request(server)
      .put(`/api/photo/${id}`)
      .send(body)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });

  it('DELETE api/photo', done => {
    const id = '12345';

    chai
      .request(server)
      .delete(`/api/photo/${id}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });
});
