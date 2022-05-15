const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("getGithub", () => {
        it("Should return entered Github", () => {
            expect(new Engineer(null, null, null, "someGuy").getGithub()).toEqual("someGuy");
        })
    })
});