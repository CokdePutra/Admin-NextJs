const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("./src/app"); // Adjust the path to your app.js file

chai.use(chaiHttp);
const { expect } = chai;

describe("API Tests", () => {
  it("should create a new user and return the correct response", (done) => {
    chai
      .request(app)
      .post("/api/users")
      .send({
        nama: "Jane Doe",
        nim: 654321,
        no_telp: 1234567890,
        golongan_darah: "A+",
        tanggal_lahir: "1991-02-02",
        alamat: "456 Main St",
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an("object");
        expect(res.body).to.have.property("id_user");
        expect(res.body).to.have.property("nama", "Jane Doe");
        expect(res.body).to.have.property("nim", 654321);
        expect(res.body).to.have.property("no_telp", 1234567890);
        expect(res.body).to.have.property("golongan_darah", "A+");
        expect(res.body).to.have.property("tanggal_lahir", "1991-02-02");
        expect(res.body).to.have.property("alamat", "456 Main St");
        done();
      });
  });
});
