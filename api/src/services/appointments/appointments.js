import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const appointments = () => {
  return db.appointment.findMany()
}

export const appointmentsID = (appointEmailId) => {
  return db.appointment.findMany({
    where: { appointEmailId: appointEmailId.appointEmailId },
  })
}


export const appointment = ({ id }) => {
  return db.appointment.findUnique({
    where: { id },
  })
}

export const createAppointment = ({ input }) => {
  return db.appointment.create({
    data: input,
  })
}

export const updateAppointment = ({ id, input }) => {
  return db.appointment.update({
    data: input,
    where: { id },
  })
}

export const deleteAppointment = ({ id }) => {
  return db.appointment.delete({
    where: { id },
  })
}

export const Appointment = {
  contactemail: (_obj, { root }) =>
    db.appointment.findUnique({ where: { id: root.id } }).contactemail(),
}
