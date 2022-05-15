const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("getName", () => {
        it("Should return entered name", () => {
            expect(new Employee("someGuy").getName()).toEqual("someGuy");
        })
    })
});

describe("Employee", () => {
    describe("getid", () => {
        it("Should return entered ID#", () => {
            expect(new Employee(null, "1233").getId()).toEqual("1233");
        })
    })
});

describe("Employee", () => {
    describe("getEmail", () => {
        it("Should return entered email", () => {
            expect(new Employee(null, null, "someGuy@email.com").getEmail()).toEqual("someGuy@email.com");
        })
    })
});
