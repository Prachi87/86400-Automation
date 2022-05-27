const supertest = require('supertest');
const { describe, it, before, after } = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const request = supertest(process.env.BASE_URL);
const updatePet = require('../json-body/updatePet.json');

describe('PetSore API Tests', () => {
    describe('Get Pet details by Id', () => {
        let getResponse;
        before(async () => {
          getResponse = await request.get(`/v2/pet/${process.env.PET_ID}`)
        });
        it('should return 200', () =>
          expect(getResponse.status).to.deep.equal(200));
        it('should return a json body', () => {
          expect(getResponse.header).to.include({
            'content-type': 'application/json',
          });
        });
        it('should have correct pet id', () => {
            expect(getResponse.body.id).to.equal(JSON.parse(process.env.PET_ID),10);
        });
        it('should have correct status', () => {
            expect(getResponse.body.status).to.equal('available');
        });
    })
    describe('Update Pet name', () => {
        let putResponse;
        before(async () => {
            putResponse = await request.put('/v2/pet').send(updatePet)
        });
        it('should return 200', () =>
          expect(putResponse.status).to.deep.equal(200));
        it('should return a json body', () => {
          expect(putResponse.header).to.include({
            'content-type': 'application/json',
          });
        });
        it('should have correct pet id', () => {
            expect(putResponse.body.id).to.equal(JSON.parse(process.env.PET_ID),10);
        });
        it('should have correct status', () => {
            expect(putResponse.body.category.name).to.equal('PetDogUpdate');
        });
    })
    describe('Delete a Pet', () => {
        let delResponse;
        before(async () => {
            delResponse = await request.delete(`/v2/pet/${process.env.PET_ID}`)
        });
        it('should return 200', () =>
          expect(delResponse.status).to.deep.equal(200));
        it('should return a json body', () => {
          expect(delResponse.header).to.include({
            'content-type': 'application/json',
          });
        });
        it('should have correct pet id', () => {
            expect(delResponse.body.message).to.equal(process.env.PET_ID);
        });
    })
    describe('Get Pet details by Id after deleting the pet', () => {
        let getResponse;
        before(async () => {
          getResponse = await request.get(`/v2/pet/${process.env.PET_ID}`)
        });
        it('should return 404', () =>
          expect(getResponse.status).to.deep.equal(404));
        it('should return a json body', () => {
          expect(getResponse.header).to.include({
            'content-type': 'application/json',
          });
        });
    })
})