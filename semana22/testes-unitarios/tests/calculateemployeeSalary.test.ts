import { calculateEmployeeSalary } from "../src/calculateEmployeeSalary"
import { employeeMock } from "./mocks/employeeMock"
import { validateEmptyPropertiesMockFailure, validateEmptyPropertiesMockSuccess } from "./mocks/validateEmptyPropertiesMock"

describe("calculate employee salary", () => {

  test("propriedades vazias", () => {
    try {
      const salary = calculateEmployeeSalary(
        employeeMock,
        validateEmptyPropertiesMockFailure
      )
    } catch (error: any) {
      expect(error.message).toEqual("Missing Properties")
    } finally {
      expect.assertions(1)
    }
  })

  test("benefício negativo", ()=>{
    try {
      const salary = calculateEmployeeSalary(
        {...employeeMock, benefits:[-1,0,1]},
        validateEmptyPropertiesMockSuccess
      )
    } catch (error: any) {
      expect(error.message).toEqual("Invalid Benefit")
    } finally {
      expect.assertions(1)
    }
  })

  test("benefício calculado corretamente", ()=>{
    try {


      const salary = calculateEmployeeSalary(
        employeeMock,
        validateEmptyPropertiesMockSuccess
      )

      expect(salary).toEqual(1330)
      expect(validateEmptyPropertiesMockSuccess).toHaveBeenCalled()
      expect(validateEmptyPropertiesMockSuccess).toHaveBeenCalledTimes(1)
      expect(validateEmptyPropertiesMockSuccess).toHaveBeenCalledWith(employeeMock)
    } catch (error: any) {
      
    } finally {
      expect.assertions(1)
    }
  })
})