import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe("validate Empty Properties", () => {

  test("string vazia", () => {
    const input = { email: "" }

    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(false)
    expect(output.errors).toContainEqual({
      key: "email",
      value: ""
    })
  })

  test("número zero", () => {
    const input = { age: 0 }

    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(false)
    expect(output.errors).toContainEqual({
      key: "age",
      value: 0
    })
  })

  test("propriedade indefinida", () => {
    const input = { username: undefined }

    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(false)
    expect(output.errors).toContainEqual({
      key: "username",
      value: undefined
    })
  })

  test("propriedade nula", () => {
    const input = { card: null }

    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(false)
    expect(output.errors).toContainEqual({
      key: "card",
      value: null
    })
  })

  test("4 propriedades inválidas", () => {
    const input = {
      id: 1,
      username: undefined,
      card: null,
      age: 0,
      email: ""
    }

    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(false)
    expect(output.errors).toHaveLength(4)
  })

  test("objeto válido", ()=>{
    const input = {
      id: 1,
      username: "Mat",
      card: [1,2,3,4],
      age: 30,
      email: "em@il.com"
    }
    const output = validateEmptyProperties(input)

    expect(output.isValid).toEqual(true)
    expect(output.errors).toHaveLength(0)
  })
})