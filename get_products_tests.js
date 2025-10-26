pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Response body is an array of products", () => {
    pm.expect(pm.response.json()).to.be.an('array');
});

pm.test("Each product has an id, title, price, description, category, image, and rating", () => {
    pm.response.json().forEach(function (product) {
        pm.expect(product).to.have.property('id');
        pm.expect(product).to.have.property('title');
        pm.expect(product).to.have.property('price');
        pm.expect(product).to.have.property('description');
        pm.expect(product).to.have.property('category');
        pm.expect(product).to.have.property('image');
        pm.expect(product).to.have.property('rating');
        pm.expect(product.rating).to.have.property('rate');
        pm.expect(product.rating).to.have.property('count');
    });
});

console.log("Response time: " + pm.response.responseTime + " ms");
