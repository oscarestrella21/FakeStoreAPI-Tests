pm.test("Status code is 201 created", function () {
    pm.response.to.have.status(201);
});

pm.test("Response body contains an ID", () => {
    const newId = pm.response.json().id;
    console.log("New created ID: " + newId);
});
