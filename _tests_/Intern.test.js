const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("getSchool", () => {
        it("Should return entered school", () => {
            expect(new Intern(null, null, null, "Schoolean Boolean").getSchool()).toEqual("Schoolean Boolean");
        })
    })
});