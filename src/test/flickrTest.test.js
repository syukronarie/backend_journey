import chaiHttp from 'chai-http'
import server from "../server"
import chai, { expect } from 'chai'
import { getFlickrDataSource } from "../api/flickrDataSource";
import { flickerResp } from '../controllers/flickrHandle'
import { OkResponse } from '../utils/helpers/responseOut';

chai.should()
chai.use(chaiHttp);

describe("Testing /flickr Route", () => {
    describe('GET /flickr', () => {
        it('should OK', (done) => {
            chai
                .request(server)
                .get('/flickr').end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(200);
                    done(err)
                });
        });
    });
    describe("GET BY TAGS", () => {
        it("should Get BY TAGS", (done) => {
            chai
                .request(server)
                .get('/flickr?search=hello').end((err, res) => {
                    if (err) done(err);
                    expect(res).to.have.status(200);
                    done(err)
                });
        })
    })
})

const dataFake = flickerResp({
    link: "http://google.com",
    media: { m: "100_m.jpg" },
    title: "Is Test title",
    author: "Arie",
    published: "2021",
    description: "Simple Test",
    tags: "test"
})


const message = "OK"

const testAxios = {
    get(url) {
        return new Promise((res, _rej) => res({
            data: {
                message,
                data: dataFake
            }
        }))
    }
}


describe("Testing Flickr Response", () => {
    it("Should Return Equals", async() => {
        const res = await getFlickrDataSource(testAxios);
        console.log("Info", res)
        return expect(res).deep.equal(OkResponse(message, dataFake));
    })
})

// getFlickrDataSource(testAxios);

// getFlickrDataSource(testAxios);