const axios = require("axios");
const expect = require('chai').expect;

describe("server on testing ", () => {
  it("should respond to GET requests for /api/blogs with a 200 status code", async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/blogs");
    expect(response.status).to.equal(200);
  });

  it("should send back parsable stringified JSON", async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/blogs", {
      transformResponse: [],
    });
    expect(JSON.parse.bind(this, response.data)).to.not.throw();
  });

  it("should send back an object", async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/blogs");
    expect(response.data).to.be.an('object');
  });

  it("should send an object containing a `results` array", async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/blogs");
    expect(response.data).to.be.an('object');
    expect(response.data.results).to.be.an('array');
  });

  it("should accept POST requests to /api/blogs", async () => {
    let response = await axios.post("http://127.0.0.1:3000/api/blogs", {
      username: "Jon",
      text: "write my blog!",
    });
    expect(response.status).to.equal(201);
  });

  it("should respond with posts that were previously posted", async () => {
    let postResponse = await axios.post("http://127.0.0.1:3000/api/blogs", {
      username: "Jon",
      text: "write my blog!",
    });
    // Now if we request the blog, that post we posted should be there:
    let response = await axios("http://127.0.0.1:3000/api/blogs");
    const posts = response.data.results;
    expect(posts[posts.length - 1].username).to.equal("Jon");
    expect(posts[posts.length - 1].text).to.equal("write my blog!");
  });

  it('Should respond to OPTIONS request with a status code 204', async () => {
    const response = await axios.options('http://127.0.0.1:3000/api/blogs')
    expect(response.status).to.equal(204);
  });

  it('Should respond to OPTIONS request with a header GET, POST, PUT, DELETE, OPTIONS', async () => {
    const response = await axios.options('http://127.0.0.1:3000/api/blogs')
    expect(response.headers['access-control-allow-methods']).to.equal('GET, POST, PUT, DELETE, OPTIONS');
  });

  it("Should 404 when asked for a nonexistent endpoint", async () => {
    try {
      let response = await axios.get("http://127.0.0.1:3000/unavailable");
    } catch (err) {
      expect(err.response.status).to.equal(404);
    }
  });
});
