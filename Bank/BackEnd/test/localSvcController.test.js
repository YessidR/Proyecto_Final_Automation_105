const LocalSvcController = require("../endpoints/controllers/localSvcController").LocalSvcController
const expect = require("chai").expect
const chai = require('chai')
const chaiHttp = require('chai-http')
// const server = require("../server")

const localSvcController = new LocalSvcController();

chai.use(chaiHttp)

const server = 'http://localhost:8000'

describe('Testing class LocalSvcController', () => {
    it('1. Getting all transactions', (done) => {
        chai.request(server).get("/localsvc/s").end((err, res) => {
            // console.log(res.body)
            expect(res.body).has.property('data')
        })
        done()
    })
    it('2. Getting a transaction by Id', (done) => {
        chai.request(server).get("/localsvc/2").end((err, res) => {
            //console.log(res.body)
            expect(res.body).has.property('data').has.property('ID').to.equal(2)
        })
        done()
    })
    // it('3. Getting a transaction by student code', (done) => {
    //     chai.request(server).get("/localsvc/2").body({studentcode: '5432-1234'}).end((err, res) => {
    //         //console.log(res.body)
    //         expect(res.body).has.property('data').has.property('ID').to.equal('5432-1234')
    //     })
    //     done()
    // })
})