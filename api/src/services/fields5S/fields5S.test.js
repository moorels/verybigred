import {
  fields5S,
  fields5,
  createFields5,
  updateFields5,
  deleteFields5,
} from './fields5S'

describe('fields5S', () => {
  scenario('returns all fields5S', async (scenario) => {
    const result = await fields5S()

    expect(result.length).toEqual(Object.keys(scenario.fields5).length)
  })

  scenario('returns a single fields5', async (scenario) => {
    const result = await fields5({ id: scenario.fields5.one.id })

    expect(result).toEqual(scenario.fields5.one)
  })

  scenario('creates a fields5', async (scenario) => {
    const result = await createFields5({
      input: { field1: 'String', fields5Id: scenario.fields5.two.fields5Id },
    })

    expect(result.field1).toEqual('String')
    expect(result.fields5Id).toEqual(scenario.fields5.two.fields5Id)
  })

  scenario('updates a fields5', async (scenario) => {
    const original = await fields5({ id: scenario.fields5.one.id })
    const result = await updateFields5({
      id: original.id,
      input: { field1: 'String2' },
    })

    expect(result.field1).toEqual('String2')
  })

  scenario('deletes a fields5', async (scenario) => {
    const original = await deleteFields5({ id: scenario.fields5.one.id })
    const result = await fields5({ id: original.id })

    expect(result).toEqual(null)
  })
})
