'use strict';

import chai from 'chai';
import server from '../app';
import chaiHttp from 'chai-http';
const expect = chai.expect;

chai.use(chaiHttp);

describe('AlbumController Test', () => {
  const body = { id: 'A12345', album: 'Juan Batty' };

  it('POST api/album', done => {
    chai
      .request(server)
      .post('/api/album')
      .send(body)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        done();
      });
  });

  it('GET api/album', done => {
    chai
      .request(server)
      .get('/api/album')
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });

  it('PUT api/album', done => {
    const id = '12345';

    chai
      .request(server)
      .put(`/api/album/${id}`)
      .send(body)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });

  it('DELETE api/album', done => {
    const id = '12345';

    chai
      .request(server)
      .delete(`/api/album/${id}`)
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.property('data');
        done();
      });
  });
});
