const {firstFunc} = require("../Utils/utilityFunctions")

describe("first function testing", () => {
    it("when firstFunc is called, 'hello world' is returned", () =>{
        const result = firstFunc()
        expect(result).toBe('hello world')
    })
})