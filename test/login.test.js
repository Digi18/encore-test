process.env.NODE_ENV='test';

const app = require('../server');
const request = require('supertest');
const should = require('chai').should();
const sequelize = require('../db/connection');
const assert = require('assert');

describe('POST /login', () => {
    before((done) => {
        sequelize.sync()
                 .then((result) => {
                 done();
                 })
                 .catch((err) => {
                    console.log("Error:",err);
                 });
    });
    it('User login',async () => {
    
            const data = {name:"Test",email:'test@gmail.com',role:'admin'};
            const result = await request(app).post('/login').send(data);
              
                 const res = result.body;
               
                 res.should.be.a('object');
                 res.should.have.property('token');
       
    });
});