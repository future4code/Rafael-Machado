export const validateEmptyPropertiesMockSuccess = jest.fn(() => {
  return {
    isValid: true,
    errors: []
  }
})

export const validateEmptyPropertiesMockFailure = jest.fn(() => {
  return {
    isValid: false,
    errors: [{
      key: "name",
      value: ""
    }]
  }
})