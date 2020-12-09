import TesteController from "../../src/controllers/TestController"

describe('Teste', () => {
  test('its ok', () => {
    expect(TesteController.teste()).toEqual('Hello World')
  })
})

