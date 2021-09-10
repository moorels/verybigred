import {
  fields4S,
  fields4,
  createFields4,
  updateFields4,
  deleteFields4,
} from './fields4S'

describe('fields4S', () => {
  scenario('returns all fields4S', async (scenario) => {
    const result = await fields4S()

    expect(result.length).toEqual(Object.keys(scenario.fields4).length)
  })

  scenario('returns a single fields4', async (scenario) => {
    const result = await fields4({ id: scenario.fields4.one.id })

    expect(result).toEqual(scenario.fields4.one)
  })

  scenario('creates a fields4', async (scenario) => {
    const result = await createFields4({
      input: { field1: 'String', fields4Id: scenario.fields4.two.fields4Id },
    })

    expect(result.field1).toEqual('String')
    expect(result.fields4Id).toEqual(scenario.fields4.two.fields4Id)
  })

  scenario('updates a fields4', async (scenario) => {
    const original = await fields4({ id: scenario.fields4.one.id })
    const result = await updateFields4({
      id: original.id,
      input: { field1: 'String2' },
    })

    expect(result.field1).toEqual('String2')
  })

  scenario('deletes a fields4', async (scenario) => {
    const original = await deleteFields4({ id: scenario.fields4.one.id })
    const result = await fields4({ id: original.id })

    expect(result).toEqual(null)
  })
})
