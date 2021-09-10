import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

// Used when the environment variable REDWOOD_SECURE_SERVICES=1
export const beforeResolver = (rules) => {
  rules.add(requireAuth)
}

export const fields4S = () => {
  return db.fields4.findMany()
}

export const fields4 = ({ id }) => {
  return db.fields4.findUnique({
    where: { id },
  })
}

export const createFields4 = ({ input }) => {
  return db.fields4.create({
    data: input,
  })
}

export const updateFields4 = ({ id, input }) => {
  return db.fields4.update({
    data: input,
    where: { id },
  })
}

export const deleteFields4 = ({ id }) => {
  return db.fields4.delete({
    where: { id },
  })
}

export const Fields4 = {
  contactemail: (_obj, { root }) =>
    db.fields4.findUnique({ where: { id: root.id } }).contactemail(),
}
