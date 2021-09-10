import {
  contacts,
  contact,
  createContact,
  updateContact,
  deleteContact,
} from './contacts'

describe('contacts', () => {
  scenario('returns all contacts', async (scenario) => {
    const result = await contacts()

    expect(result.length).toEqual(Object.keys(scenario.contact).length)
  })

  scenario('returns a single contact', async (scenario) => {
    const result = await contact({ id: scenario.contact.one.id })

    expect(result).toEqual(scenario.contact.one)
  })

  scenario('creates a contact', async (scenario) => {
    const result = await createContact({
      input: {
        email: 'String5645301',
        contactEmailId: scenario.contact.two.contactEmailId,
      },
    })

    expect(result.email).toEqual('String5645301')
    expect(result.contactEmailId).toEqual(scenario.contact.two.contactEmailId)
  })

  scenario('updates a contact', async (scenario) => {
    const original = await contact({ id: scenario.contact.one.id })
    const result = await updateContact({
      id: original.id,
      input: { email: 'String47557922' },
    })

    expect(result.email).toEqual('String47557922')
  })

  scenario('deletes a contact', async (scenario) => {
    const original = await deleteContact({ id: scenario.contact.one.id })
    const result = await contact({ id: original.id })

    expect(result).toEqual(null)
  })
})
