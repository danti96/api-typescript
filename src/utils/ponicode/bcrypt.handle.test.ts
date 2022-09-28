import * as bcrypt_handle from "../bcrypt.handle"
// @ponicode
describe("bcrypt_handle.encrypt", () => {
    test("0", async () => {
        await bcrypt_handle.encrypt(true)
    })

    test("1", async () => {
        await bcrypt_handle.encrypt(false)
    })
})
