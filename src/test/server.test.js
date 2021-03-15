import chai, { expect } from 'chai'
import server from "../server"
import chaiHttp from 'chai-http'
import { ErrorResponse } from '../utils/helpers/responseOut';

chai.should()
chai.use(chaiHttp);

describe("Testing Server", () => {
    describe('GET 404 Route', () => {
        it('should 404', (done) => {
            chai
                .request(server)
                .get('/404').end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(404);
                    expect(res.body).eqls(ErrorResponse("route /404 not found"))
                    done(err)
                });
        });

    });
})