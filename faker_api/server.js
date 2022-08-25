const express = require("express");
const {faker} = require("@faker-js/faker");
const app = express();
const port = 8000;

// auto generator user with faker
class User {

    constructor() {
        this._id = faker.datatype.uuid()
        this._firstName = faker.name.firstName();
        this._lastName = faker.name.lastName();
        this._phoneNumber = faker.phone.phoneNumber();
        this._email = faker.internet.email();
        this._password = faker.internet.password();
    }

}

// auto generator company with faker
class Company {

    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}


app.listen( port, () => console.log(`Listening on port: ${port}`) );

// Return User
app.get("/api/users/new", (req , res) => {
    res.json(new User());
});

// Return Company
app.get("/api/companies/new", (req , res) => {
    res.json(new Company());
})

// Return both user and company
app.get("/api/user/company", (req , res) => {
    res.json({
        User : new User(),
        Company: new Company(),
    });
})
