import {
  appointments,
  appointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from './appointments'

describe('appointments', () => {
  scenario('returns all appointments', async (scenario) => {
    const result = await appointments()

    expect(result.length).toEqual(Object.keys(scenario.appointment).length)
  })

  scenario('returns a single appointment', async (scenario) => {
    const result = await appointment({ id: scenario.appointment.one.id })

    expect(result).toEqual(scenario.appointment.one)
  })

  scenario('creates a appointment', async (scenario) => {
    const result = await createAppointment({
      input: {
        time: 'String',
        date: 'String',
        appointEmailId: scenario.appointment.two.appointEmailId,
      },
    })

    expect(result.time).toEqual('String')
    expect(result.date).toEqual('String')
    expect(result.appointEmailId).toEqual(
      scenario.appointment.two.appointEmailId
    )
  })

  scenario('updates a appointment', async (scenario) => {
    const original = await appointment({ id: scenario.appointment.one.id })
    const result = await updateAppointment({
      id: original.id,
      input: { time: 'String2' },
    })

    expect(result.time).toEqual('String2')
  })

  scenario('deletes a appointment', async (scenario) => {
    const original = await deleteAppointment({
      id: scenario.appointment.one.id,
    })

    const result = await appointment({ id: original.id })

    expect(result).toEqual(null)
  })
})
