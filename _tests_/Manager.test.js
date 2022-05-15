const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("officePhone", () => {
        it("Should return entered office phone number", () => {
            expect(new Manager(null, null, null, "(555) 867-5309").getOfficeNumber()).toEqual("(555) 867-5309");
        })
    })
});
